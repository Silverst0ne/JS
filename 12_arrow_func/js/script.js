const haveEnough = (money, apple, bread) => {
  if (money > (apple + bread)) {
    return "Вам хватает денег на покупки";
  }
  else {
    return "Вам не хватает денег";
  }
}

a = parseInt(prompt("Сколько у вас с собой денег?"));
b = parseInt(prompt("Сколько вы купили яблок?"));
c = parseInt(prompt("Сколько вы купили батонов?"));
d = parseInt(prompt("Сколько стоит одно яблоко?")) * b;
e = parseInt(prompt("Сколько стоит один батон?")) * c;

haveEnough(a, d, e);
