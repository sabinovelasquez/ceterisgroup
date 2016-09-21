<?php
$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$to= 'sabinovelasquez@gmail.com';
$subject= 'Formulario Ceteris';
$body= $data->body. "\r\n";
$body.= 'Teléfono: '.$data->phone. "\r\n";
$body.= 'Email: '.$data->email. "\r\n";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: Ceteris Group <info@ceterisgroup.cl>" . "\r\n" .
"Reply-To: info@ceterisgroup.cl" . "\r\n" .
"X-Mailer: PHP/" . phpversion();
$headers .= "X-Priority: High\r\n";

if(mail($to, $subject, $body, $headers)) {
  echo('sent');
}else {
  echo('failed');
}
?>