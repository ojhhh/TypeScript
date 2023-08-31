// interface는 객체의 구조를 정의하는 타입
interface IBlock {
  id: number;
  title: string;
  content: string;
  date: number;
  like: number;
  // hit? : ?는 옵셔널 체이닝으로 있어도 되고 없어도 됨
  hit?: number;
}

const Block: IBlock = {
  id: 1,
  title: "hello",
  content: "world",
  date: 20230831,
  like: 0,
  hit: 0,
};

// hit는 옵셔널 체이닝으로 설정되어있어 없어도 에러가 나지 않음
const Block2: IBlock = {
  id: 2,
  title: "hello",
  content: "world",
  date: 20230831,
  like: 0,
};

// // 추상
// // interface
// // class
// interface IProduct {
//   name: string;
//   price?: number;
// }

// // implements 키워드는 class의 구조가 만족하는지 체크
// class product implements IProduct {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
