<h1>window 对象</h1>
    
1、navigator 导航器对象

    appCodeName 返回浏览器的代码名
    appName 返回浏览器的名称
    appVersion 返回浏览器平台和版本信息
    cookieEnabled 返回知名浏览器中是否启用cookie的布尔值
    platform 返回运行浏览器的操作系统平台
    userAgent 返回由客户机发送服务器的user-agent头部的值

2、screen 显示器对象

    availHeight 返回显示屏幕的可用高度
    availWidth  返回显示屏幕的可用宽度
    height 返回屏幕的像素高度
    width 返回屏幕的像素宽度
    colorDepth 返回屏幕颜色的位数

3、history 历史对象
    
    back() 返回浏览器上一次浏览的界面
    forward() 返回下一个url
    go() 返回某个指定的页面

4、location 位置对象

    属性
    
    hash 设置或返回从（#）开始的url
    host 当前主机名和url的端口号
    hostname 当前url的主机名
    href 返回完整的URL
    pathname 返回当前url的路径部分
    port 端口号
    protocol URL的协议
    search 返回从？开始的url 

    方法

    assign(URL) 加载新的文档
    reload() 重新加载当前页面
    replace(newURL) 新文档替换旧文档

5、document 文档对象
    
    集合

    anchors[] 锚点对象数组
    images[] 图片对象数组
    links[] 链接对象数组
    forms[] 表单对象数组

    属性

    cookie 当前文档所有cookie
    domain 域名
    referrer 载入当前文档的URL
    title 文档标题
    URL 当前文档的URL

    方法
     
    open() 打开新文档，并擦除旧文档内容
    close() 关闭文档输出流
    write() 文档输入文本
    writeIn() 与write()相同，在<pre>中会追加换行

6、窗口控制

    moveBy 

    语法：moveBy(水平位移量, 垂直位移量)
    功能：按照给定像素参数移动指定窗口

    moveTo

    语法：moveTo(x, y)
    功能：将敞口移动到指定的指定坐标(x, y)处

    resizeBy

    语法：resizeBy(水平, 垂直)
    功能：将当前窗口改变指定的大小(x, y)
          当x、y的值大于0时，扩大
          当x、y的值小于0是，缩小

    resizeTo

    语法：resizeTo(水平宽度, 垂直宽度)
    功能：将当前窗口改变(x, y)大小，x、y分别为宽度和高度

    scrollBy

    语法：scrollBy(水平位移量, 垂直位移量)
    功能：将窗口中的内容按给定的位移量滚动
          参数为正时，正向滚动，否则反向滚动

    scrollTo

    语法：scrollTo(x, y)
    功能：将窗口中的内容滚动到指定位置

7、焦点控制
    
    focus 得到焦点
    blur  移除焦点
     
8、打开关闭窗口
   
    open

    语法：open("URL", "窗口名称", "窗口风格")
    功能：打开一个新的窗口，并在窗口中装载指定URL地址的网页
    窗口风格：height: 窗口高度，不能小于100
              width: 窗口宽度，不能小于100
              left: 窗口左坐标，不能为负值
              top: 窗口上坐标，不能为负值
              location: yes/no   是否显示地址栏
              menubar: yes/no  是否显示菜单栏
              resizable: yes/no  是否可以改变窗口的大小
              scrollbars: yes/no  是否允许出现滚动条
              status: yes/no  是否显示状态栏
              toolbar: yes/no 是否显示工具栏

    close 

    语法：close()
    功能：自动关闭窗口     

9、定时器
   
    setTimeout

    语法：setTimeout(执行代码, 毫秒数)
    功能：当到了指定的毫秒数后，自动执行功能代码

    clearTimeout

    语法：clearTimeout(定时器)
    功能：取消由setTimeout设置的定时器

    setInterval

    语法：setInterval(重复执行的代码, 毫秒数)
    功能：按指定周期重复执行功能代码

    clearInterval

    语法：clearInterval(时间间隔器)
    功能：取消由setInterval()设置的时间间隔器

10、对话框

    alert

    语法：alert("提示字符串") 
    功能：弹出一个将高矿，在警告框内显示提示字符串文本

    confirm

    语法：confirm("提示字符串")
    功能：显示一个确认框，在确认框内显示提示字符串
          当用户点击“确定”时，返回true
          点击“取消”时，返回false

    prompt

    语法：prompt("提示字符串", "缺省文本")
    功能：显示一个输入框，在输入框内显示提示字符串
          在输入文本框显示缺省文本，并等待用户输入
          当用户点击“确定”时，返回用户输入的字符串
          当点击“取消”时，返回Null

11、属性
  
    状态栏

    defaultStatus 改变浏览器状态栏的默认显示
    status 临时改变浏览器状态栏的显示

    窗口位置

        IE

            screenLeft 声明窗口的左上角的X坐标
            screenTop 声明窗口的左上角的Y坐标
            document.documentElement.scrollLeft = document.body.scrollLeft  声明当前文档享有滚动多的像素数
            document.documentElement.scrollTop = document.body.scrollTop  声明当前文档向下滚动多的像素数

        !IE 

            screenX 声明窗口的左上角的X坐标
            screenY 声明窗口的左上角的Y坐标
            pageXOffset 声明当前文档向右滚动过的像素     
            pageYOffset 声明当前文档向下滚动过的像素 

        FF

            innerHeigh  返回窗口的文档显示区的高度
            innerWidth  返回窗口的文档显示去的宽度
            outerHeight  返回窗口的外部高度
            outerWidth  返回窗口的外部宽度

    其他属性

    opener 可以实现同域名下跨窗体之间的通讯
            一个窗体要包含另一个窗体的opener
    closed  当前窗口关闭时返回true
    name  设置或返回窗口的名称
    self  返回当前窗口的引用

                   










      
