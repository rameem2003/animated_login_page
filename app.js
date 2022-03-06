var pass = document.getElementById("pass");
var tog = document.querySelector(".tog");


tog.addEventListener("click", () => {
    if(pass.type === "password"){
        pass.type = "text";
        tog.classList.replace("fa-eye-slash", "fa-eye");
    }

    else{
        pass.type = "password";
        tog.classList.replace("fa-eye", "fa-eye-slash");
    }
})