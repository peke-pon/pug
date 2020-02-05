"use strict";
let colors = document.getElementsByClassName("color"),
  disp = document.getElementsByClassName("hex");
for (let e = 0; e < colors.length; e++) {
  let o = rgbToHex(
    window
      .getComputedStyle(colors[e], null)
      .getPropertyValue("background-color")
  );
  console.log(o), (disp[e].innerHTML = o);
}
function rgbToHex(e) {
  var o = "#",
    t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (t) {
    var l = [
      parseInt(t[1]).toString(16),
      parseInt(t[2]).toString(16),
      parseInt(t[3]).toString(16)
    ];
    for (let e = 0; e < l.length; ++e)
      1 == l[e].length && (l[e] = "0" + l[e]), (o += l[e]);
    return o;
  }
}
let box = document.getElementsByClassName("box"),
  hex = document.getElementsByClassName("hex"),
  color = document.getElementsByClassName("color"),
  cap = document.getElementsByClassName("cap");
for (let e = 0; e < box.length; e++)
  box[e].addEventListener("mouseover", function() {
    hex[e].classList.add("hexhov"),
      color[e].classList.add("colorhov"),
      cap[e].classList.add("caphov");
  }),
    box[e].addEventListener("mouseleave", function() {
      hex[e].classList.remove("hexhov"),
        color[e].classList.remove("colorhov"),
        cap[e].classList.remove("caphov");
    });
let nav = document.getElementById("sp-tool");
const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  ),
  pageBottom = scrollHeight - window.innerHeight;
window.addEventListener("scroll", () => {
  let e = window.pageYOffset;
  e > 100 && e < pageBottom - 300
    ? nav.classList.add("active")
    : nav.classList.remove("active");
});
let toTop = document.getElementById("toTop");
console.log(toTop),
  toTop.addEventListener(
    "click",
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    !1
  );
