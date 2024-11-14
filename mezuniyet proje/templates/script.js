document.addEventListener('DOMContentLoaded', function() {
    console.log('İklim Değişikliği Bilgilendirme Sayfası Yüklendi!');
    alert('İklim Değişikliği Bilgilendirme Sayfasına Hoş Geldiniz!');
    
    // Scroll event
    window.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('section');
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.transition = 'background-color 0.5s ease';
                section.style.backgroundColor = '#f0f8ff';
            } else {
                section.style.backgroundColor = '#fff';
            }
        });
    });
});