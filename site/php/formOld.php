<?php
if(isset($_POST['tel']) && isset($_POST['name'])){
  $tel   = $_POST['tel'];
  $name  = $_POST['name'];
echo "tel: $tel Name: $name";
$handle = fopen("text.txt","a+");
$file='text.txt';
$writeFile=file_get_contents($file);
file_put_contents($file, "tel:_".$tel ."__name:". $name);

}else{
  echo "ELSE";
}

?>
