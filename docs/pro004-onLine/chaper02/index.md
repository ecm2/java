[[toc]]

#  MySQL-day02

## 课程内容 

- **explain**
- **单表使用索引及常见索引失效**
- **查询优化**
- **排序分组优化**
- **覆盖索引优化**
- **慢查询日志**
- **View视图**  
- **主从复制**

# 1 Explain

MySQL中有专门负责优化SELECT语句的优化器模块，主要功能：通过计算分析系统中收集到的统计信息，为客户端请求的Query提供他认为最优的执行计划（他认为最优的数据检索方式，但不见得是DBA认为是最优的，这部分最耗费时间）

当客户端向MySQL 请求一条Query，命令解析器模块完成请求分类，区别出是 SELECT 并转发给MySQL Query Optimizer时，MySQL Query Optimizer 首先会对整条Query进行优化，处理掉一些常量表达式的预算，直接换算成常量值。并对 Query 中的查询条件进行简化和转换，如去掉一些无用或显而易见的条件、结构调整等。然后分析 Query 中的 Hint 信息（如果有），看显示Hint信息是否可以完全确定该Query 的执行计划。如果没有 Hint 或Hint 信息还不足以完全确定执行计划，则会读取所涉及对象的统计信息，根据 Query 进行写相应的计算分析，然后再得出最后的执行计划。 


## 1.1 Explain简介

使用EXPLAIN关键字可以模拟优化器执行SQL查询语句，从而知道MySQL是 如何处理你的SQL语句的。分析你的查询语句或是表结构的性能瓶颈。

EXPLAIN功能: 表的读取顺序，数据读取操作的操作类型，哪些索引可以使用，哪些索引被实际使用，表之间的引用，每张表有多少行被优化器查询等内容。

使用方式为：Explain + SQL语句

EXPLAIN出来的信息有10列，分别是**==id、select_type、table、type、possible_keys、key、key_len、ref、rows、Extra==**

**id: 选择标识符**

**select_type: 表示查询的类型**

**table: 输出结果集的表**

**partitions: 匹配的分区**

**type: 表示表的连接类型**

**possible_keys: 表示查询时，可能使用的索引**

**key: 表示实际使用的索引**

**key_len: 索引字段的长度**

**ref: 列与索引的比较**

**rows: 扫描出的行数(估算的行数)**

**filtered: 按表条件过滤的行百分比**

**Extra: 执行情况的描述和说明**

创建一下数据库表和数据，接下来进行explain的详细学习

```sql
 CREATE TABLE t1(id INT(10) AUTO_INCREMENT,content  VARCHAR(100) NULL ,  PRIMARY KEY (id));
 CREATE TABLE t2(id INT(10) AUTO_INCREMENT,content  VARCHAR(100) NULL ,  PRIMARY KEY (id));
 CREATE TABLE t3(id INT(10) AUTO_INCREMENT,content  VARCHAR(100) NULL ,  PRIMARY KEY (id));
 CREATE TABLE t4(id INT(10) AUTO_INCREMENT,content  VARCHAR(100) NULL ,  PRIMARY KEY (id));
 
 INSERT INTO t1(content) VALUES(CONCAT('t1_',FLOOR(1+RAND()*1000))); 
 INSERT INTO t2(content) VALUES(CONCAT('t2_',FLOOR(1+RAND()*1000)));  
 INSERT INTO t3(content) VALUES(CONCAT('t3_',FLOOR(1+RAND()*1000)));    
 INSERT INTO t4(content) VALUES(CONCAT('t4_',FLOOR(1+RAND()*1000)));
```

### 1.1.1 id

select查询的序列号,包含一组数字，表示查询中执行select子句或操作表的顺序, 三种情况

-  id相同，执行顺序由上至下

```sql
EXPLAIN select t1.id,t2.id,t3.id,t4.id from t1,t2,t3,t4
```

- id不同，如果是子查询，id的序号会递增，id值越大优先级越高，越先被执行 

