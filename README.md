# **Laporan Praktikum**

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720223|
| Nama |  Sukma Bagus Wahasdwika |
| Kelas | TI - 3D | 

## **Langkah-langkah Praktikum**
### Praktikum A : Persiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan
menjalankan perintah berikut di terminal atau command prompt:

    ![alt text](img/npm-node.png)

2. Buat direktori baru untuk proyek Next.js Anda
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan

    ![alt text](img/createnextjs.png)

    ![alt text](<img/npmrundev.png>)

    ![alt text](img/browser.png)


### Praktikum B :  Membuat Halaman dengan Server-Side Rendering (SSR) 
1. Buka file pages/index.tsx di text editor Anda. 
2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana: 

    ![alt text](<img/kodeSSR.png>)

3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!". 

    ![alt text](<img/browserssr.png>)

### Praktikum C : Menggunakan Static Site Generation (SSG) 
1. Buat file baru di direktori pages dengan nama blog.js. 
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG: 

    ![alt text](<img/kodeSSG.png>)
    
3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal. 

    ![alt text](<img/browserssg.png>)


### Praktikum D : Menggunakan Dynamic Routes 
1. Buat direktori baru di pages dengan nama blog. 
2. Buat file di dalam direktori blog dengan nama [slug].js 
3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug: 

    ![alt text](<img/kodeDynamic.png>)

4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL. 

    ![alt text](<img/browdynamic.png>)


### Praktikum E : Menggunakan API Routes 
1. Pastikan terdapat direktori di pages dengan nama api. 
2. Buat file di dalam direktori api dengan nama products.js. 
3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk: 

    ![alt text](<img/kodeAPII.png>)

4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:

    ![alt text](<img/kodeProducts.png>)

5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route.

    ![alt text](<img/browserapi.png>)

### Praktikum F : Menggunakan Link Component
1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke halaman lain:

    ![alt text](<img/modifIndex.png>)

2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":

    ![alt text](<img/kodeAbout.png>)

3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang.

    ![alt text](<img/browttgkami.png>)

    ![alt text](<img/browIsittgkmi.png>)

### Tugas
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users.
   
   **pages/api/users.js**
   
   ![alt text](<img/tugas1api.png>)

   **pages/users.js**

   ![alt text](<img/tugas1pages.png>)

   **Tampilan Browser**
   
   ![alt text](<img/daftarpengguna.png>)
   
2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.
   
   **pages/api/users/[id].js**

    ![alt text](<img/tugas2api.png>)
   
   **pages/users/[id].js**

    ![alt text](<img/tugas2pages.png>)

   **Tampilan Browser**

    ![alt text](<img/detailpengguna.png>)
   
3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.

   Daftar di https://openweathermap.org/api agar mendapatkan API Key.

   Buat file .env.local di root proyek nextjs, dan masukkan key api dari website https://openweathermap.org/api

   ![alt text](<img/env.png>)

   **pages/api/weather.js**

   ![alt text](<img/tugas3api.png>)

   **pages/weather.js**

   ![alt text](<img/tugas3pages.png>)

   **Tampilan Browser**

   ![alt text](<img/infocuaca.png>)

 
