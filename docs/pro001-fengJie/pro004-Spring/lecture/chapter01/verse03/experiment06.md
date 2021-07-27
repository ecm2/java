[[toc]]



# 实验六 [重要]给bean的属性赋值：引入外部属性文件



## 1、加入依赖

```xml
        <!-- MySQL驱动 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.3</version>
        </dependency>
        <!-- 数据源 -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.0.31</version>
        </dependency>
```



## 2、创建外部属性文件

![images](../images/img011.png)

```properties
jdbc.user=root
jdbc.password=atguigu
jdbc.url=jdbc:mysql://192.168.198.100:3306/mybatis-example
jdbc.driver=com.mysql.jdbc.Driver
```



## 3、引入

```xml
    <!-- 引入外部属性文件 -->
    <context:property-placeholder location="classpath:jdbc.properties"/>
```



::: tip

在 IDEA 中引入 Spring 配置文件中名称空间的两种操作方式：

- 在打字标签名的过程中根据提示选择一个正确的名称空间
- 对于直接复制过来的完整标签，可以在名称空间上点击，然后根据提示引入：

![images](../images/img019.png)

:::



## 4、使用

```xml
<!-- 实验六 [重要]给bean的属性赋值：引入外部属性文件 -->
<bean id="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource">
    <property name="url" value="${jdbc.url}"/>
    <property name="driverClassName" value="${jdbc.driver}"/>
    <property name="username" value="${jdbc.user}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>
```



## 5、测试

```java
@Test
public void testExperiment06() throws SQLException {
    DataSource dataSource = iocContainer.getBean(DataSource.class);

    Connection connection = dataSource.getConnection();

    System.out.println("connection = " + connection);
}
```



[上一个实验](experiment05.html) [回目录](../verse03.html) [下一个实验](experiment07.html)