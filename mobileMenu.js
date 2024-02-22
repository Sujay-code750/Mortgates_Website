const toggleBtn = document.querySelector(".toggleBtn")
const toggleBtnIcon = document.querySelector(".toggleBtn i")
const MobileDropDownMenu = document.querySelector(".mobileMenu")

toggleBtn.onclick = function(){
    MobileDropDownMenu.classList.toggle('open')
    const isOpen = MobileDropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
