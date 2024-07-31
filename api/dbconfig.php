<?php

$servername = "103.231.43.129";
$username = "timingindia_data";
$password = 'HYf@rC+Ubk$Y';

$dbname = "timingindia_data";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
?>