```sql
EXPLAIN SELECT
	t1.id 
FROM
	t1 
WHERE
	t1.id = ( SELECT t2.id FROM t2 WHERE t2.id = ( SELECT t3.id FROM t3 WHERE t3.content = 't3_354' ) )
```

- id相同，不同，同时存在

```sql
EXPLAIN SELECT
	t1.id,
	(select t4.id from t4 where t4.id = t1.id)id4
FROM
	t1,t2
```

**注意:**

- **id如果相同，可以认为是一组，从上往下顺序执行**
- **在所有组中，id值越大，优先级越高，越先执行** 
- **id号每个号码，表示一趟独立的查询, 一个sql的查询趟数越少越好**

### 1.1.2 select_type

**SIMPLE** : 简单的 select 查询,查询中不包含子查询或者UNION

**PRIMARY** :查询中若包含任何复杂的子部分，最外层查询则被标记为primary

**SUBQUERY**: 在SELECT或WHERE列表中包含了子查询

**DEPENDENT SUBQUERY**: 在SELECT或WHERE列表中包含了子查询,子查询基于外层

**UNCACHEABLE SUBQUREY**: 表示这个subquery的查询要受到外部表查询的影响

**DERIVED**: 在FROM列表中包含的子查询被标记为DERIVED(衍生) MySQL会递归执行这些子查询, 把结果放在临时表里

**UNION**: 这是UNION语句其中的一个SQL元素

**UNION RESULT**: 从UNION表获取结果的SELECT

### 1.1.3 table

显示这一步所访问数据库中表名称（显示这一行的数据是关于哪张表的），有时不是真实的表名字，可能是简称

### 1.1.4 partitions

代表分区表中的命中情况，非分区表，该项为null

### 1.1.5 type

对表访问方式，表示MySQL在表中找到所需行的方式，又称“访问类型”。

常用的类型有： **ALL、index、range、 ref、eq_ref、const、system、NULL（从左到右，性能从差到好）**

**==ALL==**: Full Table Scan， MySQL将遍历全表以找到匹配的行

**==index==**: Full Index Scan，index与ALL区别为index类型只遍历索引树, all和Index都是读全表，但index是从索引中读取的，而all是从硬盘中读的

**==range==**: 只检索给定范围的行，使用一个索引来选择行, **范围索引扫描比全表扫描要好**，因为它只需要开始于索引的某一点，而结束语另一点，不用扫描全部索引

**==ref==**:  表示上述表的连接匹配条件，即哪些列或常量被用于查找索引列上的值

**==eq_ref==**: 类似ref，区别就在使用的索引是唯一索引，对于每个索引键值，表中只有一条记录匹配，简单来说，就是多表连接中使用primary key或者 unique key作为关联条件

**==const==**: 表示通过索引一次就找到了,const用于primary key或者unique索引, 因为只匹配一行数据，所以很快 如将主键置于where列表中，MySQL就能将该查询转换为一个常量

**==system==**: 表仅有一行记录，这是const类型的特例，查询起来非常迅速

**==NULL==**: MySQL在优化过程中分解语句，执行时甚至不用访问表或索引，例如从一个索引列里选取最小值可以通过单独索引查找完成。

==**备注：一般来说，得保证查询至少达到range级别，最好能达到ref。**==

### 1.1.6 possible_keys

指出MySQL能使用哪个索引在表中找到记录，查询涉及到的字段上若存在索引，则该索引将被列出，但不一定被查询使用（该查询可以利用的索引，如果没有任何索引显示 null）

### 1.1.7 key 

key列显示MySQL实际决定使用的键（索引），必然包含在possible_keys中

### 1.1.8 key_len

key_len表示索引使用的字节数，根据这个值可以判断索引的使用情况，特别是在组合索引的时候，判断该索引有多少部分被使用到非常重要, 值越大索引的效果越好。

```sql
CREATE INDEX idx_name ON t3(content);
```

**计算逻辑:** 

- 先看索引上字段的类型+长度比如 int=4 ; varchar(20) =20 ; char(20) =20 
- 如果是varchar或者char这种字符串字段，视字符集要乘不同的值，比如utf-8要乘 3，GBK要乘2
- varchar这种动态字符串要加2个字节
- 允许为空的字段要加1个字节 

