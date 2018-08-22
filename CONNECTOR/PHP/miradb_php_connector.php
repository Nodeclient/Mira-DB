<?php
 class MiraDB {
    private $_Server;
    private $_User;
    private $_Pass;
    private $_DB;

    public function __construct($u,$p,$s,$d) {
        $this->_Server = $s;
        $this->_User = $u;
        $this->_Pass = $p;
        $this->_DB = $d;
    }
    
    public function query($q){
        set_error_handler(
            create_function(
                '$severity, $message, $file, $line',
                'throw new ErrorException($message, $severity, $severity, $file, $line);'
            )
        );
            try {
                $User_Data = array('user' =>  $this->_User, 'pass' =>  $this->_Pass, 'db' => $this->_DB, 'query' => $q );
                    $Post_String = array('http' => array('header'  => "Content-type: application/x-www-form-urlencoded\r\n",'method'  => 'POST','content' => http_build_query($User_Data),));
                        return  file_get_contents( $this->_Server , false, stream_context_create($Post_String));
            }
                catch (Exception $e) {
                        return "Connection Failed.. CODE:" . $e->getCode();
                }
        restore_error_handler();
    }
 }
 ?>