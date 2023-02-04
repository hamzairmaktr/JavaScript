var opel={
    marka:"Opel",
    model:"Corsa",
    yil:"2015",
    renk:"Mavi",
    otamatik:true
};

console.log(opel);
console.log(opel.marka);
console.log(opel["renk"]);

var toyata=new Object();
toyata.marka='Toyata';
toyata.model='Yaris';
toyata.yil='2015';
toyata.otamatik=true;

toyata.model='Supra';

console.log(toyata);