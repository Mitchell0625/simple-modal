const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
