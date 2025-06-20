function hitungTinggi(tinggiAwal, lamaHari, pertumbuhan) {
  let tinggi = tinggiAwal;
  for (let i = 0; i < lamaHari; i++) {
    tinggi = tinggi * (1 + pertumbuhan);
  }
  return 'Tinggi akhir:' + tinggi.toFixed(2);
}

console.log(hitungTinggi(200, 5, 0.05));
console.log(hitungTinggi(250, 2, 0.02));
