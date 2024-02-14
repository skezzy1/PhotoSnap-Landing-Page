function openForm() {
  document.getElementById("RequestInviteForm").style.display = "block"; 
  document.body.classList.add("no-scroll"); 
  document.getElementById("overlay").style.display = "block"; 
}

function closeForm() {
  document.getElementById("RequestInviteForm").style.display = "none"; 
  document.body.classList.remove("no-scroll"); 
  document.getElementById("overlay").style.display = "none"; 
}
function openContactForm() {
  document.getElementById("ContactForm").style.display = "block"; // показує форму
  document.body.classList.add("no-scroll"); // додає клас для блокування прокрутки
  document.getElementById("overlayContactForm").style.display = "block"; // показує накладеність
}

function closeContactForm() {
  document.getElementById("ContactForm").style.display = "none"; // ховає форму
  document.body.classList.remove("no-scroll"); // видаляє клас для відключення блокування прокрутки
  document.getElementById("overlayContactForm").style.display = "none"; // ховає накладеність
}

