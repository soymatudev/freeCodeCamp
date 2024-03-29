<?php
require_once('./Connection.php');

class DataNotes
{

  private $conexion;

  public function __construct()
  {
    $this->conexion = Connection::connect();
  }

  public static function executeQuery($query)
  {
    $conexion = Connection::connect();

    if ($conexion->connect_error) {
      echo 'Error de conexion: ' . $conexion->connect_error;
      return null;
    }

    $result = $conexion->query($query);

    if ($result) {
      while ($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
      return $data;
    } else {
      echo 'Error en la consulta: ' . $conexion->connect_error;
      Connection::closeConnetion();
      return null;
    }
  }

  public static function addNote($id, $title, $body)
  {
    $query = "INSERT INTO notes(id, title, body) VALUES('" . $id . "' , '" . $title . "', '" . $body . "')";
    self::executeQuery($query);
    return true;
  }

  public static function deleteNote($id)
  {
    $query = "DELETE FROM notes WHERE id = '" . $id . "'";
    self::executeQuery($query);
    return true;
  }

  public static function viewNotes()
  {
    $query = "SELECT * FROM notes";
    return self::executeQuery($query);
  }

  public function closeConnection()
  {
    $this->conexion->close();
  }
}

function add()
{
  $id = $_POST['id'];
  $title = $_POST['title'];
  $body = $_POST['body'];
  $dataNotes = new DataNotes();
  $data = $dataNotes->addNote($id, $title, $body);
  $dataNotes->closeConnection();
  header('Content-Type: application/json');
  return json_encode($data);
}

function delete()
{
  $id = $_POST['id'];
  $dataNotes = new DataNotes();
  $data = $dataNotes->deleteNote($id);
  $dataNotes->closeConnection();
  header('Content-Type: application/json');
  return json_encode($data);
}


function view()
{
  $dataNotes = new DataNotes();
  $data = $dataNotes->viewNotes();
  $dataNotes->closeConnection();
  header('Content-Type: application/json');
  return json_encode($data);
}
/* 
function view()
{
  $j = ["message" => "ascgasbhui"];
  $usuarios = array(
    array(
      'id' => 1,
      'nombre' => 'Juan',
      'edad' => 25
    ),
    array(
      'id' => 2,
      'nombre' => 'María',
      'edad' => 30
    )
  );
  header('Content-Type: application/json');
  //return json_encode("ascshaiuchsab");
  //return json_encode(["message" => "ascshaiuchsab"]);
  return json_encode($usuarios);
}
 */