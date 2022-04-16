<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once('../core/initialize.php');

$post = new Post($db);

$post->login = isset($_GET['login']) ? $_GET['login'] : die();
$post->password = isset($_GET['password']) ? md5($_GET['password']) : die();
$post->Login();

$post_arr = array(
    'id' => $post->id,
    'login' => $post->login,
    'password' => $post->password,
    'role' => $post->role
);
if (json_encode($post_arr["id"]) == 'null') {
    print_r(json_encode(array('message' => 'Bad request.', 'Description' => 'Wrong email or password.')));
    http_response_code(400);
} else {
    print_r(json_encode($post_arr));
    http_response_code(200);
}
