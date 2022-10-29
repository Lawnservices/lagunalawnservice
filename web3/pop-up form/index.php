 <!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
  <title>Document</title>
</head>
<body>
  <form  method="$_POST" action="correo.php">
<input type="text" placeholder="name"  name="name" id="">
<input type="text" placeholder="email" name="email" id="">
<input type="text" placeholder="asunto" name="asunto" id="">
<textarea name="msg" placeholder="mensaje" id="" cols="30" rows="10"></textarea>
<input type="submit" name="enviar">

  </form>
<?php
include("correo.php");

?>

</body>
</html> 