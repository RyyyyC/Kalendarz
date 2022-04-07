<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../core/initialize.php');

    $post= new Post($db);

    $post->login = isset($_GET['login']) ? $_GET['login'] : die();
    $post->password = isset($_GET['password']) ? $_GET['password'] : die();
    $post->Login();

    $post_arr = array(
        'id' =>$post->id,
        'login'=>$post->login,
        'password'=>$post->password,
        'role'=>$post->role
    );

    print_r(json_encode($post_arr));
?>