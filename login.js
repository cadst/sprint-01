const btn = document.querySelector(".password-visibility");
const input = document.querySelector(".password-input");
const icon = btn.querySelector("img");

btn.addEventListener('click', function () {
  if(input.type === 'password'){
    input.type = 'text';
    icon.src = "../image/visibility_on.svg";
  } else {
    input.type = 'password';
    icon.src = "../image/visibility_off.svg";
  }
});