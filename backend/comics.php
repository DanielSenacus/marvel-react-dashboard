<?php
header('Access-Control-Allow-Origin: *');
if (isset($_GET["character-id"]) && isset($_GET["reference"])) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $character_id = $_GET['character-id'];
    $reference = $_GET['reference'];

    $ts = time();
    $public_key = '214474b0e2a910d8091e9ab2ef00c7b2';
    $private_key = '6652493891b2b2b31943c3d7769669e0bd3930a7';
    $hash = md5($ts . $private_key . $public_key);


    $query = array(

        'apikey' => $public_key,
        'ts' => $ts,
        'hash' => $hash,
    );

    $marvel_url = 'https://gateway.marvel.com:443/v1/public/characters/' . $character_id . "/" . $reference . "?" . http_build_query($query);


    curl_setopt($curl, CURLOPT_URL, $marvel_url);

    $result = json_decode(curl_exec($curl), true);

    curl_close($curl);

    echo json_encode($result);
} else {
    echo "Error: character no defined.";
}
