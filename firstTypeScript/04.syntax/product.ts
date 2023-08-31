// class 사용
// 유지보수를 편하게 하기 위해 사용

// 상품 구조 정의
interface IProduct {
  name: string;
  price: number;
}

// private : 접근 불가 키워드로 직접 참조가 되지 않는 값
class Product {
  private name: string;
  private price: number;
  private discountAmount: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.discountAmount = 0;
  }
  // private 키워드를 사용했기때문에 직접 참조가 불가하여 get메소드를 사용하여 호출
  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price - this.discountAmount;
  }

  getProduct() {
    return { name: this.name, price: this.getPrice() };
  }

  // 할인가 조정
  // set 메소드를 활용하여 할인가 조정
  setDiscountAmount(amount: number): void {
    this.discountAmount = amount;
  }
}

const product = new Product("블록", 1000);
product.setDiscountAmount(200);
console.log(product.getProduct());
