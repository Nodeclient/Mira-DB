#include './lib/WinHttp.au3'
#include "./lib/json.au3"

    $sU = "root"
    $sP =""
    $sD="test"
    $sH="http://localhost:8123/query"


    Func Query($sQuery)
        Global $result = HttpPost( $sH ,"user=" & $sU & "&pass=" & $sP & "&db=" & $sD & "&query=" & $sQuery )
        Return $result
    EndFunc

    $o = Query("select table person") 
    $object = json_decode($o)

    MsgBox(35, "CONNECT MIRA-DB",  " JSON : " &   $o  )
    MsgBox(35, "CONNECT MIRA-DB",  " Record Row 1 -> " &   Json_ObjGet($object[0], "col1")  )