### 1.1.9 ref 

显示将哪些列或常量与键列中命名的索引进行比较，以从表中选择行

### 1.1.10 rows

 估算出结果集行数，表示MySQL根据表统计信息及索引选用情况，估算的找到所需的记录所需要读取的行数

### 1.1.11 filtered

这个字段表示存储引擎返回的数据在server层过滤后，剩下多少满足查询的记录数量的比例，**注意是百分比，不是具体记录数**

### 1.1.12 Extra

该列包含MySQL解决查询的详细信息,有以下几种情况：

**Using where:**不用读取表中所有信息，仅通过索引就可以获取所需数据，这发生在对表的全部的请求列都是同一个索引的部分的时候，表示mysql服务器将在存储引擎检索行后再进行过滤

**Using temporary**：表示MySQL需要使用临时表来存储结果集，常见于排序和分组查询，常见 group by ; order by

**Using filesort**：当Query中包含 order by 操作，而且无法利用索引完成的排序操作称为“文件排序”

**Using join buffer**：改值强调了在获取连接条件时没有使用索引，并且需要连接缓冲区来存储中间结果。如果出现了这个值，那应该注意，根据查询的具体情况可能需要添加索引来改进能。

**Impossible where**：这个值强调了where语句会导致没有符合条件的行（通过收集统计信息不可能存在结果）。

**Select tables optimized away**：这个值意味着仅通过使用索引，优化器可能仅从聚合函数结果中返回一行

**No tables used**：Query语句中使用from dual 或不含任何from子句

## 1.2 注意事项

- EXPLAIN不会告诉你关于触发器、存储过程的信息或用户自定义函数对查询的影响情况
-  EXPLAIN不考虑各种Cache
- EXPLAIN不能显示MySQL在执行查询时所作的优化工作
- 部分统计信息是估算的，并非精确值
- EXPALIN只能解释SELECT操作，其他操作要重写为SELECT后查看执行计划

# 2 数据准备

## 2.1 建表

```sql
CREATE TABLE `dept` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `deptName` VARCHAR(30) DEFAULT NULL,
 `address` VARCHAR(40) DEFAULT NULL,
 `ceo` INT NULL ,
 PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
 
CREATE TABLE `emp` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `empno` INT NOT NULL ,
 `name` VARCHAR(20) DEFAULT NULL,
 `age` INT(3) DEFAULT NULL,
 `deptId` INT(11) DEFAULT NULL,
 PRIMARY KEY (`id`)
 #CONSTRAINT `fk_dept_id` FOREIGN KEY (`deptId`) REFERENCES `t_dept` (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

```

## 2.2 设置参数

```sql
创建函数，假如报错：This function has none of DETERMINISTIC......
# 由于开启过慢查询日志bin-log, 我们就必须为我们的function指定一个参数。
#主从复制，主机会将写操作记录在bin-log日志中。从机读取bin-log日志，执行语句来同步数据。
#如果使用函数来操作数据，会导致从机和主键操作时间不一致。所以，默认情况下，mysql不开启创建函数设置
#查看mysql是否允许创建函数：
show variables like 'log_bin_trust_function_creators';
#命令开启：允许创建函数设置：
set global log_bin_trust_function_creators=1; 
# 不加global只是当前窗口有效。mysqld重启，上述参数又会消失。
#永久方法：
•windows下：my.ini[mysqld]加上：log_bin_trust_function_creators=1  
•linux下：/etc/my.cnf下my.cnf[mysqld]加上：log_bin_trust_function_creators=1
```

## 2.3 创建函数

随机产生字符串

```sql
DELIMITER $$
CREATE FUNCTION rand_string(n INT) RETURNS VARCHAR(255)
BEGIN    
DECLARE chars_str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ';
DECLARE return_str VARCHAR(255) DEFAULT '';
DECLARE i INT DEFAULT 0;
WHILE i < n DO  
SET return_str =CONCAT(return_str,SUBSTRING(chars_str,FLOOR(1+RAND()*52),1));  
SET i = i + 1;
END WHILE;
RETURN return_str;
END $$
 
#假如要删除
DELIMITER ;
drop function rand_string;
```

