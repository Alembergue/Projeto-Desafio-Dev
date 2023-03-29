// Codigo de validação de e-mail (funcional)

let email = document.getElementById('email');
let form = document.querySelector('form');
//let textForm = document.getElementById('textForm');
let textEmail = document.getElementById("textEmail");

email.addEventListener("keyup", () => {
    if (validarEmail(email.value) !== true) {
        textEmail.textContent = "Formato do e-mail deve ser Ex: name@abc.com";
    } else {
      textEmail.textContent = "";
    }
  });

  function validarEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  } 











