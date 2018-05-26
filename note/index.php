<!DOCTYPE html>
<?php 
session_start();
error_reporting(E_PARSE | E_ERROR);
include('db.php');
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <title>phpPro</title>
</head>
<body class="w3-blue">
    <div class="container mt-4">
           <nav class=" navbar fixed-top navbar-inverse w3-cyan">
<a class="navbar-brand text-white" href="#">Blog</a>
<a class="navbar-brand text-white" href="index.html">Posts</a>
</nav>
    <div class="form p-5">
        <form action="<?php $_SERVER['PHP_SELF']?>" method="post">
<input type="text" class="form-control mt-2" id="name" name="name" placeholder="Title" required>
<input type="text" class="form-control mt-2" id="mail" name="mail" placeholder="Body" required>
<input name="sub" type="submit" class="mt-2 w3-light-blue shadow rounded form-control" id="sub" value="POST">

       
        </form>
    </div>
    </div>
    
    <?php include('insert.php')?>
    
  
</body>
</html>


