/**
 * ============================================================
 * PUSAT PENGATURAN DATA & FOTO (GANTI DI SINI)
 * ============================================================
 * Anda cukup mengganti link di dalam tanda kutip ("") 
 * untuk merubah tampilan website Anda.
 */

const CONFIG_SEKOLAH = {
    // Identitas & Kontak
    waAdmin: "6281280518231",
    logoUrl: "https://i.ibb.co.com/Pv1w9gzy/IMG-20260416-WA0001-11zon.jpg",
    
    // Lokasi (Ambil dari Google Maps -> Share -> Embed a Map -> Ambil link di dalam src="")
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126934.56634917176!2d106.135552!3d-6.1702144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4221a00b17d2a9%3A0x96d21a1f14106cd7!2sPAUD%20ISTIQOMAH%20Kepuh%20Ds.Sindangheula%20Kec.Pabuaran!5e0!3m2!1sid!2sid!4v1776331380210!5m2!1sid!2sid",

    // Banner Utama (Hero)
    heroImageUrl: "https://i.ibb.co.com/d0J8pk8d/IMG-20260416-155612.jpg",
    // Foto Program Unggulan
    fotoTahfidz: "https://i.ibb.co.com/VpMNL0ht/IMG-20260415-WA0043.jpg",
    fotoDigital: "https://i.ibb.co.com/VpMNL0ht/IMG-20260415-WA0043.jpg",
    fotoBilingual: "https://i.ibb.co.com/V0gd5JC3/1776330359364.png",
};

/**
 * ============================================================
 * LOGIKA SISTEM (JANGAN DIUBAH)
 * ============================================================
 */

function loadAssets() {
    // Muat Identitas
    document.getElementById('logoSekolah').src = CONFIG_SEKOLAH.logoUrl;
    document.getElementById('footerLogo').src = CONFIG_SEKOLAH.logoUrl;
    document.getElementById('heroImage').src = CONFIG_SEKOLAH.heroImageUrl;
    
    // Muat Maps
    document.getElementById('googleMapsIframe').src = CONFIG_SEKOLAH.googleMapsUrl;
    
    // Muat Foto Program
    document.getElementById('imgProg1').src = CONFIG_SEKOLAH.fotoTahfidz;
    document.getElementById('imgProg2').src = CONFIG_SEKOLAH.fotoDigital;
    document.getElementById('imgProg3').src = CONFIG_SEKOLAH.fotoBilingual;
}

function openPPDB() {
    const overlay = document.getElementById('ppdbOverlay');
    const modal = document.getElementById('ppdbModal');
    overlay.classList.remove('hidden');
    setTimeout(() => { modal.classList.add('show-modal'); }, 10);
}

function closePPDB() {
    const modal = document.getElementById('ppdbModal');
    modal.classList.remove('show-modal');
    setTimeout(() => { document.getElementById('ppdbOverlay').classList.add('hidden'); }, 300);
}

document.getElementById('ppdbForm').onsubmit = function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nisn = document.getElementById('nisn').value;
    const asal = document.getElementById('asal').value;
    const alamat = document.getElementById('alamat').value;
    
    const checkFile = (id) => document.getElementById(id).files.length > 0 ? "✅ TERSEDIA" : "❌ BELUM ADA";

    const s_foto = checkFile('fotoSiswa');
    const s_kk = checkFile('fotoKK');
    const s_ijazah = checkFile('fotoIjazah');

    const pesan = 
    `*PENDAFTARAN SISWA BARU MTs TERPADU*%0A` +
    `--------------------------------------%0A` +
    `*PROFIL CALON SISWA*%0A` +
    `Nama Lengkap : ${nama}%0A` +
    `NISN : ${nisn}%0A` +
    `Asal Sekolah : ${asal}%0A` +
    `Alamat Domisili : ${alamat}%0A%0A` +
    `*STATUS DOKUMEN*%0A` +
    `- Pas Foto (Merah): ${s_foto}%0A` +
    `- Kartu Keluarga: ${s_kk}%0A` +
    `- Ijazah / SKL: ${s_ijazah}%0A` +
    `--------------------------------------%0A` +
    `_Saya telah mengisi formulir via website. Mohon petunjuk selanjutnya._`;

    window.open(`https://wa.me/${CONFIG_SEKOLAH.waAdmin}?text=${pesan}`, '_blank');
};

window.onload = loadAssets;