function show() {
    var inputPass = document.getElementById("senha");
    showPass = document.getElementById("vision");
    showPass.classList.toggle("yellow");

    if (inputPass.type === "password") {
        inputPass.setAttribute("type", "text");
    } else {
        inputPass.setAttribute("type", "password");
    }
}
