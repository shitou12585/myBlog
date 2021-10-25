# 项目对比less和sass

在项目开发中常常会遇到less和sass预编译处理，今天通过对比来区分不同项目时用到不同编译

## 分析
什么是Sass和less?
Sass和Less都属于CSS预处理器，那什么是 CSS 预处理器呢？

  CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行CSS的编码工作。

  转化成通俗易懂的话来说就是“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用”。

## Sass用法

```compare
一、父选择器 &
案例一
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
编译为
a {
  font-weight: bold;
  text-decoration: none; 
  }
a:hover {text-decoration: underline;}
body.firefox a {font-weight: normal;}
案例二
#main {
  color: black;
  &-sidebar { border: 1px solid;}
}
编译为
#main {color: black;}
#main-sidebar {border: 1px solid;}


```