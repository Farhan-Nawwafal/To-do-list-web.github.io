/*
Latihan 1: Pembuatan To-Do List

1. Buatlah struktur HTML dengan sebuah input teks dan tombol "Tambahkan".
2. Gaya elemen-elemen ini menggunakan CSS agar terlihat menarik.
3. Ketika tombol "Tambahkan" diklik, ambil nilai dari input teks.
4. Buat elemen baru (misalnya <li>) dengan nilai input.
5. Tambahkan elemen baru ke dalam daftar (misalnya, <ul>) sebagai item to-do

// fitur baru :
1. Hapus tugas
2. Tandai tugas sebagai selesai
*/
// 1. mencari total tugas
const totalTugas = document.querySelector("div.jumlah-tugas");
const pTotalTugas = totalTugas.querySelector("p");

const parentLi = document.querySelector("div.container-tugas > div.list-tugas > ul");
const jumlahLi = parentLi.getElementsByTagName("li");

pTotalTugas.innerHTML = `Jumlah tugas : ${jumlahLi.length}`;

// 2. seleksi class hapus tugas
const divHapusTugas = document.querySelector("div.container-tugas > div.hapus-tugas > ul");

// 3. seleksi class selesai tugas
const divSelesaiTugas = document.querySelector("div.container-tugas > div.selesai-tugas > ul");

function addTask() {

    // tanya user mau masukin berapa tugas
    const jumlahTugas = parseInt(prompt("Mau list berapa tugas ?"));
    // bikin kondisi kalo inputan bukan angka
    if (isNaN(jumlahTugas)) {
        alert(`Inputan harus berupa number!`);
        return;
    };

    // bikin loop untuk nama tugasnya
    for (let i = 1; i <= jumlahTugas; i++) {
        // bikin variable untuk inputan nama tugas
        const namaTugas = prompt(`Tugas ke-${i}`);
        
        // buat element li nya
        const li = document.createElement("li");
        const isiLi = document.createTextNode(namaTugas);
        li.appendChild(isiLi);

        // seleksi parent ulnya dulu
        const parentUl = document.querySelector("div.container-tugas > div.list-tugas > ul");
        parentUl.appendChild(li);

        // tampilkan total tugas
        pTotalTugas.innerHTML = `Jumlah tugas : ${jumlahLi.length}`;
    };
}

function removeTask() {
    // tanya user mau hapus tugas urutan ke berapo
    const nomorHapusTugas = parseInt(prompt("Mau hapus tugas urutan ke berapa ?"));
    // bikin kondisi kalo misalnya inpputan bukan berupa angka
    if (isNaN(nomorHapusTugas)) {
        alert(`Inputan harus berupa angka!`);
        return;
    }

    // bikin looping untuk search urutan tugasnya
    for (let i = 0; i < jumlahLi.length; i++) {
        if ( i === (nomorHapusTugas - 1)) {
            // pindahkan tugas tertentu ke div.hapus-tugas
            divHapusTugas.appendChild(jumlahLi[i]);
          
            // tampilkan total tugas
            pTotalTugas.innerHTML = `Jumlah tugas : ${jumlahLi.length}`;
            
            // return pop-up jika tugas ditemukam
            return alert(`Tugas dengan nomor ${nomorHapusTugas} berhasil dihapus`);
        };
    };
    // return pop-up jika tugas tidak ditemukan
    alert(`Tugas dengan nomor : ${nomorHapusTugas} tidak ada!`);
}

function clearTask() {
    // tanya user, mau clear tugas urutan ke berapa
    const nomorClearTugas = parseInt(prompt("Mau selesaikan tugas urutan ke berapa ?"));

    // buat kondisi jika yang dinput bukan angka 
    if (isNaN(nomorClearTugas)) {
        alert(`Inputan harus berupa number!`);
        return;
    };

    // buat looping untuk search tugasnya
    for (let i = 0; i < jumlahLi.length; i++) {
        if (i === (nomorClearTugas - 1)) {
            // pindahin tugasnya dari tugas awal --> tugas selesai
            divSelesaiTugas.appendChild(jumlahLi[i]);
            
            // tampilkan total tugas
            pTotalTugas.innerHTML = `Jumlah tugas : ${jumlahLi.length}`;
            
            return alert(`Tugas berhasil diselesaikan!`);
        }
    }
    return alert(`Tugas dengan nomor ${nomorClearTugas} tidak ada di daftar!`);
}