const options = document.querySelectorAll('.option');
const finishButton = document.getElementById('finishButton');
const radioButtons = document.querySelectorAll('input[name="option-radio"]');
const optionDescriptions = document.querySelectorAll('.option-description');

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        options.forEach((opt) => opt.classList.remove('selected'));
        option.classList.add('selected');
        updateAdditionalInfo(option.dataset.option);
        updateRadioButton(index);
        checkFormCompletion();
    });
});

function updateAdditionalInfo(option) {
    switch (option) {
        case 'designer':
            optionDescriptions[0].textContent = "As a designer, Dribbble is the perfect platform to showcase your work and connect with a community of like-minded creatives.";
            break;
        case 'hire':
            optionDescriptions[1].textContent = "Hiring a designer can be a daunting task, but Dribbble makes it easier. ";
            break;
        case 'inspiration':
            optionDescriptions[2].textContent = "Dribbble is a treasure trove of design inspiration. ";
            break;
    }
}

function updateRadioButton(index) {
    radioButtons.forEach((radio, i) => {
        radio.checked = i === index;
    });
}

function checkFormCompletion() {
    const selectedOption = document.querySelector('.option.selected');
    finishButton.disabled = !selectedOption;
}

document.getElementById("finishButton").onclick = function () {
    location.href = "verificationpage.html";
};