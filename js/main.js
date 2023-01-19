import {
  closeModal,
  openModal,
  renderPosts,
  posts,
  createPost,
  deletePost,
} from "./utils.js";

const openModalBtn = document.getElementById("open-modal-btn");
const btnClose = document.getElementById("btn-Close");
const btnBack = document.getElementById("btn-Back");
const btnCancel = document.getElementById("btn-cancel");
const btnCreate = document.getElementById("btn-create");
const inputImg = document.getElementById("inputImg");
const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");

openModalBtn.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

btnBack.addEventListener("click", closeModal);

btnCancel.addEventListener("click", closeModal);

btnCreate.addEventListener("click", function () {
  const imgValue = inputImg.value;
  const descriptionValue = inputDescription.value;
  const titleValue = inputTitle.value;
  if (
    [imgValue, descriptionValue, titleValue].filter((item) => item).length !== 3
  ) {
    alert("Por favor completa el form");
    return;
  }

  const post = {
    img: imgValue,
    title: titleValue,
    description: descriptionValue,
    id: new Date().valueOf(),
  };

  createPost(post, posts);
  renderPosts();
  closeModal();
  localStorage.setItem("posts", JSON.stringify(posts));
});

renderPosts();

  
