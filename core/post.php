<?php
class Post
{
    private $conn;
    private $table = 'uzytkownicy';

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

    public function Login()
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE login = ? AND password = ?;';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->login);
        $stmt->bindParam(2, $this->password);

        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->id = $row['id'];
        $this->login = $row['login'];
        $this->password = $row['password'];
        $this->role = $row['role'];
        return $stmt;
    }

    public function CheckExistingAccount()
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE login = ?;';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->login);

        $stmt->execute();
        if ($stmt->rowCount() != 0)
            return true;
        return false;
    }

    public function Register()
    {
        $this->password = md5($this->password);

        $query = 'INSERT INTO ' . $this->table . ' SET login = :login, password = :password, role = "user"';
        $stmt = $this->conn->prepare($query);
        $this->login = htmlspecialchars(strip_tags($this->login));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $stmt->bindParam(':login', $this->login);
        $stmt->bindParam(':password', $this->password);
        $result = $stmt->execute();
        if ($result) {
            return true;
        }
        printf("Error %s. \n", $stmt->error);
        return false;
    }

    public function Update()
    {
        $query = 'UPDATE ' . $this->table . ' SET login = :login, password = :password WHERE id = :id;';
        $stmt = $this->conn->prepare($query);

        $this->login = htmlspecialchars(strip_tags($this->login));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->id = htmlspecialchars(strip_tags($this->id));


        $stmt->bindParam(':login', $this->login);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            $stmt = $this->conn->query('DELETE FROM ' . $this->table . ' WHERE login="";');
            return true;
        }
        printf("Error %s. \n", $stmt->error);
        return false;
    }

    public function Delete()
    {
        $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id;';
        $stmt = $this->conn->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s. \n", $stmt->error);
        return false;
    }
}
