<?php
//require_once('./dataNotes.php');
/* 
$data = json_decode(file_get_contents('php://input'), true); */
$key = $data['variablekey'];

if ($key == 'addNote') {
  echo add();
} else if ($key == 'deleteNote') {
  echo delete();
} else if ($key == 'viewNotes') {
  //echo view();
  echo "view()";
} else {
  echo 'Error con la solicitud';
}
