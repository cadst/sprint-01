const btn = document.querySelector(".password-visibility");
const input = document.querySelector(".password-input");
const icon = btn.querySelector("img");

const checkBtn = document.querySelector(".password-check-visibility");
const checkInput = document.querySelector(".password-check-input");
const checkIcon = checkBtn.querySelector("img");

function visibilityHandler (input, icon) {
  if(input.type === 'password'){
    input.type = 'text';
    icon.src = "../image/visibility_on.svg";
  } else {
    input.type = 'password';
    icon.src = "../image/visibility_off.svg";
  }
}

btn.addEventListener('click', () => visibilityHandler(input, icon));
checkBtn.addEventListener('click', () => visibilityHandler(checkInput, checkIcon))

/*
  btn.addEventListener('click', visibility_handler(input, icon));
  클릭 전에 함수가 실행되고 이벤트 핸들러에는 undefined가 들어간다 !
*/