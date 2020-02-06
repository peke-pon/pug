# pug

### _layout.pug

```pug
doctype html
html(lang="ja")
  head
    block meta
    title #{title}
    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    meta(name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1")
    meta(name="description" content=description)
    meta(name="keywords" content=keywords)
    link(rel="shortcut icon" content="/favicon.ico")
    link(rel="apple-touch-icon" href="/apple-touch-icon.png")
    block style
      link(href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700&display=swap" rel="stylesheet")
      link(href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet")
      link(href="https://fonts.googleapis.com/css?family=Numans&display=swap" rel="stylesheet")
  body#top
    block content
    block footer
    block script
```

共通になるヘッド要素をテンプレート化。

各ページでタイトル、キーワード、ディスクリプションを記述できるように変数にしました。<br>
変数は`block meta`で継承先で読み込ませるようにしています。

### index.pug

```pug
extends modules/_layout

block meta
  - var title= "title";
  - var description= "dscription";
  - var keywords= "keyword";

append style
  link(rel="stylesheet" href="css/style.css")

block content
  .tool
    ul
      li
        img(src="images/drop.svg" alt="twitter" width="32")
      li
        img(src="images/code.svg" alt="code" width="32")
      li
        img(src="images/image.svg" alt="image" width="32")
      li
        img(src="images/share.svg" alt="share" width="32")
      li#toTop
        img(src="images/up.svg" alt="up" width="32")
        br
        span.subTop Top
  .navWrapper
    nav
      img(src="images/logo.svg" alt="logo" id="size")
  .wrapper
    .container
      - for (var i = 1; i <= 30; i++)
        - i < 10 ? i = "0" + i : i ;
        .box
          .color
            span.hex
          .text
            .cap Color #{i}
            .color-footer
              .fav: img(src="images/fav.svg" alt="favorite")
              .set: img(src="images/set.svg" alt="setting")

block footer
  include modules/_footer

block script
  script(src="scripts/index.js")
```

ページごとに柔軟性をもたせれるようにある程度ブロックに分けています。
scriptやcssはページごとに読み込ませる事ができるように。
footerはインクルードして別ファイルにしています。

### modules/_footer.pug

```pug
footer
  .footer-inner
    img(src="images/footer-logo.png" alt="logo" width="144")
    .sns
      a(href="https://twitter.com/" target="_blank")
        img(src="images/twitter.png" alt="twitter" width="32")
      a(href="https://github.com/peke-pon/Cider" target="_blank")
        img(src="images/github.svg" alt="github" width="32")
    p Produced by Cider.2020
.line
  .left
  .right
```

だいぶコードがスッキリしました。
ただ、ちょっとした変更でもコンパイルが必要なので、更新が頻繁にあるようなサイトは
htmlの方が管理しやすいかもしれません。

### html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>colordrops</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Numans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
</head>
<body id="top">
  <div class="tool" id="sp-tool">
    <ul>
      <li><img src="img/drop.svg" alt="twitter" width="32"></li>
      <li><img src="img/code.svg" alt="code" width="32"></li>
      <li><img src="img/image.svg" alt="image" width="32"></li>
      <li><img src="img/share.svg" alt="share" width="32"></li>
      <li id="toTop"><img src="img/up.svg" alt="up" width="32"><br>
        <span class="subTop">TOP</span></li>
    </ul>
  </div>
  <div class="navWrapper">
    <nav>
      <img src="img/logo.svg" alt="logo" id="size">
    </nav>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="box">
        <div class="color"><span class="hex"></span></div>
        <div class="text">
          <div class="cap">Color 01</div>
          <div class="color-footer">
            <div class="fav"><img src="img/fav.svg" alt=""></div>
            <div class="set"><img src="img/set.svg" alt=""></div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="color"><span class="hex"></span></div>
        <div class="text">
          <div class="cap">Color 02</div>
          <div class="color-footer">
            <div class="fav"><img src="img/fav.svg" alt=""></div>
            <div class="set"><img src="img/set.svg" alt=""></div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="color"><span class="hex"></span></div>
        <div class="text">
          <div class="cap">Color 03</div>
          <div class="color-footer">
            <div class="fav"><img src="img/fav.svg" alt=""></div>
            <div class="set"><img src="img/set.svg" alt=""></div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="color"><span class="hex"></span></div>
        <div class="text">
          <div class="cap">Color 04</div>
          <div class="color-footer">
            <div class="fav"><img src="img/fav.svg" alt=""></div>
            <div class="set"><img src="img/set.svg" alt=""></div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="color"><span class="hex"></span></div>
        <div class="text">
          <div class="cap">Color 05</div>
          <div class="color-footer">
            <div class="fav"><img src="img/fav.svg" alt=""></div>
            <div class="set"><img src="img/set.svg" alt=""></div>
          </div>
        </div>
      </div>
      
      (中略)
      
  </div>
  <footer>
    <div class="footer-inner">
      <img src="img/footer-logo.png" alt="" width="144">
      <div class="sns">
        <a href="https://twitter.com/WEB02490413" target="_blank">
          <img src="img/twitter.png" alt="twitter" width="32"></a>
        <a href="https://github.com/peke-pon/Cider" target="_blank">
          <img src="img/github.svg" alt="github" width="32">
        </a>
      </div>
      <p>Produced by Cider.2019</p>
    </div>
  </footer>
  <div class="line">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <script src="index.js"></script>
</body>
</html>
```
