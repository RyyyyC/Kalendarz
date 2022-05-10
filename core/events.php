<?php
class Events
{
    private $conn;
    private $table = 'wydarzenie';

    public $idUser;
    public $name;
    public $color;
    public $date;
    public $shared;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Read()
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE idUser = ?;';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->idUser);
        $stmt->execute();
        return $stmt;
    }

    public function AddEvent(){
        $query = 'INSERT INTO '.$this->table.' VALUES (NULL, :idUser, :name, :color, :date, NULL);'; 
        $stmt = $this->conn->prepare($query);

        $this->idUser = htmlspecialchars(strip_tags($this->idUser));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->color = htmlspecialchars(strip_tags($this->color));
        $this->date = htmlspecialchars(strip_tags($this->date));

        $stmt->bindParam(':idUser', $this->idUser);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':color', $this->color);
        $stmt->bindParam(':date', $this->date);

        $result = $stmt->execute();
        if($result){
            return true;
        }
        printf("Error %s. \n", $stmt->error);
        return false;
    }
}
