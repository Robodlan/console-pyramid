const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count ; i += 1){
  rows.push(character.repeat(count += i))
}
console.log(character)
