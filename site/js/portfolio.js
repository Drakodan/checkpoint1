const changeAvatar = document.querySelector("#avatar");

changeAvatar.addEventListener('click', function () {
    changeAvatar.src = "image/avatar.svg";
});

const changeName = document.querySelector("#name");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log(`Hello, ${firstName.value} ${lastName.value}`);
};