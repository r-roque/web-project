const nav = document.getElementById('menu')
const menuItems = [...nav.children[0].children]
let activeItem = document.querySelector('.active')
activeItem.scrollIntoView({ behavior: "smooth", inline: "center" })

menuItems.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
        activeItem.classList.remove('active')
        activeItem = item.children[0]
        item.children[0].classList.add('active')
        item.scrollIntoView({ behavior: "smooth", inline: "center" })
    })
})
