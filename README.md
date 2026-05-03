# AXIS – Personal Portfolio & Blog

Sebuah website portofolio dan blog pribadi yang responsif, modern, dan interaktif. Proyek ini dirancang khusus untuk kreator multidisiplin—seperti programmer, penulis, atau sutradara—untuk memamerkan proyek, karya tulis, dan pengalaman mereka dalam satu antarmuka yang elegan.

---

## 🌟 Fitur Utama

Website ini dibangun dengan fokus pada performa dan pengalaman pengguna (UX), mencakup fitur-fitur berikut:

* **Hero Section Dinamis**: Menampilkan efek teks mengetik (*typing effect*) secara otomatis untuk menyorot berbagai keahlian (Programmer, Novelist, Director).
* **Portofolio dengan Filter**: Pengunjung dapat memfilter karya berdasarkan kategori (Programming, Writing, Directing & Events) secara langsung tanpa memuat ulang halaman.
* **Sistem Blog Terintegrasi (Tanpa Backend)**: 
    * Artikel dirender secara dinamis menggunakan data dari JavaScript.
    * Dilengkapi dengan *Reading Progress Bar* di bagian atas layar.
    * Menampilkan estimasi waktu baca, tanggal, dan kategori.
    * Fitur rekomendasi "More Articles" di bagian bawah postingan.
    * Tombol "Copy Link" untuk membagikan artikel.
* **Animasi Scroll (Fade-in)**: Elemen-elemen akan muncul secara halus (*fade-in*) saat pengguna menggulir halaman ke bawah berkat `IntersectionObserver`.
* **Formulir Kontak Responsif**: Formulir kontak interaktif yang memunculkan notifikasi "Toast" ketika pesan berhasil dikirim.
* **Desain Responsif**: Tampilan yang menyesuaikan dengan sempurna di perangkat desktop, tablet, maupun mobile, lengkap dengan menu *hamburger* untuk layar kecil.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi *front-end* murni tanpa memerlukan proses *build* atau server backend yang kompleks.

| Teknologi | Deskripsi |
| :--- | :--- |
| **HTML5** | Struktur semantik halaman. |
| **CSS3** | Variabel CSS (Custom Properties), Flexbox, CSS Grid, dan keyframe animation. |
| **Tailwind CSS** | Digunakan via CDN (`2.2.19`) untuk utilitas dasar (*reset* dan *scroll-smooth*). |
| **Vanilla JavaScript** | Logika DOM manipulation, filter portofolio, efek *typing*, dan render blog. |

---

## 📂 Struktur File

Proyek ini terdiri dari tiga file utama yang saling terhubung:

* `index.html` — Berisi kerangka utama halaman, metadata, navigasi, bagian About, bagian Contact, dan template *modal/overlay* untuk pembaca blog.
* `style.css` — Berisi semua gaya khusus (custom styling), konfigurasi variabel warna tema (mode gelap dengan aksen ungu), animasi, dan penyesuaian *media queries* untuk responsivitas.
* `script.js` — Mengelola seluruh interaktivitas website. Di dalamnya terdapat *array* `posts` yang berfungsi sebagai "database" artikel blog, serta fungsi-fungsi logika UI.

---

## 🚀 Cara Menjalankan secara Lokal

Karena website ini dibangun murni menggunakan HTML, CSS, dan JS dasar, Anda tidak memerlukan instalasi *package* atau server lokal (seperti Node.js) untuk menjalankannya.

1.  Unduh atau *clone* seluruh file ke dalam satu folder di komputer Anda.
2.  Pastikan `index.html`, `style.css`, dan `script.js` berada di direktori yang sama.
3.  Klik dua kali pada file `index.html` untuk membukanya langsung di *browser* pilihan Anda (Chrome, Firefox, Safari, dll).

> **Catatan:** Jika Anda ingin melakukan modifikasi secara *real-time*, disarankan menggunakan ekstensi seperti **Live Server** di Visual Studio Code.

---

## ✏️ Cara Mengkustomisasi Konten

### 1. Mengubah Profil dan Teks
Buka file `index.html` dan cari bagian tag teks (misalnya `<h1 class="hero-title">`, `<p class="hero-desc">`, dll) lalu ubah teksnya sesuai dengan identitas Anda.

### 2. Menambah atau Mengubah Artikel Blog
Buka file `script.js`. Di bagian paling atas, Anda akan menemukan *array* bernama `posts`. Anda dapat menambahkan objek baru ke dalam *array* ini dengan format berikut:

```javascript
{
  id: 3, // Pastikan ID berurutan dan unik
  slug: 'judul-url-artikel',
  title: 'Judul Artikel Anda',
  category: 'Kategori',
  date: 'Tanggal Publikasi',
  readTime: 'X min read',
  image: 'URL_Gambar_Thumbnail',
  excerpt: 'Ringkasan singkat artikel...',
  content: `
    <p>Gunakan tag HTML dasar seperti p, h2, ul, li, dan blockquote di sini.</p>
  `
}