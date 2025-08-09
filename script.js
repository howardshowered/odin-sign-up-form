const createAccountBUtton = document.querySelector(".btn-create");

function pwIsValid() {
    let pw = document.querySelector("#password");
    let confirmPw = document.querySelector("#confirm-password");
    if (pw.value !== confirmPw.value)
        alert("pw's do not match!");
}

createAccountBUtton.onclick = pwIsValid;