随机产生部门编号

```sql
#用于随机产生多少到多少的编号
DELIMITER $$
CREATE FUNCTION  rand_num (from_num INT ,to_num INT) RETURNS INT(11)
BEGIN   
DECLARE i INT DEFAULT 0;  
SET i = FLOOR(from_num +RAND()*(to_num - from_num+1))   ;
RETURN i;  
END$$ 
 
#假如要删除
DELIMITER ;
drop function rand_num;
```

## 2.4 创建存储过程

创建往emp表中插入数据的存储过程

```sql
DELIMITER $$
CREATE PROCEDURE  insert_emp(  START INT ,  max_num INT )
BEGIN  
DECLARE i INT DEFAULT 0;   
 SET autocommit = 0;    #设置手动提交事务
 REPEAT  #循环
 SET i = i + 1;  #赋值
 INSERT INTO emp (empno, NAME ,age ,deptid ) VALUES ((START+i),rand_string(6),rand_num(30,50),rand_num(1,10000));  
 UNTIL i = max_num  
 END REPEAT;  
 COMMIT;  #提交事务
END$$
 
#删除
DELIMITER ;
drop PROCEDURE insert_emp;
```

创建往dept表中插入数据的存储过程

```sql
#执行存储过程，往dept表添加随机数据
DELIMITER $$
CREATE PROCEDURE `insert_dept`(  max_num INT )
BEGIN  
DECLARE i INT DEFAULT 0;   
 SET autocommit = 0;    
 REPEAT  
 SET i = i + 1;  
 INSERT INTO dept ( deptname,address,ceo ) VALUES (rand_string(8),rand_string(10),rand_num(1,500000));  
 UNTIL i = max_num  
 END REPEAT;  
 COMMIT; 
END$$
 
#删除
DELIMITER ;
drop PROCEDURE insert_dept;
```

删除表上所有索引的存储过程

```sql
DELIMITER $$
CREATE  PROCEDURE `proc_drop_index`(dbname VARCHAR(200),tablename VARCHAR(200))
BEGIN
       DECLARE done INT DEFAULT 0;
       DECLARE ct INT DEFAULT 0;
       DECLARE _index VARCHAR(200) DEFAULT '';
       DECLARE _cur CURSOR FOR  SELECT   index_name   FROM information_schema.STATISTICS   WHERE table_schema=dbname AND table_name=tablename AND seq_in_index=1 AND    index_name <>'PRIMARY'  ;
#每个游标必须使用不同的declare continue handler for not found set done=1来控制游标的结束
       DECLARE  CONTINUE HANDLER FOR NOT FOUND set done=2 ;      
#若没有数据返回,程序继续,并将变量done设为2
        OPEN _cur;
        FETCH _cur INTO _index;
        WHILE  _index<>'' DO 
               SET @str = CONCAT("drop index " , _index , " on " , tablename ); 
               PREPARE sql_str FROM @str ;
               EXECUTE  sql_str;
               DEALLOCATE PREPARE sql_str;
               SET _index=''; 
               FETCH _cur INTO _index; 
        END WHILE;
   CLOSE _cur;
END$$
```

## 2.5 调用存储过程

Dept

```sql
#执行存储过程，往dept表添加1万条数据  
CALL insert_dept(10000);
```

Emp

```sql
#执行存储过程，往emp表添加50万条数据  
CALL insert_emp(100000,500000);
```

# 3 SQL优化

## 3.1 索引失效

### 3.3.1 全值匹配

系统中经常出现的sql语句如下：

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30;
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid=4;
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid=4 AND emp.name = 'abcd';
```

**思考: 索引应该如何建立 ？**

```sql
CREATE INDEX idx_age ON emp(age);
CREATE INDEX idx_age_deptid ON emp(age,deptid);
CREATE INDEX idx_age_deptid_name ON emp(age,deptid,NAME);
```

### 3.3.2 最左法则

如果系统经常出现的sql如下：

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 AND emp.name = 'abcd' ;
或者
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.deptid=1 AND emp.name = 'abcd'; 
```

