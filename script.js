const profile = document.getElementById("profile");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("btn");


profile.addEventListener("mouseover", ()=>{
    modal.style.display = "flex"
})

closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none"
})



  const form = document.querySelector('.signup-form');
  const contactModal = document.getElementById('contactModal');
  const confirmation = document.getElementById('confirmationMessage');
  const thankYou = document.getElementById('thankYouMessage');
  const yesBtn = document.getElementById('confirmYes');
  const noBtn = document.getElementById('confirmNo');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    contactModal.style.display = 'block';
    confirmation.style.display = 'block';
    thankYou.style.display = 'none';
  });

  yesBtn.addEventListener('click', function () {
    confirmation.style.display = 'none';
    thankYou.style.display = 'block';

    // You can also programmatically submit the form or send the data here
    setTimeout(() => {
      contactModal.style.display = 'none';
      form.reset(); // Optional: reset form fields
    }, 2000);
  });

  noBtn.addEventListener('click', function () {
    contactModal.style.display = 'none';
  });
