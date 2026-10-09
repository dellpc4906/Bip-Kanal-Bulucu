document.getElementById('search-btn').addEventListener('click', sonuclariEkranaBas);
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sonuclariEkranaBas();
});

function sonuclariEkranaBas() {
    // Kutudaki kelimeyi alıyoruz
    var arananKelime = document.getElementById('search-input').value.trim();
    
    if (arananKelime === "") {
        alert('Lütfen aramak için bir kelime yazın!');
        return;
    }

    var iframe = document.getElementById('wiki-frame');
    var karşılamaMesajı = document.getElementById('welcome-message');

    // İstediğiniz düz mantık birleştirme: Site adresi + yazdığınız kelime
    // Mobil arayüz linki (m.wikipedia) iframe kilitlerine takılmadan ekranda çalışır.
    var tamAdres = "https://bip.ai/join/" + arananKelime;

    // Karşılama yazısını gizle, iframe ekranını görünür yap ve adresi yükle
    karşılamaMesajı.style.display = "none";
    iframe.style.display = "block";
    iframe.src = tamAdres;
}
