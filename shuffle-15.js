import clipboardy from 'clipboardy';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < a.length; i++) {
  const idx = Math.floor(Math.random() * (a.length - i) + i);
  [a[i], a[idx]] = [a[idx], a[i]];
}

clipboardy.writeSync(a.join('\n'));
console.log(a.join('\n'));