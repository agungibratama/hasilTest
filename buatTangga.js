function tangga(tinggi) {
  for (let i = 1; i <= tinggi; i++) {
    let baris = '';

    if (i === 1) {
      baris = '*';
    } else {
      baris = '/';
      for (let j = 1; j <= i; j++) {
        baris += '*';
      }
      baris += '\\';
    }
    console.log(baris);
  }
}

tangga(5);
