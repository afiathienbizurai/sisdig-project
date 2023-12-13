const tabel_kebenaran = [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1]
];
const biner = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 1]
];
const inputan = "WXYZ";
const outputan = "abcdefg";

function display_seven_segment(angka) {
    // Menampilkan Angka Digital
    for (let index = 0; index < 7; index++) {
        let segment = document.getElementById(outputan[index]);
        
        if (tabel_kebenaran[angka][index]) {
            segment.style.backgroundColor = "white";
        } else {
            segment.style.backgroundColor = "";
        }
    }

    // Mengganti tabel kebenaran 
    for (let index = 0; index < 4; index++) {
        let id = "nilaiInput" + inputan[index];
        let nilai = document.getElementById(id);

        nilai.textContent = biner[angka][index];
    }

    for (let index = 0; index < 7; index++) {
        let id = "nilaiOutput_" + outputan[index];
        console.log(id);
        let nilai = document.getElementById(id);

        nilai.textContent = tabel_kebenaran[angka][index];
    }
}