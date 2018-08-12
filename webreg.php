<?php
$lastname = 'test';


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://mainserver.accredcenter.ru/api/app/formdata/import/13",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "[{\"lastname\": \"$lastname\", \"firstname\": \"Maxim\", \"company\": \"A5000\", \"position\": \"Engineer\", \"email\":\"krivohizhin@a5000.ru\", \"age\":\"51-100\"}]", //массив с данными
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    "Postman-Token: a7701c08-9cc5-4861-82b1-48eb22883085",
    "X-API-Key: 997d223bc24b9afd1ccec8fd7dd66e200da4b2eccecabd14e039f4d79e00c61139daa6e7864e0c87aa3813180d6e86c3"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>