==**思考: 那原来的idx_age_deptid_name 还能否正常使用？**==

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE deptid=4 AND emp.age=30 AND emp.name = 'abcd'; 
```

如果索引了多列，要遵守最左前缀法则。指的是查询从索引的最左前列开始并且不跳过索引中的列。

过滤条件要使用索引必须按照索引建立时的顺序，依次满足，一旦跳过某个字段，索引后面的字段都无法被使用。

### 3.3.3 计算、函数

模糊查询

```sql
#创建索引
CREATE INDEX idx_name ON emp(NAME);
#函数模糊查询: 索引完全失效
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE LEFT(emp.name,3) = 'abc'; 
```

### 3.3.4 范围条件

出现的sql如下： 

```sql
#索引 idx_age_deptid_name这个索引还能正常使用么？不能，范围右边的列不能使用
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 AND emp.deptId>20 AND emp.name = 'abc' ; 
```

索引优化:

```sql
#将范围查询条件放置语句最后
create index idx_age_name_deptid on emp(age,name,deptid);
```

==**注意: 应用开发中范围查询，例如： 金额查询，日期查询往往都是范围查询。应将查询条件放置where语句最后。**==

### 3.3.5 !=  <>

```sql
#为name字段创建索引
CREATE INDEX idx_name ON emp(NAME);
#执行查看索引是否失效
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.name <> 'abc' ;
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.name != 'abc';
```

### 3.3.6 is not null与is nully

```sql
#IS NULL:可以触发索引
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE age IS NULL; 
#IS NOT NULL:无法触发索引
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE age IS NOT NULL;
```

### 3.3.7 like

```sql
#下列哪个sql语句可以用到索引
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE name LIKE 'ab%'; 
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE name LIKE '%ab%'; 
```

### 3.3.8 类型转换

```sql
#下列哪个sql语句可以用到索引
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE name=123; 
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE name='123';
```

### 3.3.9 小结

假设index(a,b,c)

| Where语句                                                  | 索引是否被使用                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| where a =  3                                               | Y,使用到a                                                    |
| where a =  3 and b = 5                                     | Y,使用到a，b                                                 |
| where a =  3 and b = 5 and c = 4                           | Y,使用到a,b,c                                                |
| where b =  3 或者 where b = 3 and c =  4 或者 where c =  4 | N                                                            |
| where a =  3 and c = 5                                     | 使用到a， 但是c不可以，b中间断了                             |
| where a =  3 and b > 4 and c = 5                           | 使用到a和b， c不能用在范围之后，b断了                        |
| where a is  null and b is not null                         | is null 支持索引  但是is not null 不支持,所以 a 可以使用索引,但是 b不可以使用 |
| where a  <> 3                                              | 不能使用索引                                                 |
| where  abs(a) =3                                           | 不能使用 索引                                                |
| where a =  3 and b like 'kk%' and c = 4                    | Y,使用到a,b,c                                                |
| where a =  3 and b like '%kk' and c = 4                    | Y,只用到a                                                    |
| where a =  3 and b like '%kk%' and c = 4                   | Y,只用到a                                                    |
| where a =  3 and b like 'k%kk%' and c =  4                 | Y,使用到a,b,c                                                |

**索引创建原则:**

- 对于单键索引，尽量选择过滤性更好的索引（例如：手机号，邮件，身份证）
- 在选择组合索引的时候，过滤性最好的字段在索引字段顺序中，位置越靠前越好。
- 选择组合索引时，尽量包含where中更多字段的索引
- 组合索引出现范围查询时，尽量把这个字段放在索引次序的最后面
- 尽量避免造成索引失效的情况
- 拓展: 强制触发索引?mysql一张表最多创建多少个索引?

## 3.2 关联查询优化

### 3.2.1 数据准备

```sql
#分类
CREATE TABLE IF NOT EXISTS `class` (
`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`card` INT(10) UNSIGNED NOT NULL,
PRIMARY KEY (`id`)
);
#图书
CREATE TABLE IF NOT EXISTS `book` (
`bookid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`card` INT(10) UNSIGNED NOT NULL,
PRIMARY KEY (`bookid`)
);
 
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));
 
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));
```

### 3.2.2 left join

下面开始explain分析

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM class LEFT JOIN book ON class.card = book.card;
```

