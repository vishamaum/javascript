<?php
    
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $post = $_POST['sub'];
    $q = "insert into posts value(null,'$name','$mail',null)"  ;
     
    
        if($name){
            $db->query($q);
        }
    ?>