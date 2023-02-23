<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
//change this to your email.
$to = "toha.web.developer@gmail.com";
$from = "Portfolio";
$subject = "Робота(Портфоліо)";

//$name = 'name';
//$social = 'social';
//$socialType = 'socialtype';


$name = $_POST['user_name'];
$social = $_POST['user_email'];
$socialType = $_POST['user_message'];

//begin of HTML message
$message ='
               <html>
                  <head>
                      <title>Welcome</title>
                  </head>
                  <body>
                      <h1>Повідомлення з <a href="http://kuran.ct8.pl/makarchuk/">Портфоліо</a></h1>
                      <table cellspacing="0" cellpadding="10" style="border: 2px dashed silver; width: 40%;">
                          <tr>
                              <th>Ім`я:</th><td>'. $name .'</td>
                          </tr>
                          <tr>
                              <th>Емайл:</th><td>'. $social .'</td>
                          </tr>
                          <tr>
                              <th>Повідомлення:</th><td>'. $socialType .'</td>
                          </tr>
                      </table>
                  </body>
                  </html>';
//end of message
//$headers  = "From: $from\r\n";
$headers = "Content-type: text/html\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "ok";
} else {
    echo "error";
}

echo " Message has been sent....!";
?>
