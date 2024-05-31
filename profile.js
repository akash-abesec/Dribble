const chooseImageButton = document.getElementById('choose-image');
const imageInput = document.getElementById('uploadImage');
const avatarImage = document.getElementById('uploadPreview');
const locationInput = document.getElementById('location-input');
const nextButton = document.getElementById('myButton');
const Return = document.getElementById('return');

chooseImageButton.addEventListener('click', () => {
    imageInput.click();
  });
  
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      avatarImage.src = imageUrl;
      avatarImage.style.display = 'block';
      checkFormCompletion();
    }
  });
  
  locationInput.addEventListener('input', () => {
    checkFormCompletion();
  });
  
  function checkFormCompletion() {
    const hasAvatar = avatarImage.src !== '#';
    const hasLocation = locationInput.value.trim() !== '';
    nextButton.disabled = !(hasAvatar && hasLocation);
    Return.disabled = !(hasAvatar && hasLocation);
  }

document.getElementById("myButton").onclick = function () {
    location.href = "Profession.html";
};