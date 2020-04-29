import hasResolutionChange from "./mediaQuery.js";

const $companyBtn = document.getElementById("companyBtn");
const $productBtn = document.getElementById("productBtn");
const $helpBtn = document.getElementById("helpBtn");
const $linkBtn = document.getElementById("linkBtn");

const hasActiveClass = ($element) => {
  const classRegEx = /(.*\s)btn-active/;
  return $element.match(classRegEx);
};

$companyBtn.addEventListener("click", () => {
  const elem = document.getElementById("company");
  if (hasActiveClass(elem.className)) {
    elem.classList.remove("btn-active");
    console.log(elem.classList);
  } else {
    elem.classList.add("btn-active");
    console.log(elem.classList);
  }
});
$productBtn.addEventListener("click", () => {
  const elem = document.getElementById("product");
  if (hasActiveClass(elem.className)) {
    elem.classList.remove("btn-active");
    console.log(elem.classList);
  } else {
    elem.classList.add("btn-active");
    console.log(elem.classList);
  }
});
$helpBtn.addEventListener("click", () => {
  const elem = document.getElementById("help");
  if (hasActiveClass(elem.className)) {
    elem.classList.remove("btn-active");
    console.log(elem.classList);
  } else {
    elem.classList.add("btn-active");
    console.log(elem.classList);
  }
});
$linkBtn.addEventListener("click", () => {
  const elem = document.getElementById("links");
  if (hasActiveClass(elem.className)) {
    elem.classList.remove("btn-active");
    console.log(elem.classList);
  } else {
    elem.classList.add("btn-active");
    console.log(elem.classList);
  }
});

