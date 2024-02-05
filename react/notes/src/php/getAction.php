<?php
require_once('./dataNotes.php');
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST["variablekey"])) {
    $key = $_POST["variablekey"];
    if ($key == 'addNote') {
      echo add();
    } else if ($key == 'deleteNote') {
      echo delete();
    } else if ($key == 'viewNotes') {
      echo view();
    } else {
      echo 'Error con la solicitud';
    }
  } else {
    echo "Error con la solicitud";
  }
}

//require_once('./dataNotes.php');
/*  $data = json_decode(file_get_contents('php://input'), true); */
