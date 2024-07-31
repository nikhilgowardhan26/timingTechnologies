<?php
header("Access-Control-Allow-Origin: *"); // Allows all origins, adjust as needed
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allowed headers

include 'dbconfig.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // SQL query
    $sql = "SELECT * FROM demo_request";
    $result = $conn->query($sql);

    $data = [];

    // Check if there are results
    if ($result->num_rows > 0) {
        // Fetch results into an array
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    } else {
        $data = ["message" => "No results found"];
    }

    echo json_encode($data);

}else{
    
}
?>