结论：type 有All      

添加索引优化

```sql
ALTER TABLE book ADD INDEX Y (card); 
ALTER TABLE class ADD INDEX X (card); 
```

### 3.2.3 inner join

换成inner join（MySQL自动选择驱动表）

```sql
EXPLAIN  SELECT SQL_NO_CACHE * FROM  class INNER JOIN book ON class.card=book.card;
```

添加索引优化  

```sql
ALTER  TABLE book ADD INDEX Y (card);  
或       
ALTER  TABLE class ADD INDEX X (card);      
```

### 3.2.4 小结

- 保证被驱动表的join字段被索引
- left join 时，选择小表作为驱动表，大表作为被驱动表
- inner join 时，mysql会自动将小结果集的表选为驱动表。
- 子查询尽量不要放在被驱动表，衍生表建不了索引
- 能够直接多表关联的尽量直接关联，不用子查询

## 3.3 子查询优化

```sql
#不推荐
SELECT * FROM t_emp a WHERE a.id NOT IN 
(SELECT b.ceo FROM t_dept b WHERE b.ceo IS NOT NULL);
#推荐
SELECT a.* FROM t_emp a 
LEFT JOIN t_dept b 
ON a.id = b.ceo 
WHERE b.id IS NULL;
```

## 3.4 排序优化

### 3.4.1 排序优化

**order by时不限制索引失效**

```sql
#创建索引  
CREATE  INDEX idx_age_deptid_name ON emp (age,deptid,NAME)
#不限制,索引失效
EXPLAIN  SELECT SQL_NO_CACHE * FROM emp ORDER  BY age,deptid;   
#增加limit过滤条件，使用上索引了。
EXPLAIN  SELECT SQL_NO_CACHE * FROM emp ORDER  BY age,deptid LIMIT 10;
```

**order by时顺序错误,索引失效**

```sql
#创建索引age,deptid,NAME
CREATE  INDEX idx_age_deptid_name ON emp (age,deptid,NAME)
#创建索引age,deptid,empno
CREATE  INDEX idx_age_deptid_empno ON emp (age,deptid,empno); 
#以下哪些索引失效?
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY deptid;  
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY deptid,NAME;   
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY deptid,empno;  
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY NAME,deptid;  
EXPLAIN  SELECT * FROM emp WHERE deptid=45 ORDER BY age;  
```

**order by时规则不一致, 索引失效**

```sql
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY deptid DESC, NAME DESC ;  
EXPLAIN  SELECT * FROM emp WHERE age=45 ORDER BY deptid ASC, NAME DESC ;      
```

### 3.4.2 案例实战

执行案例前先清除emp上的索引，只留主键

