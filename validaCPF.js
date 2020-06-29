function validateCPF(cpf) {
    cpf = cpf.toString().replace(/[^\d]+/g,'');	
    if (cpf.length != 11) { return false; }
    if (cpf.match('/(\d)\1{10}/')) { return false; }
    for (t = 9; t < 11; t++) {
        for (d = 0, c = 0; c < t; c++) { d += cpf[c] * ((t + 1) - c); }
        d = ((10 * d) % 11) % 10;
        if (cpf[c] != d) { return false; }
    } return true;
}
