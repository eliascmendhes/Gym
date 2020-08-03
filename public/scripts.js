const currentPage = location.pathname
const menuItem = document.querySelectorAll("header .links a")
for(item of menuItem) {
  if(currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("actives")
  }
}
// console.log(currentPage)