<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once('../../core/initialize.php');

$event = new Events($db);

$event->idUser = isset($_GET["idUser"]) ? $_GET["idUser"] : die();

//$HappyLife = isset($_GET["HappyLife"]) ? $_GET["HappyLife"] : die();


$result = $event->Read();
$num = $result->rowCount();

if ($num > 0) {
    $event_arr = array();
    $event_arr['data'] = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $event_item = array(
            'id' => $id,
            'idUser' => $idUser,
            'name' => $name,
            'color' => $color,
            'date' => $date,
            'shared' => $shared
        );
        array_push($event_arr['data'], $event_item);
    }
    http_response_code(200);
    print_r(json_encode($event_arr));
} else {
    http_response_code(400);
    print_r(json_encode(array('message' => 'No posts found.')));
}
