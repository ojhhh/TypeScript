function generateLottoNumbers(): number[] {
  const numbers: number[] = [];
  for (let i = 1; i <= 45; i++) {
    numbers.push(i);
  }
  numbers.sort(() => Math.random() - 0.5);

  return numbers.slice(0, 6);
}

const lottoNumbers = generateLottoNumbers();
console.log(lottoNumbers);
