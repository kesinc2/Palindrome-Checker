// HTML sayfasındaki id'si "input" olan elementi bulur ve 'input' adlı sabite atar.
// Bu, kullanıcının metin girdiği metin kutusu veya benzeri bir elementtir.
const input = document.getElementById("input");

// Bir metin dizisini tersine çeviren bir fonksiyon tanımlar.
// Bu fonksiyon, "kabak" gibi bir metin alır ve "kabak" olarak geri döndürür.
// "merhaba" gibi bir metin alır ve "abahrem" olarak geri döndürür.
function reverseString(str) {
  // 1. str.split("") : Metni her bir harften oluşan bir diziye dönüştürür.
  //    Örn: "kabak" -> ["k", "a", "b", "a", "k"]
  // 2. .reverse() : Dizideki elemanların sırasını tersine çevirir.
  //    Örn: ["k", "a", "b", "a", "k"] -> ["k", "a", "b", "a", "k"]
  // 3. .join("") : Dizinin elemanlarını tekrar birleştirerek tek bir metin haline getirir.
  //    Örn: ["k", "a", "b", "a", "k"] -> "kabak"
  return str.split("").reverse().join("");
}

// "check" fonksiyonu, HTML elementinden değeri alır, tersine çevirir ve karşılaştırır.
function check() {
  // 'input' elementinin içine girilen metin değerini alır ve 'value' adlı sabite atar.
  const value = input.value;

  // 'reverseString' fonksiyonunu kullanarak 'value' metnini tersine çevirir ve 'reverse' adlı sabite atar.
  const reverse = reverseString(value);

  // 'value' (orijinal metin) ile 'reverse' (tersine çevrilmiş metin) eşit mi diye kontrol eder.
  if (value == reverse) {
    // Eğer eşitse, yani metin bir palindromsa, ekrana "Palindrome" uyarısı verir.
    alert("Palindrome");
  } else {
    // Eğer eşit değilse, yani bir palindrom değilse, ekrana "Not Palindrome" uyarısı verir.
    alert("Not Palindrome");
  }

  // İşlem bittikten sonra, giriş kutusunun içindeki metni temizler.
  // Bu, kullanıcının bir sonraki kontrolü daha kolay yapmasını sağlar.
  input.value = "";
}