import hasResolutionChange from "./mediaQuery.js";
import showMenuItems from "./burgerMenu.js";

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

const countChilds = ($element) => {
  return $element.childElementCount;
};
const $companyTitle = document.getElementById("companyTitle");
const $helpTitle = document.getElementById("helpTitle");
const $linksTitle = document.getElementById("linksTitle");
const $productTitle = document.getElementById("productTitle");

const buttons = [
  {
    title: $companyTitle,
    child: $companyBtn,
  },
  {
    title: $helpTitle,
    child: $helpBtn,
  },
  {
    title: $linksTitle,
    child: $linkBtn,
  },
  {
    title: $productTitle,
    child: $productBtn,
  },
];

const $burgerMenu = document.getElementById("burger");
const $headerMenu = document.getElementById("menu");

showMenuItems($burgerMenu, (isPair) => {
  if (isPair) {
    $headerMenu.style.left = "0";
    console.log($headerMenu.style.left);
  } else {
    $headerMenu.style.left = "100%";
  }
});

hasResolutionChange(450, (matches) => {
  for (let i = 0; i < 4; i++) {
    if (matches) {
      const textContent = buttons[i].child.textContent;
      buttons[i].child.remove();
      buttons[i].title.innerHTML = textContent;
    } else {
      buttons[i].title.textContent = "";
      buttons[i].title.appendChild(buttons[i].child);
    }
  }
});
