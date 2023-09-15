import CharacterImages from "./CharacterImages";
import Throttle from "../throttle/Throttle";

interface Position {
  x: number;
  y: number;
}

enum Direction {
  DOWN = 0,
  UP = 1,
  LEFT = 2,
  RIGHT = 3,
}

const SIZE = 128;

class Character {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private position: Position = { x: 0, y: 0 };
  private direction: number = Direction.DOWN;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.runAnimationFrame();

    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener("keydown", this.hadleArrowKeyDown);
  }

  removeEventListeners() {
    document.removeEventListener("keydown", this.hadleArrowKeyDown);
  }

  private runAnimationFrame() {
    this.draw();
    requestAnimationFrame(this.runAnimationFrame.bind(this));
  }

  private draw() {
    const { x, y } = this.position;
    // console.log("draw. position : ", this.position);
    // 현재 방향의 이미지를 가져옴
    const image = this.getImageByDirection(0, false);

    if (!this.ctx || !image) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(image, x, y, SIZE, SIZE);
  }

  private getImageByDirection(direction: number, isWalking: boolean) {
    const { manDown, manUp, manLeft, manRight } = CharacterImages;

    switch (direction) {
      case Direction.UP:
        return isWalking ? manLeft : manLeft;
      case Direction.DOWN:
        return isWalking ? manRight : manRight;
      case Direction.LEFT:
        return isWalking ? manLeft : manLeft;
      case Direction.RIGHT:
        return isWalking ? manRight : manRight;
      default:
        return null;
    }
  }

  hadleArrowKeyDown() {
    // 이동 거리
    const distance = SIZE;
    const ArrowKeys = [
      {
        code: "38",
        string: "ArrowUp",
        movement: { x: 0, y: -distance },
        isMoveable: () => this.position.y > 0,
      },
      {
        code: "40",
        string: "ArrowDown",
        movement: { x: 0, y: distance },
        isMoveable: () => this.position.y < this.canvas.height - SIZE,
      },
      {
        code: "39",
        string: "ArrowRight",
        movement: { x: distance, y: 0 },
        isMoveable: () => this.position.x < this.canvas.width - SIZE,
      },
      {
        code: "37",
        string: "ArrowLeft",
        movement: { x: -distance, y: 0 },
        isMoveable: () => this.position.x > 0,
      },
    ];

    const handler = Throttle((e: KeyboardEvent) => {
      for (let i = 0; i < ArrowKeys.length; i++) {
        const { code, string, movement, isMoveable } = ArrowKeys[i];
        if ([code.toString(), string].includes(e.key) && isMoveable()) {
          this.position.x += movement.x;
          this.position.y += movement.y;
        }
      }
    }, 500);

    return (e: KeyboardEvent) => handler(e);
  }
}

export default Character;
