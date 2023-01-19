const modalOverlay = document.getElementById("modal__overlay");
const modalElement = document.getElementById("modal");
const circle = document.getElementById("container_btn");
const postsContainerHTML = document.getElementById("posts");
const storagePosts = localStorage.getItem("posts")
export const posts = JSON.parse(storagePosts) || [];

export function closeModal() {
  modalOverlay.classList.remove("modal__overlay--active");
  modalElement.classList.remove("modal--active");
  circle.classList.remove("container-btn--active");
  document.body.style.overflow = "initial";
}

export function openModal() {
  modalOverlay.classList.add("modal__overlay--active");
  modalElement.classList.add("modal--active");
  circle.classList.add("container-btn--active");
  document.body.style.overflow = "hidden";
}

export function renderPosts() {
  if (posts.length === 0) {
    const emptyHTLM = `<div class="posts__no-cards">
    <div class="posts__no-cards__card"></div>
    <h2>No post</h2>
    <div>You no have a post, please create the first:)</div>
    <button id="createPost" class="btn btn--secondary">Create a post +</button></div>`;
    postsContainerHTML.innerHTML = emptyHTLM;
    const createPost = document.getElementById("createPost");
    createPost.addEventListener("click", openModal);
    return;
  }
  postsContainerHTML.classList.add("posts");

  const postsHTML = posts
    .map(
      (post) => `
      <div class="card">
        <button class="card__close modal__close" id="deletePostBtn" data-id="${post.id}" data-johan="${post.description}">
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </button>
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
  
  const deletePostsBtn = document.querySelectorAll("#deletePostBtn");
  deletePostsBtn.forEach((item) => {
    item.addEventListener("click", function (event) {
      const id = item.dataset.id;
      deletePost(id);
      renderPosts();
      localStorage.setItem("posts", JSON.stringify(posts));
      if (posts.length === 0) {
        postsContainerHTML.classList.remove("posts");
      }
      
    });
  });
}

export function createPost(post) {
  posts.push(post)
}

export function deletePost(id) {
  const index = posts.map(item => item.id).indexOf(id)
  posts.splice(index, 1)
}
