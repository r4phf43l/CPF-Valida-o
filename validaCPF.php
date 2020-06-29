<?php

function validateCpf($v)
{
    $f = preg_replace( '/[^0-9]/is', '', $v );     
    if (strlen($f) != 11) { return false; }
    if (preg_match('/(\d)\1{10}/', $f)) { return false; }
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) { $d += $f{$c} * (($t + 1) - $c); }
        $d = ((10 * $d) % 11) % 10;
        if ($f{$c} != $d) { return false; }
    }
    return true;
}
