const result = +prompt('Введите число')
if (typeof +result !== 'number') {
} else if (isNaN(result % 2)) {
  console.log ('Упс, кажется, вы ошиблись')
} else if (result % 2 === 0) {
  console.log ('Число четное')
} else {
  console.log ('число нечетное')
}
