// 할인
interface Discount {
  // 함수만 선언
  getDiscountPrice(price: number): number;
}

// 가격만 수정하는 할인
class FlatDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDiscountPrice(price: number): number {
    return price - this.amount;
  }
}

// 할인율로 가격 수정
class PercentDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  getDiscountPrice(price: number): number {
    return price * (1 - this.amount / 100);
  }
}

// 가격, 할인율로 가격 수정
class FlatPercentDiscount implements Discount {
  private flatAmount: number;
  private percent: number;
  constructor(flatAmount: number, percent: number) {
    this.flatAmount = flatAmount;
    this.percent = percent;
  }

  getDiscountPrice(price: number): number {
    const flatDiscountAmount = price - this.flatAmount;
    return flatDiscountAmount * (1 - this.percent / 100);
  }
}

class Products {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

class ProductDiscount {
  private product: Products;
  private discount: Discount;
  constructor(product: Products, discount: Discount) {
    this.product = product;
    this.discount = discount;
  }

  getPrice(): void {
    console.log(this.discount.getDiscountPrice(this.product.getPrice()));
  }
}

const _product = new Products("mac", 100000);
const _product2 = new Products("window", 10000);

const productDiscount = new PercentDiscount(10);
const productDiscount2 = new FlatDiscount(1000);
const productDiscount3 = new FlatPercentDiscount(1000, 10);

// 10% 할인된 가격으로 출력
const productWithDiscount = new ProductDiscount(_product, productDiscount);
productWithDiscount.getPrice();

// 1000원 할인 후 10% 할인된 가격으로 출력
const productWithDiscount2 = new ProductDiscount(_product2, productDiscount3);
productWithDiscount2.getPrice();
