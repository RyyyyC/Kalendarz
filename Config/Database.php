<?php
class Database
{
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $database = "Kalendarz";

    public function __construct()
    {
        $conn = new mysqli($this->host, $this->user, $this->password);
        $conn->query("CREATE DATABASE IF NOT EXISTS Kalendarz;");
        $conn->close();
        $this->CreateTables();
    }

    private function CreateTables()
    {
        $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
        $conn->query("CREATE TABLE IF NOT EXISTS `uzytkownicy` (`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL, `login` VARCHAR(32) NOT NULL, `password` VARCHAR(64)  NOT NULL, `role` VARCHAR(32) NOT NULL);");
        $conn->query("CREATE TABLE IF NOT EXISTS `wydarzenie` (`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,`idUser` INT NOT NULL, `name` VARCHAR(32) NOT NULL, `color` VARCHAR(32) NOT NULL, `date` DATE, shared JSON);");
    }

    public function ConnectToDatabase()
    {
        $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
        if ($conn->connect_error) {
            die("Błąd połaczenia: " . $conn->connect_error);
        } else {
            echo ("Polączono!");
            return $conn;
        }
    }

    public function AddValues()
    {
        $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
        $conn->query("INSERT INTO `uzytkownicy` VALUES (NULL, 'admin', '" . md5("admin") . "', 'admin'), (NULL, 'user', '" . md5("user") . "' ,'user');");
        $conn->query("INSERT INTO `wydarzenie` VALUES (NULL, 2, 'Urodziny', '2022-04-06', NULL);");
    }
}

$database = new Database();

$database->AddValues();
