# 常用CSS玩法

## 常用关于CSS的小技巧
在通常开发中常常会用到一些css常用用法，但是用到时却经常出现卡壳状态，一下子想不到该怎么处理样式，所以记录下常用css的一些玩法。例如：超出隐藏，自动换行，
input聚焦，纯css画三角形等等

## 案例
```bar
一、设置input聚焦时的样式 
input:focus { background-color: red; }

二、取消input的边框
border: none; outline: none;

三、文字超出隐藏并显示省略号 单行（一定要有宽度）
width:200rpx; 
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis; // 多行 
word-break: break-all; 
display: -webkit-box; 
-webkit-line-clamp: 2; 
-webkit-box-orient: 
vertical; overflow: hidden;

四、控制div内的元素自动换行
word-wrap: break-word; 
word-break：break-all;

五、纯css画三角形
width: 0; 
height: 0; 
border-width: 20px; 
border-style: solid; 
border-color: transparent transparent red transparent;

六、 绝对定位元素居中
width: 200px; 
height: 200px; 
position: absolute; 
left: 50%; 
top: 50%; 
transform: translate(-50%,-50%); 
background-color: green;

七、表格边框合并
table,tr,td{border: 1px solid #333;}
table{ border-collapse: collapse; }

八、element-ui 中 table表格控件表头和内容列对不齐的问题解决(在App.vue中加入如下代码)
/deep/ .el-table th.gutter{ 
    /* 
    * 解决element-ui 表格篡位的问题 👇 
    */ 
    display: table-cell!important; 
}

九、处理字数过多时
{{toggleNoticeTitle(item.title)}}
// 放在method方法属性上
toggleNoticeTitle (name) { 
  if (name.length > 40) { return name.substring(0, 40) + '...'; } 
    else { return name; } 
  }
```