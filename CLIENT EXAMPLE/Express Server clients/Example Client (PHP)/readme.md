
### (PHP) connector
[miradb_php_connector.php](https://git.io/fpvi3 ".php")

### Example Client
```php
    <?php
        include 'miradb_php_connector.php';
            $db = new MiraDB("root","","http://localhost:8123/query","test");
                echo  $db->query("select table person");
    ?>
```
