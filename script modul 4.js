function klik() {
    //var
    //let
    //const
    var harga = document.getElementById("harga").value;
    var jumlah = document.getElementById("jumlah").value;
    var diskon = document.getElementById("diskon").value;
    var hasil = harga*jumlah;
    var hargaDISKON= hasil*(diskon* (100/100));
    var hargaTOTAL = hasil - hargaDISKON
    
    if (diskon<= 10){
        alert( "oke bang")
    }
    

    document.getElementById("total").value= hasil;
    

    
}