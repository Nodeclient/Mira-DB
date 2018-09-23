<?php
// MiraDB ClASS EXAMPLE
// [GITHUB]/Mira-DB/CONNECTOR/PHP/miradb_php_connector.php 
    include 'miradb_php_connector.php';
        $db = new MiraDB("root","","http://localhost:8123/query","test");
            echo  $db->query("select table person");
?>