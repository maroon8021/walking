---
path: "/article/todolist3"
date: "2020-05-10"
title: "todolist3"
imagePath: "/article-images/todolist3.png"
demo: "https://todolist3.mitsuna.dev/"
---

## todolist3

![MainView](/article-images/todolist3.png)

### 概要

個人的な todo 管理アプリです。  
「Remainig Tasks」のエリアは永続的に保存され、  
「TimeList」の内容は日付が変わるとまたまっさらになります。(削除されるわけではありません。日毎に内容を別管理しています)

一日の時間経過がわかるように、過ぎた時間は灰色で表示するようにしています。

### 構成

![Architecture](/article-images/todolist3-architecture.png) <br><br>
フルサーバーレスに挑戦しました。

○ フロントエンドとバックエンドを切り離せたのはよかったと思います。  
○ バックエンド側を serverless framework を使い、ローカルでの開発が容易になり、typescript と jest を組み合わせることで、テスタブルで実装しやすい構成になりました。

<a href="https://todolist3.mitsuna.dev/" target="_blanck">Go to Demo Page</a>  
ID: demo  
PW: Demo123@ <br><br>
[frontend code](https://github.com/maroon8021/todolist3)  
[backend code](https://github.com/maroon8021/todolist-serverside)
