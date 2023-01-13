const openModalBtn = document.getElementById('open-modal-btn')
const modalOverlay = document.getElementById('modal__overlay')
const btnClose = document.getElementById('btn-Close')
const btnBack = document.getElementById('btn-Back')
const modalElement = document.getElementById('modal')
const circle = document.getElementById('container_btn')
const btnCancel = document.getElementById('btn-cancel')
const btnCreate = document.getElementById('btn-create')
const inputImg = document.getElementById('inputImg')
const inputTitle = document.getElementById('inputTitle')
const inputDescription = document.getElementById('inputDescription')
const valueImg = document.getElementById('valuesImg')
const valueTitle = document.getElementById('valuesTitle')
const valueDescription = document.getElementById('valuesDescription')

const posts = []


let imgValue
let titleValue
let descriptionValue

openModalBtn.addEventListener('click', function () {
 modalOverlay.classList.add('modal__overlay--active')
 modalElement.classList.add('modal--active')
 circle.classList.add('container-btn--active')
})


btnClose.addEventListener('click', function () {
 modalOverlay.classList.remove('modal__overlay--active')
 modalElement.classList.remove('modal--active')
 circle.classList.remove('container-btn--active')
}) 

btnBack.addEventListener('click', function () {
 modalOverlay.classList.remove('modal__overlay--active')
 modalElement.classList.remove('modal--active')
 circle.classList.remove('container-btn--active')
}) 


 btnCancel.addEventListener('click', function () {
 modalOverlay.classList.remove('modal__overlay--active')
 modalElement.classList.remove('modal--active')
 circle.classList.remove('container-btn--active')
 })

 btnCreate.addEventListener('click', function () {
  posts.push({img: imgValue, title: titleValue, description: descriptionValue})
  console.log(posts, 'en wasap')
 })

 inputImg.addEventListener('input', updateValueOfImage )
 inputTitle.addEventListener('input', updateValueOfTitle)
 inputDescription.addEventListener('input', updateValueOfDescription) 

 function updateValueOfImage(e) {
   imgValue = e.target.value
 }
 
 function updateValueOfTitle(e) {
   titleValue = e.target.value
 }

 function updateValueOfDescription(e) {
   descriptionValue = e.target.value
 }

 console.log(posts)