let ad = "Sadık";
let soyad = "Turan";
let yas = 35;
let sehir = "Kocaeli";

let mesaj1 = "Benim adım " + ad+ " ve soyadım "+soyad+". "+sehir+"'de yaşıyorum." + " Emekliliğe "+(65-yas)+ " yılım kaldı";
//backtick
let mesaj2 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65-yas} yılım kaldı.`;

//ternay operators
let emeklilik =(65-yas>0)?"Emekliliğe "+(65-yas)+ " yıl kaldı.":"Emekli olduk.";

let mesaj3 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj1);
console.log(mesaj2);
console.log(mesaj3);