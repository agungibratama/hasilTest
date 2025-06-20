function produk(prices) {
  // Menghitung total harga dengan looping
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  // Menentukan diskon dan bonus
  let discount = 0;
  let bonus = '';

  if (total > 400000) {
    discount = total * 0.1;
    bonus = 'Ransel';
  } else if (total > 200000) {
    discount = total * 0.07;
    bonus = 'Payung';
  } else if (total > 70000) {
    discount = total * 0.05;
    bonus = 'Topi';
  }
  let finalPrice = total - discount;
  return `Total Harga = ${total.toFixed(3).replace('.', ',')} Diskon = ${discount.toFixed(3).replace('.', ',')} Bonus = ${bonus} Harga Akhir = ${finalPrice.toFixed(3).replace('.', ',')}`;
}

console.log(produk([2000, 30000, 50000]));
