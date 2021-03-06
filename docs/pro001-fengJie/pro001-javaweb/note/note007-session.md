[[toc]]

# 会话控制笔记

## 1、核心代码

```java
HttpSession session = request.getSession();
session.setAttribute("属性名","属性值");
```



## 2、Cookie的工作机制

- Cookie信息是在服务器创建的
- Cookie在服务器端被放在响应数据中返回给浏览器
- 浏览器接收到Cookie后，会把Cookie保存起来
- 浏览器保存了Cookie后每一个请求都会把路径匹配的Cookie带上



## 3、Cookie的时效性

- 会话级Cookie：默认情况
  - 保存在浏览器的内存里，在浏览器关闭时会被释放
- 持久化Cookie：
  - 服务器端调用Cookie的setMaxAge(以秒为单位的存活时间)方法
    - 存活时间正数：还能够存活的秒数
    - 存活时间为零：告诉浏览器立即删除这个Cookie
    - 存活时间为负：告诉浏览器这个Cookie是一个会话级Cookie
  - 服务器把这个Cookie返回给浏览器时就等于通知浏览器：这个Cookie还能存在多长时间



## 4、Cookie的路径

- 每个Cookie都有domain和path这样的两个属性
  - domain：表示这个Cookie属于哪个网站，通常以域名为值
  - path：表示这个Cookie属于网站下的哪一个具体的资源
- 实际开发中Cookie路径的影响：如果不小心在路径中某个地方多加了一个斜杠，会导致Cookie路径不匹配，该携带的Cookie携带不上来，从而导致Session工作不正常。



## 5、Session的工作机制

- 当服务器端调用了request.getSession()方法
  - 检查当前请求中是否携带了JSESSIONID这个Cookie
    - 有携带：根据这个JSESSIONID在服务器端查找对应的Session对象
      - 能找到：把找到的Session作为getSession()方法的返回值返回
      - 找不到：
        - 创建新的Session对象
        - 用新的JSESSIONID的值创建Cookie
        - 把新的Cookie返回给浏览器
    - 没携带：
      - 创建新的Session对象
      - 用新的JSESSIONID的值创建Cookie
      - 把新的Cookie返回给浏览器

![./images](./images/img036.png)



## 6、Session的时效性

### ①Session对象为什么要有时效限制？

如果没有时间限制，Session对象数量会快速膨胀，随着访问网站的用户越来越多，Session对象只创建不释放，一定会在某个时间耗尽服务器端的资源。



### ②Session时效性机制

这个机制的设计很巧妙，它是一个柔性的机制，既避免Session对象无节制的创建耗尽服务器端内存空间，又保证了用户在持续使用Session时Session对象一直都在，不会打断用户的操作。

- 每一个Session对象从创建出来就开始倒计时
- 在倒计时的过程中，一旦有请求访问了这个Session，倒计时清零重新开始
- 一旦一个Session对象的倒计时结束，那么这个Session对象就会被释放



### ③Session时效性方法

- setMaxInactiveInterval(int interval)设置Session最大的过期时间，interval是一个以秒为单位的过期时间。
- 最大空闲时间默认为1800秒，即半个小时。
- <span style="color:blue;font-weight:bold;">invalidate()</span>立即释放Session对象



[返回上一级](index.html)