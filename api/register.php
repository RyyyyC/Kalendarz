<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../core/initialize.php');

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

$post->login = $data->login;
$post->password = md5($data->password);

if ($post->Register()) {
    http_response_code(200);
    print_r(json_encode(array('message' => 'Post created.')));
} else {
    http_response_code(400);
    print_r(json_encode(array('message' => 'Post not created.')));
}
