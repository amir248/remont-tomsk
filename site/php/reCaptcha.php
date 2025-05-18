<?php
$error = true;
    $secret = '6LeQjdgpAAAAAF-yMFPero9bvJlYyd6zxv2uIZGZ';
    
    if (!empty($_POST['g-recaptcha-response'])) {
        $curl = curl_init('https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, 'secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
        $out = curl_exec($curl);
        curl_close($curl);
        
        $out = json_decode($out);
        if ($out->success == true){
            $error = false;
            // that was this script
            if(isset($_POST['tel']) && isset($_POST['name'])){
                $tel   = $_POST['tel'];
                $name  = $_POST['name'];
              echo "tel: $tel Name: $name";
              $handle = fopen("text3.txt","a+");
              $file='text3.txt';
              $writeFile=file_get_contents($file);
              le_put_contents($file, "tel:_".$tel ."__name:". $name);
                // $subject = "Заявка на обратный звонок"; 
                // $headers  = "Content-type: text/plain; charset=utf-8 \r\n"; 
                // $headers .= "From: От кого письмо <aurumtomskstroy@mail.ru>\r\n"; 
                // $headers .= "Reply-To: aurumtomskstroy@mail.ru\r\n"; 
                // $message = "Телефон: " . $tel . "\r\n Имя: " . $name;
                // $message = wordwrap($message, 70, "\r\n");
                  // Отправляем сообщение
                // mail('chikchicly@gmail.com', 'My Subject', $message, $headers);
              header("Location: /200/");
              }else{
                $tellWiev=json_encode($_POST['tel']);
                echo $tellWiev;
                echo $body;
                echo "<br>";
                echo "ELSE";
              }
            //   ??????
        } 
    }
        
    if ($error) {
        echo 'Ошибка заполнения капчи.';
    }


   
?>