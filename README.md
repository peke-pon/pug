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
  - var title= "colordrops";
  - var description= "dscription";
  - var keywords= "keyword";

append style
  link(rel="stylesheet" href="css/style.css")

block content
  include modules/_tool
  .navWrapper
    nav
      img(src="images/logo.svg" alt="logo" id="size")
  .wrapper
    .container
      - for (var i = 1; i <= 30; i++)
        - i < 10 ? i = "0" + i : i ;
          include modules/_card

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

###
