<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once('../core/initialize.php');

$post = new Post($db);

$result = $post->read();
$num = $result->rowCount();

if ($num > 0) {
    $post_arr = array();
    $post_arr['data'] = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $post_item = array(
            'id' => $id,
            'login' => $login,
            'password' => $password,
            'role' => $role
        );
        array_push($post_arr['data'], $post_item);
    }
    http_response_code(200);
    print_r(json_encode($post_arr));
} else {
    http_response_code(400);
    print_r(json_encode(array('message' => 'No posts found.')));
}
