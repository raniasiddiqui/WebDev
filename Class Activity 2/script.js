ctButton = document.getElementById("changeText");
title = document.getElementById("title");
toggleButton = document.getElementById("toggleBox");
box = document.getElementById("box");
form = document.getElementById("userForm");
input = document.getElementById("username");
submitbutton = document.getElementById("submitButton");

ctButton.addEventListener("click", function () {
  title.innerText = "You changed the title!";
});

toggleButton.addEventListener("click", function () {
    box.classList.toggle("hidden");
    if (box.classList.contains("hidden")) {
        toggleButton.innerText = "Show Box";
    } else {
        toggleButton.innerText = "Hide Box";
    }
});
//   box.classList.toggle("hidden");
// ;


box.addEventListener("click", function () {
  box.style.backgroundColor = "yellow";
});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = input.value.trim();
    if (username === "") {
        alert("Please enter your name.");
    } else {
        message.innerText = `Hello, ${username}!`;
        input.value = "";
    }
});

modifyButton = document.getElementById("highlightItems");
itemList = document.querySelectorAll("#itemList li");

modifyButton.addEventListener("click", function () {
    itemList.forEach((item, index) => {
        if ((index + 1) % 2 === 0) {
            item.style.fontWeight = "bold";
            item.style.fontStyle = "italic";
        }
    });
});