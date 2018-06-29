class Custumer {
  constructor(name) {
    this.name = name;
  }
  buy() {
    console.log('Куплено');
  }
}

class childCustumer extends Custumer{
  getPresent() {
    console.log('Шарик в подарок');
  }
}

const cust = new Custumer('Egor');
console.log(cust);
console.log(cust.buy());

const chcust = new childCustumer('Eva');
console.log(chcust);
console.log(chcust.buy());
console.log(chcust.getPresent());