**场景:查询年龄为30岁的，且员工编号小于101000的用户，按用户名称排序** 

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE age =30 AND empno <101000 ORDER BY NAME ; 
```

type 是 ALL，即最坏的情况。Extra 里还出现了 Using filesort,也是最坏的情况。

优化思路：

**方案一: 尽量让where的过滤条件和排序使用上索引**

```sql
CREATE INDEX idx_age_empno_name ON emp (age,empno,NAME);
```

**方案二: 为了去掉filesort我们可以把索引建成**

```sql
#删除旧索引
DROP INDEX idx_age_empno_name ON emp
#创建新索引
CREATE INDEX idx_age_name ON emp(age,NAME);
```

**方案三: 选择范围过滤，放弃排序上的索引**

```sql
#删除旧索引
DROP INDEX idx_age_name ON emp;
#创建新索引
CREATE INDEX idx_age_empno ON emp(age,empno);
```

==**结论: filesort，而且type为range, 但是效率更高了,为什么?**==

原因：

- 两个索引同时存在，mysql自动选择最优的方案：（对于这个例子，mysql选择idx_age_empno），但是，随着数据量的变化，选择的索引也会随之变化的
- 所有的排序都是在条件过滤之后才执行的，所以，如果条件过滤掉大部分数据的话，剩下几百几千条数据进行排序其实并不是很消耗性能，即使索引优化了排序，但实际提升性能很有限。 相对的 empno<101000 这个条件，如果没有用到索引的话，要对几万条的数据进行扫描，这是非常消耗性能的，所以索引放在这个字段上性价比最高，是最优选择。

==**小结(重点):**==

**当【范围条件】和【group by 或者 order by】的字段出现二选一时，优先观察条件字段的过滤数量，如果过滤的数据足够多，而需要排序的数据并不多时，优先把索引放在范围字段上。反之，亦然。**

### 3.4.3 双路排序和单路排序

排序的字段若如果不在索引列上，则filesort会有两种算法**双路排序**和**单路排序**

**双路排序**

MySQL 4.1之前是使用双路排序，字面意思就是两次扫描磁盘，最终得到数据， 读取行指针和order by列，对他们进行排序，然后扫描已经排序好的列表，按照列表中的值重新从列表中读取对应的数据输出, 从磁盘取排序字段，在buffer进行排序，再从磁盘取其他字段。取一批数据，要对磁盘进行两次扫描，众所周知，I\O是很耗时的，所以在mysql4.1之后，出现了第二种改进的算法，就是单路排序。

**单路排序**

从磁盘读取查询需要的所有列，按照order by列在buffer对它们进行排序，然后扫描排序后的列表进行输出， 它的效率更快一些，避免了第二次读取数据。并且把随机IO变成了顺序IO，但是它会使用更多的空间， 因为它把每一行都保存在内存中了。

**单路排序存在的问题**

在sort_buffer中，单路比多路要多占用很多空间，因为单路是把所有字段都取出, 所以有可能取出的数据的总大小超出了sort_buffer的容量，导致每次只能取sort_buffer容量大小的数据，进行排序（创建tmp文件，多路合并），排完再取sort_buffer容量大小，再排……从而多次I/O。单路本来想省一次I/O操作，反而导致了大量的I/O操作，反而得不偿失。优化策略如下:

- 增大sort_buffer_size参数的设置


- 增大max_length_for_sort_data参数的设置
- 减少select 后面的查询的字段

### 3.4.4 Order By效率优化

1. Order by时select * 是一个大忌
   - 当Query的字段大小总和小于max_length_for_sort_data 而且排序字段不是TEXT|BLOB 类型时，会用单路排序，否则用多路排序
   - 两种算法的数据都有可能超出sort_buffer的容量，超出之后，会创建tmp文件进行合并排序，导致多次I/O，但是用单路排序算法的风险会更大一些，所以要提高sort_buffer_size


2. 尝试提高 sort_buffer_size
   - 不管用哪种算法，提高这个参数都会提高效率，要根据系统的能力去提高，因为这个参数是针对每个进程（connection）的 1M-8M之间调整。 MySQL5.7，InnoDB存储引擎默认值是1048576字节，1MB。

3. 尝试提高 max_length_for_sort_data

   - 提高这个参数， 会增加用改进算法的概率。
   - 但是如果设的太高，数据总容量超出sort_buffer_size的概率就增大，明显症状是高的磁盘I/O活动和低的处理器使用率。如果需要返回的列的总长度大于max_length_for_sort_data，使用双路算法，否则使用单路算法。1024-8192字节之间调整


### 3.4.5 GROUP BY优化

group by 使用索引的原则几乎跟order by一致 ，唯一区别：

- group by 先排序再分组，遵照索引建的最佳左前缀法则


- 当无法使用索引列，增大max_length_for_sort_data和sort_buffer_size参数的设置


- where高于having, 能写在where限定的条件就不要写在having中了

## 3.5 覆盖索引

**理解方式一**：索引是高效找到行的一个方法，但是一般数据库也能使用索引找到一个列的数据，因此它不必读取整个行。毕竟索引叶子节点存储了它们索引的数据；当能通过读取索引就可以得到想要的数据，那就不需要读取行了。**==一个索引包含了满足查询结果的数据就叫做覆盖索引==**

**理解方式二**：非聚集复合索引的一种形式，它包括在查询里的Select、Join和Where子句用到的所有列（即建索引的字段正好是覆盖查询条件中所涉及的字段，也即，索引包含了查询正在查找的数据）。

# 4 慢查询日志

## 4.1 慢查询日志介绍

MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。 long_query_time的默认值为10，意思是运行10秒以上的语句。 由他来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sql执行超过5秒钟，我们就算慢SQL，希望能收集超过5秒的sql，结合之前explain进行全面分析。

默认情况下，MySQL数据库没有开启慢查询日志，需要我们手动来设置这个参数。

**如果不是调优需要的话，一般不建议启动该参数，因为开启慢查询日志会或多或少带来一定的性能影响。慢查询日志支持将日志记录写入文件。**

## 4.2 查看及开启

```sql
#默认情况下slow_query_log的值为OFF
SHOW VARIABLES LIKE '%slow_query_log%';  
```

命令行开启：

```sql
set global slow_query_log=1; 
```

慢查询日志记录long_query_time时间

```sql
SHOW VARIABLES LIKE '%long_query_time%';
SHOW GLOBAL VARIABLES LIKE 'long_query_time';
SET GLOBAL long_query_time=0.1; 
```

**注意: 运行时间正好等于long_query_time的情况，并不会被记录下来。**

永久生效

```properties
修改my.cnf文件，[mysqld]下增加或修改参数slow_query_log 和slow_query_log_file后，然后重启MySQL服务器。也即将如下两行配置进my.cnf文件 
slow_query_log =1
slow_query_log_file=/var/lib/mysql/atguigu-slow.log 
long_query_time=3
log_output=FILE
```

查询当前系统中有多少条慢查询记录

```sql
SHOW GLOBAL STATUS LIKE '%Slow_queries%'; 
```

## 4.3 mysqldumpslow

在生产环境中，如果要手工分析日志，查找、分析SQL，显然是个体力活，MySQL提供了日志分析工具mysqldumpslow。 

-a: 不将数字抽象成N，字符串抽象成S

-s: 是表示按照何种方式排序；

 c: 访问次数

 l: 锁定时间

 r: 返回记录

 t: 查询时间

 al:平均锁定时间

 ar:平均返回记录数

 at:平均查询时间

-t: 即为返回前面多少条的数据；

-g: 后边搭配一个正则匹配模式，大小写不敏感的；

```sql
#得到返回记录集最多的10个SQL
mysqldumpslow -s r -t 10 /var/lib/mysql/atguigu-slow.log
#得到访问次数最多的10个SQL
mysqldumpslow -s c -t 10 /var/lib/mysql/atguigu-slow.log
#得到按照时间排序的前10条里面含有左连接的查询语句
mysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/atguigu-slow.log
#另外建议在使用这些命令时结合 | 和more 使用 ，否则有可能出现爆屏情况
mysqldumpslow -s r -t 10 /var/lib/mysql/atguigu-slow.log | more
```

# 5 View视图

视图是将一段查询sql封装为一个虚拟的表。 这个虚拟表只保存了sql逻辑，不会保存任何查询结果。

**主要作用:**

- 封装复杂sql语句，提高复用性
- 逻辑放在数据库上面，更新不需要发布程序，面对频繁的需求变更更灵活

**常用场景:**

- 共用查询结果
- 报表

**语法:**

创建

```sql
CREATE VIEW view_name AS SELECT column_name(s) FROM table_name  WHERE condition  
```

使用

```sql
#查询
select * from view_name 
#更新
CREATE OR REPLACE VIEW view_name 
AS SELECT column_name(s) FROM table_name WHERE condition
```

# 笔记

3.3.4 范围条件这个有问题，将索引创建后，并且范围放到最后索引并没有全部命中

小表驱动？