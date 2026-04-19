/**
 * PUSAT PENGATURAN DATA & FOTO*/

const CONFIG_SEKOLAH = {
    // Identitas & Kontak
    waAdmin: "6281280518231",
    logoUrl: "https://i.ibb.co.com/Pv1w9gzy/IMG-20260416-WA0001-11zon.jpg",
    
    //Link Google Form
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScSoK9vxVjkc7awCT9Xixu5UFNyEcfBKe1Ls-1tnVTtSXfwPw/viewform?usp=publish-editor",

    // Lokasi
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126934.56634917176!2d106.135552!3d-6.1702144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4221a00b17d2a9%3A0x96d21a1f14106cd7!2sPAUD%20ISTIQOMAH%20Kepuh%20Ds.Sindangheula%20Kec.Pabuaran!5e0!3m2!1sid!2sid!4v1776331380210!5m2!1sid!2sid",

    // Banner Utama (Hero)
    heroImageUrl: "https://i.ibb.co.com/bjWJQp7B/1776519815500.png",
    
    // Foto Program Unggulan
    fotoTahfidz: "https://i.ibb.co.com/VpMNL0ht/IMG-20260415-WA0043.jpg",
    fotoDigital: "https://i.ibb.co.com/QvkGYK3f/IMG-20260417-WA0000.jpg",
    fotoBilingual: "https://i.ibb.co.com/V0gd5JC3/1776330359364.png",

    // ==========================================
    // DAFTAR GAMBAR EKSKUL (Popup Gallery)
    // ==========================================
    // Anda bisa menambah gambar sebanyak mungkin di dalam array [ ]
    DATABASE_EKSKUL: {
        "PRAMUKA": [
            "https://i.ibb.co.com/VpMNL0ht/IMG-20260415-WA0043.jpg",
            "https://i.ibb.co.com/d0J8pk8d/IMG-20260416-155612.jpg"
        ],
        "PENCAK SILAT": [
            "https://i.ibb.co.com/zHWyG5dW/IMG-20260418-WA0009-1.jpg",
            
           [
               "https://i.ibb.co.com/zVrFvLMs/IMG-20260415-WA0011.jpg",
           
           [
               "https://i.ibb.co.com/qYgzJZC8/IMG-20260419-WA0002.jpg",
               
           ]]
        ],
        "TAHFIZ": [
            "https://i.ibb.co.com/1tRkshmC/IMG-20260416-WA0004.jpg",
        ],
        "HADROH": [
            "https://i.ibb.co.com/VpMNL0ht/IMG-20260415-WA0043.jpg"
        ]
    }
};

function loadAssets() {
    document.getElementById('logoSekolah').src = CONFIG_SEKOLAH.logoUrl;
    document.getElementById('footerLogo').src = CONFIG_SEKOLAH.logoUrl;
    document.getElementById('heroImage').src = CONFIG_SEKOLAH.heroImageUrl;
    document.getElementById('googleMapsIframe').src = CONFIG_SEKOLAH.googleMapsUrl;
    document.getElementById('imgProg1').src = CONFIG_SEKOLAH.fotoTahfidz;
    document.getElementById('imgProg2').src = CONFIG_SEKOLAH.fotoDigital;
    document.getElementById('imgProg3').src = CONFIG_SEKOLAH.fotoBilingual;

    // Aktifkan klik galeri pada badge ekskul
    initGalleryTrigger();
}

function initGalleryTrigger() {
    const badges = document.querySelectorAll('#ekskulList span');
    badges.forEach(badge => {
        badge.onclick = function() {
            const namaEkskul = this.innerText.trim();
            openGallery(namaEkskul);
        };
    });
}

function openGallery(nama) {
    const overlay = document.getElementById('galleryOverlay');
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const content = document.getElementById('galleryContent');

    title.innerText = "KEGIATAN " + nama;
    content.innerHTML = ""; // Bersihkan isi lama

    const images = CONFIG_SEKOLAH.DATABASE_EKSKUL[nama] || [];
    
    if (images.length === 0) {
        content.innerHTML = "<p class='col-span-full text-center py-10 text-gray-400'>Belum ada foto kegiatan.</p>";
    } else {
        images.forEach(imgUrl => {
            const imgHtml = `
                <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                    <img src="${imgUrl}" class="w-full h-40 object-cover hover:scale-110 transition duration-500">
                </div>
            `;
            content.innerHTML += imgHtml;
        });
    }

    overlay.classList.remove('hidden');
    setTimeout(() => { modal.classList.add('show-modal'); }, 10);
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show-modal');
    setTimeout(() => { document.getElementById('galleryOverlay').classList.add('hidden'); }, 300);
}

function openPPDB() {
    // Langsung buka Google Form di tab baru sesuai instruksi sebelumnya
    window.open(CONFIG_SEKOLAH.googleFormUrl, '_blank');
}

function closePPDB() {
    const modal = document.getElementById('ppdbModal');
    modal.classList.remove('show-modal');
    setTimeout(() => { document.getElementById('ppdbOverlay').classList.add('hidden'); }, 300);
}

document.getElementById('ppdbForm').onsubmit = function(e) {
    e.preventDefault();
    openPPDB();
};

window.onload = loadAssets;
