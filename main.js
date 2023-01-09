const openModalBtn = document.getElementById('open-modal-btn')
const modalOverlay = document.getElementById('modal__overlay')
const btnClose = document.getElementById('btn-Close')
const modalElement = document.getElementById('modal')


openModalBtn.addEventListener('click', function () {
 modalOverlay.classList.add('modal__overlay--active')
 modalElement.classList.add('modal--active')
})


btnClose.addEventListener('click', function () {
 // closeModal.classList.remove('') 
 modalOverlay.classList.remove('modal__overlay--active')
 modalElement.classList.remove('modal--active')
})
