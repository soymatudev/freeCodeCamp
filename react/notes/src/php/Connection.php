<?php
class Connection
{

  private static $con;

  private static $HOST = '127.0.0.1';
  private static $PORT = '3306';
  private static $DBNAME = 'notes';
  private static $USER = 'root';
  private static $PASSWORD = '';

  public static function connect()
  {
    try {
      if (self::$con == null) {
        self::$con = mysqli_connect(self::$HOST, self::$USER, self::$PASSWORD, self::$DBNAME, self::$PORT);
        if (self::$con === false) {
          throw new Exception('Error en la conexion: ' . mysqli_connect_error());
        }
      }
    } catch (Exception $e) {
      echo 'Error: ' . $e->getMessage();
    }
    return self::$con;
  }

  public static function closeConnetion()
  {
    if (self::$con !== null) {
      mysqli_close(self::$con);
    }
  }
}
