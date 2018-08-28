<?php

function GetCodeFromPhone ($phoneNum){
  $solt = "bsiu@we4i3b2";
  $foo = substr(preg_replace("/[^,.0-9]/", '', md5($phoneNum.$solt)),0,4);
  return $foo;
}

function SendSms_iqsms ($phone, $code, $host = "gate.iqsms.ru", $port = 80, $login = "z1452551359451", $password = "958089", $sender = false, $wapurl = false )
{
  $text = "Code: ".$code;
	$fp = fsockopen($host, $port, $errno, $errstr);
	if (!$fp) {
		return "errno: $errno \nerrstr: $errstr\n";
	}
	fwrite($fp, "GET /send/" .
		"?phone=" . rawurlencode($phone) .
		"&text=" . rawurlencode($text) .
		($sender ? "&sender=" . rawurlencode($sender) : "") .
		($wapurl ? "&wapurl=" . rawurlencode($wapurl) : "") .
		" HTTP/1.0\n");
	fwrite($fp, "Host: " . $host . "\r\n");
	if ($login != "") {
		fwrite($fp, "Authorization: Basic " .
			base64_encode($login. ":" . $password) . "\n");
	}
	fwrite($fp, "\n");
	$response = "";
	while(!feof($fp)) {
		$response .= fread($fp, 1);
	}
	fclose($fp);
	list($other, $responseBody) = explode("\r\n\r\n", $response, 2);
	return $responseBody;
}

function WriteToFile ($content) {
  $filename = __DIR__.'/guest-registry/finfair2018.guest-registry';
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
    CURLOPT_URL => "https://mainserver.accredcenter.ru/api/app/formdata/import/17",
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


if (!isset($ArrFields->{"code"})){
  // sending code via sms
  // if ( SendSms( $phoneNum, GetCodeFromPhone($phoneNum))) {
  if ($resSendSms_iqsms = SendSms_iqsms( $phoneNum, GetCodeFromPhone($phoneNum))) {
    echo "Sent code to ".$phoneNum." [".$resSendSms_iqsms."]";//." [".GetCodeFromPhone($phoneNum)."]";
  } else {
    echo "Error: failed to sent code to ".$phoneNum;
  }

} else {
  // verify code
  if ( GetCodeFromPhone($phoneNum) != $ArrFields->{"code"} ) {
    echo "Error: code invalid";
    return;
  }

  // verify - ok

  // backuping data on site just in case
  $resWriteToFile = WriteToFile ($CURLOPT_POSTFIELDS);
  if ($resWriteToFile!==true) echo $resWriteToFile;

  // sending data to ext service
  $resSendDataToAccredcenter =  SendDataToAccredcenter ($CURLOPT_POSTFIELDS);
  echo $resSendDataToAccredcenter;

}

?>
