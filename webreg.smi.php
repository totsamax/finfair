<?php


function WriteToFile ($content) {
  $filename = __DIR__.'/guest-registry/finfair2018.guest-registry.smi';
  $content = date('Y-m-d H:i:s')." ".$content."\n";
  // Вначале давайте убедимся, что файл существует и доступен для записи.
  if (is_writable($filename)) {

      if (!$handle = fopen($filename, 'a')) {
           return "Warning: couldn't open/write to file; ";
      }

      if (fwrite($handle, $content) === FALSE) {
          return "Warning: couldn't write to file; ";
      }

      fclose($handle);
      return true;

  } else {
      return "Warning: file not editable; ";
  }
}

function SendDataToAccredcenter ($CURLOPT_POSTFIELDS){

  if (empty($CURLOPT_POSTFIELDS)) return "Error: nothing to send; ";

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://mainserver.accredcenter.ru/api/app/formdata/import/52",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS => $CURLOPT_POSTFIELDS, //массив с данными
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
    return "Error: cUrl error - " . $err;
  } else {
    return $response;
  }
}




// check if POST data is here
if (!isset($_POST) || empty($_POST)) {
  echo "Error: no input data";
  return;
}


// getting data from POST request
$CURLOPT_POSTFIELDS = file_get_contents('php://input');
$ArrFields = json_decode($CURLOPT_POSTFIELDS);

// check if phone number is here
if (!isset($ArrFields->{"tel"}) || empty($ArrFields->{"tel"})) {
  echo "Error: no phone number";
  return;
}

// formating phone number
$phoneNum = preg_replace("/[^,.0-9]/", '', $ArrFields->{"tel"});


// backuping data on site just in case
$resWriteToFile = WriteToFile ($CURLOPT_POSTFIELDS);
if ($resWriteToFile!==true) echo $resWriteToFile;

// sending data to ext service
//echo $CURLOPT_POSTFIELDS;
$resSendDataToAccredcenter =  SendDataToAccredcenter ($CURLOPT_POSTFIELDS);
echo $resSendDataToAccredcenter;


?>
