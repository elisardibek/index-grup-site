# Geliştirme Süreci Geri Bildirimi

Bu doküman, proje geliştirme sürecinde karşılaşılan sorunları, yapılan düzeltmeleri ve süreçten çıkarılan dersleri özetlemektedir.

## 🐞 Bulunan ve Düzeltilen Hatalar

### HTML Yapısı
- Kaçak/yanlış konumlanmış kapanış etiketleri (`</header>`, `</div>`) — özellikle görsel değiştirme sırasında elle yapılan düzenlemelerde birkaç kez oluştu
- İç içe girmiş yinelenen `<footer>` etiketleri
- `<header>` etiketinin hiç kullanılmaması (sadece `<nav>` vardı) — semantik/SEO açısından eksikti, eklendi
- Bazı görsellerde eksik `alt` metni

### CSS / Responsive Tasarım
- 360px genişlikte yatay taşma: sabit `margin-left: 40px` + `%90` genişlik kombinasyonu ekranı taşırıyordu → `max-width` + `margin: auto` ile çözüldü
- Section içeriğinin sürekli sola yaslı kalması, sağda dengesiz boşluk bırakması
- Mobilde (768px altı) navbar linklerinin alt alta dizilip ekranın büyük kısmını kaplaması → hamburger menü eklendi

### JavaScript / Erişilebilirlik
- "Şirketlerimiz" açılır menüsünde `aria-expanded` değerinin hiç güncellenmemesi (ekran okuyucular için yanlış bilgi)
- Mobilde dokunma sonrası açılır menünün kapanmaması (CSS `:focus-within` kuralının JS toggle ile çakışması)
- JS dosyasında bir karakterlik yazım hatası (`/` yerine `//` olması gereken yorum satırı) tüm script'in çalışmasını engelliyordu

### Form / Formspree
- `_subject`, `_gotcha` (spam koruması) eksikti, eklendi
- `_next` ile yönlendirme güvenilir çalışmadı → form gönderimi JavaScript (`fetch`) ile sayfa yenilenmeden yapılacak şekilde değiştirildi, kullanıcı hep sitede kalıyor

### İçerik / Diğer
- Bazı sayfalarda "6 şirket" yerine yanlışlıkla "7" yazması
- Görünen bir HTML yorum satırı hatası (kaçak virgül)
- Ölü sosyal medya linkleri (`href="#"`) → "çok yakında" sayfasına yönlendirildi
- 404 sayfası yoktu, eklendi
- README'de gerçeği yansıtmayan ifadeler (kullanılmayan JS özelliği, yanlış görsel kaynağı) güncellendi

## 💡 Süreçten Çıkarılanlar

En çok, aynı navbar/footer'ı 18 sayfada tekrar tekrar kullanmak zorladı beni. Bir yerde ufak bir hata yapıyorsun (fazladan boşluk, yanlışlıkla silinen bir etiket falan), fark etmeden aynı hata diğer sayfalara da bulaşabiliyor. Toplu "bul-değiştir" gerçekten hızlı ama dikkatli kullanmazsan yeni hatalara da sebep olabiliyormuş, bunu öğrenmek durumunda kaldım maalesef.

Responsive tasarımı sadece pencereyi küçültüp göz kararı kontrol etmenin yetmediğini de gördüm — F12'den gerçekten 360px, 768px gibi spesifik genişliklerde açıp bakmak lazımmış, yoksa "iyi görünüyor" dediğin yerde aslında taşma falan oluyor, fark etmiyorsun.

Bir de CSS'te `:hover` ile çalışan bir şeyi (dropdown menü gibi) sonradan JavaScript'le de kontrol etmeye çalışınca ikisi birbirine giriyor, beklemediğin şeyler oluyor — mobil menünün kapanmaması olayında bunu yaşadım. İkisinin birlikte nasıl davrandığını anlamadan üstüne kod eklemek işleri daha da karıştırabiliyormuş.

## 🔧 Yapılabilecek İyileştirmeler

- Görsellerin boyutu hâlâ büyük (1-2MB civarı), sıkıştırılırsa site daha hızlı açılır.
- "Index" sayfası şu an ana sayfayla neredeyse aynı, ileride kendine özgü bir içerik yazılabilir.
- Formdaki `_next` yönlendirmesi bir türlü güvenilir çalışmadı, sonunda JavaScript ile (sayfa hiç yenilenmeden) göndermeye geçtim — ileride bunun farklı durumlarda (yavaş internet, JS kapalı tarayıcı gibi) nasıl davrandığını da test etmek iyi olur.