<?php
if (isset($_POST['enviar'])) {
  if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['msg']) && !empty($_POST['email'])) {
    $name = $_POST['name'];
    $asunto = $_POST['asunto'];
    $msg = $_POST['msg'];
    $email = $_POST['email'];
    $header = "From: miguellaguna888@gmail.com" . "\r\n";
    $header = "Reply-To:miguellaguna51@gmail.com" . "\r\n";
    $header = "X-Mailer:PHP/" . phpversion();
    $email = @mail($email, $asunto, $msg, $header);
    if ($mail) {
      echo "<h2>!Mail enviado!</h2>";
    }
  }
}
