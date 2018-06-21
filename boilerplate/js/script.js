var a, b, c, d, e, f;
a = parseInt(prompt("Сколько у вас с собой денег?"));
b = parseInt(prompt("Сколько вы купили яблок?"));
c = parseInt(prompt("Сколько вы купили батонов?"));
d = parseInt(prompt("Сколько стоит одно яблоко?")) * b;
e = parseInt(prompt("Сколько стоит один батон?")) * c;
f = a > (e + d);
f;
