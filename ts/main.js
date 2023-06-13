var gheader = document.querySelector(".gridheader");
var hcenter = document.querySelector(".headercenternav");
var headerrightsearch = document.querySelector(".headerrightsearch");
var sepet = document.querySelector(".sepet");
var sepeticon = document.querySelector("#sellicon");
var searchicon = document.querySelector(".fa-search");
var loginbutton = document.querySelector(".login");
var headerdropnav = document.querySelector(".headerdropnav");
var headerdropnavul = document.querySelector(".headerdropnavul");
var economy = document.querySelector(".economy");
var economy2 = document.querySelector(".economy2");
var economy3 = document.querySelector(".economy3");
var innerh = window.innerHeight;
var innerw = window.innerWidth;
var queryw = 656;
console.log(innerw);
if (innerw < queryw) {
  headerdropnav === null || headerdropnav === void 0
    ? void 0
    : headerdropnav.classList.remove("displaynone");
  sepeticon === null || sepeticon === void 0
    ? void 0
    : sepeticon.classList.add("largersepet");
  searchicon.classList.add("largersearch");
  sepet === null || sepet === void 0
    ? void 0
    : sepet.classList.add("displaynone");
  gheader === null || gheader === void 0
    ? void 0
    : gheader.classList.add("gridheaderjscolumn");
  hcenter === null || hcenter === void 0
    ? void 0
    : hcenter.classList.add("displaynone");
  headerrightsearch === null || headerrightsearch === void 0
    ? void 0
    : headerrightsearch.classList.add("displaynone");
} else {
  headerdropnav === null || headerdropnav === void 0
    ? void 0
    : headerdropnav.classList.add("displaynone");
  sepeticon === null || sepeticon === void 0
    ? void 0
    : sepeticon.classList.remove("largersepet");
  searchicon.classList.remove("largersearch");
  gheader === null || gheader === void 0
    ? void 0
    : gheader.classList.remove("gridheaderjscolumn");
  hcenter === null || hcenter === void 0
    ? void 0
    : hcenter.classList.remove("displaynone");
  sepet === null || sepet === void 0
    ? void 0
    : sepet.classList.remove("displaynone");
}
var dropdownfunct = function () {
  if (
    headerdropnavul === null || headerdropnavul === void 0
      ? void 0
      : headerdropnavul.classList.contains("displaynone")
  ) {
    headerdropnavul.classList.remove("displaynone");
  } else {
    headerdropnavul === null || headerdropnavul === void 0
      ? void 0
      : headerdropnavul.classList.add("displaynone");
  }
};
var searchfunct = function () {
  if (
    headerrightsearch === null || headerrightsearch === void 0
      ? void 0
      : headerrightsearch.classList.contains("displaynone")
  ) {
    headerrightsearch === null || headerrightsearch === void 0
      ? void 0
      : headerrightsearch.classList.remove("displaynone");
  } else {
    headerrightsearch === null || headerrightsearch === void 0
      ? void 0
      : headerrightsearch.classList.add("displaynone");
  }
};
var dropclick =
  headerdropnav === null || headerdropnav === void 0
    ? void 0
    : headerdropnav.firstElementChild.addEventListener("click", dropdownfunct);
var searchclick =
  searchicon === null || searchicon === void 0
    ? void 0
    : searchicon.addEventListener("click", searchfunct);
var myHeaders = new Headers();
myHeaders.append("apikey", "gsennHziajg0b5JPLQRv38PmOFcO3um5");
