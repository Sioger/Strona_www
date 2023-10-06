function sprawdz() {

    var ok=true;

    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
    obiektemail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;

    if (!sprawdzPole("nazw",obiektNazw)) {
        ok=false;
        document.getElementById("nazw_error").innerHTML=
            "Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("nazw_error").innerHTML="";
    if (!sprawdzPole("nazw",obiektemail)) {
        ok=false;
        document.getElementById("email_error").innerHTML=
            "Wpisz poprawnie email!";
    }
    else document.getElementById("email_error").innerHTML="";


    return ok;
}