const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count ; i += 1){
  rows.push(character.repeat(count += i))
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}
console.log(character)
