<?php
class Events
{
    private $conn;
    private $table = 'wydarzenia';

    public $id;
    public $login;
    public $password;
    public $role;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Read()
    {
        $query = 'SELECT * FROM ' . $this->table . ';';
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
