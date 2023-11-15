<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "miguellaguna51@gmail.com";
    $subject = "Nuevo mensaje de contacto desde el formulario";
    $body = "Nombre: $name\nCorreo Electrónico: $email\nMensaje:\n$message";

    $headers = "From: $email";

    // Enviar el correo utilizando la función mail() de PHP
    mail($to, $subject, $body, $headers);

    // Puedes redirigir al usuario a una página de "Gracias" aquí
    header("Location: gracias.html");
    exit();
}
?>
