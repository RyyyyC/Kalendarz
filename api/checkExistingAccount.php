<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once('../core/initialize.php');

$post = new Post($db);

$post->login = isset($_GET['login']) ? $_GET['login'] : die();
$result = $post->CheckExistingAccount();


$post_arr = array(
    'id' => $post->id,
    'login' => $post->login,
    'password' => $post->password,
    'role' => $post->role
);

if ($result) {
    print_r(json_encode(array('message' => 'Bad request.', 'Description' => 'Account exists!')));
    http_response_code(400);
} else {
    print_r(json_encode(array('message' => 'OK.', 'Description' => 'Account does not exists!')));
    http_response_code(200);
}
