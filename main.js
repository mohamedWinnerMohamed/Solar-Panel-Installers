const sideList = document.querySelector(".sideList");
const list = document.querySelector('.list')

sideList.addEventListener('click', (e) => {
  e.preventDefault()
    list.classList.toggle('show')
})
