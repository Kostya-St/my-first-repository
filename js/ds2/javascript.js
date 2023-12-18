let x = true, 
    result;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof x === "string") && typeof x ) {
  case "number":
    result = ('число');
    break;
  case "string":
    result= ('строка');
    break;
  case "boolean":
    result = ('логическое');
    break;
  default:
    result = ('Тип x не определён');
}
console.log(result);