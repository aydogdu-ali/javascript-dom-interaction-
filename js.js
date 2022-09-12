// sayaç tanımladık.

let sayac = 0;

// sayacı kontrol altına aldık
let sayacDom = document.querySelector("#sayac");

//sayacı dinamik hale getirdik
sayacDom.innerText = sayac;

// butonları kontrol altına aldık
let ArttırDom = document.querySelector("#Arttır");

let AzaltDom = document.querySelector("#Azalt");

let ResetDom = document.querySelector("#Reset");

// yapılacak olayı ve fonsiyonumuzu tanımladık.
// tıkladığımızda ilgili butonlar içerisindeki işelevi yerine getirecek
ArttırDom.addEventListener("click", clickEvent);
AzaltDom.addEventListener("click", clickEvent);
ResetDom.addEventListener("click", clickEvent);

//fonksiyonu yazma
function clickEvent() {
  if (this.id == "Arttır") {
    sayacDom.innerText = sayac += 1;
    if (sayac == 11) {
      alert("Denediğiniz İçin Teşekkürler:) Yaşama Hakkın Mücadelen Kadardır");
    }
  } else if (this.id == "Azalt") {
    sayacDom.innerText = sayac -= 1;
    if (sayac == -6) {
      alert("Daha Fazla Yorulmayın Lütfen:) Herşey Gönlünüzce Olsun");
    }
  } else if (this.id == "Reset") {
    sayacDom.innerText = sayac = 0;
  }
}
