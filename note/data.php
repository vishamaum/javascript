<?php include('db.php');?>
     <?php
    
 $sql = "SELECT * FROM posts";
$result = $db->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id = $row['id'];
     echo   " <div class='col-md-4 mt-5 pt-5' id='new'>
                <div class='card w3-amber shadow-lg rounded'>
                    <div class='card-body'>
                    <button onclick='remove()' id='del'  type='button' class='close'' aria-label='Close'>
                    <span aria-hidden='true''>&times;</span>
                     </button>
                        <div class='card-title font-italic font-weight-bold text-center'>"
                            .$row['title']."
                        </div>
                        <div class='card-title  font-weight-light text-justify'>".$row['create_Date']."</div>
                        <div class='card-text text-justify font-italic'>".$row['body']."</div>
                    </div>
                </div>
            </div> ";
    } 
    
}
    ?>
    
   