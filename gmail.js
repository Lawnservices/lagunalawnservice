document.getElementById("email").addEventListener("input", function () {
    this.value = this.value.replace(/\s/g, "");

    if (!this.value.endsWith("@gmail.com")) {
        this.setCustomValidity("Solo se permiten correos Gmail (@gmail.com)");
    } else {
        this.setCustomValidity("");
    }
});