<?php
header("Access-Control-Allow-Origin: *"); // Allows all origins, adjust as needed
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allowed headers

include 'dbconfig.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$data = json_decode(file_get_contents('php://input'), true);

function validate($data) {
    $errors = [];
    
    if (empty($data['company_name'])) {
        $errors[] = 'Company Name is required';
    }
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }
    if (empty($data['first_name'])) {
        $errors[] = 'First Name is required';
    }
    if (empty($data['last_name'])) {
        $errors[] = 'Last Name is required';
    }
    if (empty($data['mobile'])) {
        $errors[] = 'Mobile number is required.';
    } elseif (!is_numeric($data['mobile'])) {
        $errors[] = 'Mobile number must be numeric.';
    } elseif (strlen($data['mobile']) != 10) {
        $errors[] = 'Mobile number must be exactly 10 digits long.';
    }
    if (empty($data['state'])) {
        $errors[] = 'State is required';
    }
    if (empty($data['website'])) {
        $errors[] = 'Website is required';
    }
    
    return $errors;
}
// Validate data

$errors = validate($data);

if (!empty($errors)) {
    echo json_encode(['errors' => $errors]);
    exit;
}else{

    $company_name = $data['company_name'];
    $email = $data['email'];
    $first_name = $data['first_name'];
    $last_name = $data['last_name'];
    $mobile = $data['mobile'];  
    $state = $data['state'];
    $website = $data['website'];
    $created_at = date('Y-m-d H:i:s'); // Current timestamp


    $stmt = $conn->prepare("INSERT INTO demo_request (company_name, email, first_name, last_name, mobile, state, website, created_at) VALUES (?,?, ?, ?,?,?,?, ?)");
    $stmt->bind_param("ssssisss", $company_name, $email, $first_name, $last_name, $mobile, $state, $website, $created_at);

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