<?php


if (file_exists('data.json')){
    $messages =  file_get_contents('data.json');
    $jsonArray = json_decode($messages, true);

    if (isset($_POST['sendmessage']) && !empty($_POST['sendmessage'])) {

        $jsonArray[] = $_POST['sendmessage'];
        $message = json_encode($jsonArray);
        file_put_contents('data.json', $message);
       
    
        $result = [
            'status' => 'ok'
        ];
        echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    
        die();
    }


    $result = [
        'status' => 1,
        'messages' => $jsonArray
    ];
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    
}


