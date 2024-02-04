<?php
require_once('./dataNotes.php');

$key = $_POST['variablekey'];

if ($key == 'addNote') {
  echo add();
} else if ($key == 'deleteNote') {
  echo delete();
} else if ($key == 'viewNotes') {
  echo view();
} else {
  echo 'Error con la solicitud';
}
