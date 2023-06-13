let gheader = document.querySelector(".gridheader");
let hcenter = document.querySelector(".headercenternav");
let headerrightsearch = document.querySelector(".headerrightsearch");
let sepet = document.querySelector(".sepet");
let sepeticon = document.querySelector("#sellicon");
let searchicon = document.querySelector(".fa-search");
let loginbutton = document.querySelector(".login");
let headerdropnav = document.querySelector(".headerdropnav");
let headerdropnavul = document.querySelector(".headerdropnavul");
let economy = document.querySelector(".economy");
let economy2 = document.querySelector(".economy2");
let economy3 = document.querySelector(".economy3");

let innerh = window.innerHeight;
let innerw = window.innerWidth;
let queryw = 656;

console.log(innerw);

if (innerw < queryw) {
  headerdropnav?.classList.remove("displaynone");
  sepeticon?.classList.add("largersepet");
  searchicon.classList.add("largersearch");
  sepet?.classList.add("displaynone");
  gheader?.classList.add("gridheaderjscolumn");
  hcenter?.classList.add("displaynone");
  headerrightsearch?.classList.add("displaynone");
} else {
  headerdropnav?.classList.add("displaynone");
  sepeticon?.classList.remove("largersepet");
  searchicon.classList.remove("largersearch");
  gheader?.classList.remove("gridheaderjscolumn");
  hcenter?.classList.remove("displaynone");
  sepet?.classList.remove("displaynone");
}

let dropdownfunct = () => {
  if (headerdropnavul?.classList.contains("displaynone")) {
    headerdropnavul.classList.remove("displaynone");
  } else {
    headerdropnavul?.classList.add("displaynone");
  }
};

let searchfunct = () => {
  if (headerrightsearch?.classList.contains("displaynone")) {
    headerrightsearch?.classList.remove("displaynone");
  } else {
    headerrightsearch?.classList.add("displaynone");
  }
};

let dropclick = headerdropnav?.firstElementChild.addEventListener(
  "click",
  dropdownfunct
);
let searchclick = searchicon?.addEventListener("click", searchfunct);

var myHeaders = new Headers();
myHeaders.append("apikey", "gsennHziajg0b5JPLQRv38PmOFcO3um5");
