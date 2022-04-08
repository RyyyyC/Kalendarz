<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../core/initialize.php');

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

$post->id = $data->id;
$post->login = $data->login;
$post->password = $data->password;

if ($post->Update()) {
    echo json_encode(
        array('message' => 'Post updated.')
    );
} else {
    echo json_encode(
        array('message' => 'Post not updated.')
    );
}
