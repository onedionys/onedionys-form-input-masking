<?php

ini_set('max_execution_time', 0);

// Kalimat yang akan ditambahkan ke README.md
$kalimat = '-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**';
shell_exec('git add . && git commit -m "chore: update readme to fill block activity" && git push');

// Buka file README.md untuk ditulis
// $file = fopen("README.md", "a") or die("Tidak bisa membuka file README.md!");

// // Tulis setiap karakter dari kalimat ke dalam file README.md
// for ($i = 0; $i < strlen($kalimat); $i++) {
//     fwrite($file, $kalimat[$i]);

//     shell_exec('git add . && git commit -m "chore: update readme to fill block activity" && git push');
// }

// // Tutup file README.md
// fclose($file);

echo "Kalimat berhasil ditambahkan ke README.md.";

?>
