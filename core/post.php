<?php
    class Post{
        private $conn;
        private $table = 'uzytkownicy';

        public $id;
        public $category_id;
        public $category_name;
        public $title;
        public $body;
        public $author;
        public $create_ad;

        public function __construct($db){
            $this->conn = $db;
        }

        public function Read(){
            $query = 'SELECT * FROM '.$this->table.';';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }
?>