<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../core/initialize.php');
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $post = new Post($db);

    $data = json_decode(file_get_contents("php://input"));

    $post->login = $data->login;
    $post->password = $data->password;
    if(!$post->CheckExistingAccount($data->login)){
        if ($post->Register()) {
            print_r(json_encode(array('message' => 'Post created.', 'login' => $post->login, 'password' => $post->password)));
            http_response_code(200);
        } else {
            print_r(json_encode(array('message' => 'Post not created.')));
            http_response_code(400);
        }
    }else{
        print_r(json_encode(array('message' => 'Account Exists.')));
        http_response_code(400);
    }
}
?>