const openModalBtn = document.getElementById("open-modal-btn");
const modalOverlay = document.getElementById("modal__overlay");
const btnClose = document.getElementById("btn-Close");
const btnBack = document.getElementById("btn-Back");
const modalElement = document.getElementById("modal");
const circle = document.getElementById("container_btn");
const btnCancel = document.getElementById("btn-cancel");
const btnCreate = document.getElementById("btn-create");
const inputImg = document.getElementById("inputImg");
const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const valueImg = document.getElementById("valuesImg");
const valueTitle = document.getElementById("valuesTitle");
const postsContainerHTML = document.getElementById("posts");

const storagePosts = localStorage.getItem("posts")
const posts = JSON.parse(storagePosts) || [];
const test = localStorage.getItem("posts");
console.log(test);
console.log(typeof test);

let imgCardValue;
let imgValue;
let titleValue;
let descriptionValue;

function closeModal() {
  modalOverlay.classList.remove("modal__overlay--active");
  modalElement.classList.remove("modal--active");
  circle.classList.remove("container-btn--active");
  document.body.style.overflow = "initial";
}

function openModal() {
  modalOverlay.classList.add("modal__overlay--active");
  modalElement.classList.add("modal--active");
  circle.classList.add("container-btn--active");
  document.body.style.overflow = "hidden";
}

openModalBtn.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

btnBack.addEventListener("click", closeModal);

btnCancel.addEventListener("click", closeModal);

btnCreate.addEventListener("click", function () {
  if (
    [imgValue, descriptionValue, titleValue].filter((item) => item).length !== 3
  ) {
    alert("Por favor completa el form");
    return;
  }

  posts.push({
    img: imgValue,
    title: titleValue,
    description: descriptionValue,
    id: new Date().valueOf(),
  });
  renderPosts();
  closeModal();
  localStorage.setItem("posts", JSON.stringify(posts));
});

function renderPosts() {
  if (posts.length === 0) {
    const emptyHTLM = `<div class="posts__no-cards"><div class="posts__no-cards__card"></div><h2>No post</h2><div>You no have a post, please create the first:)</div><button id="createPost" class="btn btn--secondary">Create a post +</button></div>`;
    postsContainerHTML.innerHTML = emptyHTLM;
    const createPost = document.getElementById("createPost");
    createPost.addEventListener("click", openModal);
    return;
  }
  postsContainerHTML.classList.add("posts");

  const postsHTML = posts
    .map(
      (post) => `<div class="card">
      <button class="card__close modal__close"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg></button>
      <img src="${post.img}"/>
      <div class="card__info">
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      </div>
    </div>`
    )
    .reverse()
    .join(" ");
  postsContainerHTML.innerHTML = postsHTML;
}

inputImg.addEventListener("input", updateValueOfImage);
inputTitle.addEventListener("input", updateValueOfTitle);
inputDescription.addEventListener("input", updateValueOfDescription);

function updateValueOfImage(e) {
  imgValue = e.target.value;
}

function updateValueOfTitle(e) {
  titleValue = e.target.value;
}

function updateValueOfDescription(e) {
  descriptionValue = e.target.value;
}

//cards section

inputImg.addEventListener("input", (e) => {
  imgCardValue = e.target.value;
});

btnCreate.addEventListener;

renderPosts();
