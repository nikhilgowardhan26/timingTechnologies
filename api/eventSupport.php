<?php
header("Access-Control-Allow-Origin: *"); // Allows all origins, adjust as needed
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allowed headers

include 'dbconfig.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$data = json_decode(file_get_contents('php://input'), true);

// exit;
function validate($data) {
    $errors = [];
    
    if (empty($data['name'])) {
        $errors[] = 'Name is required';
    }
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }
    if (empty($data['bib_number'])) {
        $errors[] = 'Bib Number is required';
    }
    if (empty($data['mobile'])) {
        $errors[] = 'Mobile number is required.';
    } elseif (!is_numeric($data['mobile'])) {
        $errors[] = 'Mobile number must be numeric.';
    } elseif (strlen($data['mobile']) != 10) {
        $errors[] = 'Mobile number must be exactly 10 digits long.';
    }
    if (empty($data['query_type'])) {
        $errors[] = 'Query type is required';
    }
    if (empty($data['doubt'])) {
        $errors[] = 'Query is required';
    }
    
    return $errors;
}
// Validate data

$errors = validate($data);

if (!empty($errors)) {
    echo json_encode(['errors' => $errors]);
    exit;
}else{

    $name = $data['name'];
    $email = $data['email'];
    $bib_number = $data['bib_number'];
    $mobile = $data['mobile'];  
    $query_type = $data['query_type'];
    $doubt = $data['doubt'];
    $created_at = date('Y-m-d H:i:s'); // Current timestamp


    $stmt = $conn->prepare("INSERT INTO event_support (name, email, bib_number, mobile, query_type, doubt, created_at) VALUES (?,?, ?, ?,?,?,?)");
    $stmt->bind_param("sssisss", $name, $email, $bib_number, $mobile, $query_type, $doubt, $created_at);

    if ($stmt->execute()) {
        echo json_encode(['success' => 'Request added successfully']);
    } else {
        echo json_encode(['error' => 'Error: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();

    }

}else{
    
}
?>