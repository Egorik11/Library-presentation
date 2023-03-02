function checkInputName() {
  const userName = document.querySelector('#userName');
  const basicAddon1 = document.querySelector('#basic-addon1');
  check(userName, basicAddon1, validationName);
}

function checkInputEmail() {
  const userEmail = document.querySelector('#email');
  const basicAddon2 = document.querySelector('#basic-addon2');
  check(userEmail, basicAddon2, validationEmail);
}

function checkInputPhone() {
  const numberPhone = document.querySelector('#numberPhone');
  const basicAddon3 = document.querySelector('#basic-addon3');
  check(numberPhone, basicAddon3, validationNumberPhone);
}

function check(input, marker, fn) {
  input.addEventListener('keyup', (e) => {
    if (fn(input.value)) {
      marker.classList.add('shadow_green');
      marker.classList.remove('shadow_red');
      input.classList.add('shadow_green');
      input.classList.remove('shadow_red');
    } else {
      input.classList.add('shadow_red');
      marker.classList.add('shadow_red');
    }
  });
}
checkInputName();
checkInputEmail();
checkInputPhone();
