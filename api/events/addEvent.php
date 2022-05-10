<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $event = new Events($db);
    $data = json_decode(file_get_contents("php://input"));

    $event->idUser = $data->idUser;
    $event->name = $data->name;
    $event->color = $data->color;
    $event->date = $data->date;

    if($event->AddEvent()){
        print_r(json_encode(array('message' => 'Post created', 'data' => $data->idUser.','.$data->name.','.$data->color.','.$data->date)));
        http_response_code(200);
    }else{
        print_r(json_encode(array('message' => 'Post not created')));
        http_response_code(400);
    }
}