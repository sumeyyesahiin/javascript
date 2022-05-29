//=========== burada yazdigim hersey index.html yi baglar. script ile bagladim cunku.
//KONSOL

// console.log("Hello javascript");
// alert("dikkat");
// console.warn("bu bir uyaridir.");
// console.error("bu bir hatadir.");
// prompt("adinizi giriniz");

//---------- degisken tanimlama ----------
//var isimken tipini degistirebiliyor
//heryerden cagir.
var isim = "sumeyye";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

// ===================CONST========
// ne verdiysen orada kalir. var gibi degismez.
//sadece baslangicta deger atanir.
const piSayisi = 3.14;
//piSayisi = 3;

const isim1 = "asedefe";
console.log(isim1);

// ===================LET=========
let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "erdem";

//string tanimlamak icin 3 farkli karakter kullanilabilir.
let name1 = "Alattin";
let name2 = `sumsum`;
let name3 = "asedefe";

console.log(name3);

//aritmetik operatorler
const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("toplan fiyat", kola + cips + ekmek);

const ad = "sumsum";
const soyad = "sahin";
let s1 = 5;

console.log("benim adim" + " " + ad + " " + soyad);

//! Template literal===================
console.log(`benim adim ${ad} yasim ${s1}`);

//us alma iki yildiz ile
const taban = 2;
const us = 3;

console.log(taban ** us);

//mod alma
const sayi = 123;
const birler = 123 % 10;
console.log(birler);

// karsilastirma operatorleri
const s3 = 5;
const s4 = "5";

//2 esit olursa tipine bakmaz
console.log(s3 == s4);

//3 esit olursa tipine de bakar
console.log(s3 === s4);

//todo tip degisimleri======
const para = "100";
console.log(para + 15);
console.log(Number(para) + 15);

const sayi5 = 56;
console.log(String(sayi5) + sayi5);

console.log(typeof sayi5);
