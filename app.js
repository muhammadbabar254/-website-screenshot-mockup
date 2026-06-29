const imageInput = document.getElementById("imageInput");
const browser = document.getElementById("browser");
const generateBtn = document.getElementById("generateBtn");

const outputImg = document.getElementById("outputImg");
const placeholder = document.getElementById("placeholder");
const frame = document.getElementById("frame");

generateBtn.addEventListener("click", () => {

    const file = imageInput.files[0];

    if (!file) {
        alert("Please upload a screenshot first!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        outputImg.src = e.target.result;
        outputImg.style.display = "block";
        placeholder.style.display = "none";
    };

    reader.readAsDataURL(file);

    // Browser style change (optional UI touch)
    switch(browser.value){

        case "chrome":
            frame.style.borderTop = "4px solid #e5e7eb";
            break;

        case "firefox":
            frame.style.borderTop = "4px solid #ffb86b";
            break;

        case "edge":
            frame.style.borderTop = "4px solid #60a5fa";
            break;

        case "safari":
            frame.style.borderTop = "4px solid #a5b4fc";
            break;

    }

});