function solution(noAkun, nominal) {
  let akunUnik = [];
  for (let i = 0; i < noAkun.length; i++) {
    let sudahAda = false;
    for (let j = 0; j < akunUnik.length; j++) {
      if (akunUnik[j] === noAkun[i]) {
        sudahAda = true;
        break;
      }
    }
    if (!sudahAda) {
      akunUnik.push(noAkun[i]);
    }
  }

  let hasil = [];
  let totalDebit = 0;
  let totalKredit = 0;

  for (let i = 0; i < akunUnik.length; i++) {
    let akun = akunUnik[i];
    let debit = 0;
    let kredit = 0;

    for (let j = 0; j < noAkun.length; j++) {
      if (noAkun[j] === akun) {
        if (j === 0) {
          debit += nominal[j];
        } else {
          kredit += nominal[j];
        }
      }
    }

    totalDebit += debit;
    totalKredit += kredit;
    hasil.push([akun, debit, kredit]);
  }

  console.log('#Akun # Debit # Kredit');
  for (let i = 0; i < hasil.length; i++) {
    console.log(`${hasil[i][0]}-${hasil[i][1]}-${hasil[i][2]}`);
  }

  let status = totalDebit === totalKredit ? 'Balance' : 'Not Balance';
  console.log(`#Total #${totalDebit} #${totalKredit} (${status})`);
}

// Tes kasus 1
let noAkun1 = [111, 211, 201];
let nominal1 = [200000, 50000, 150000];
solution(noAkun1, nominal1);

// Tes kasus 2
let noAkun2 = [111, 201];
let nominal2 = [100000, 120000];
solution(noAkun2, nominal2);
