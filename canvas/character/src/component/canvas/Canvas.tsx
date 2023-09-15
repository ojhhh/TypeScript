import React, { useEffect } from "react";
import { Wrapper } from "./Canvas.styled";
import useCanvas from "./useCanvas";
import mapBackground from "@images/free.png";
import Character from "../character/Character";

const WIDTH = 1000;
const HEIGHT = 700;

const Canvas = () => {
  let character: Character | null = null;
  const canvasRef = useCanvas((canvas) => {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.background = `url(${mapBackground})`;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

    character = new Character(canvas);
    if (character) {
      document.addEventListener("keydown", character.hadleArrowKeyDown());
    }
  });

  // 언마운트시 이벤트 바인딩 해제
  useEffect(() => {
    return () => {
      character &&
        document.removeEventListener("keydown", character.hadleArrowKeyDown());
    };
  }, []);

  return (
    <Wrapper>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Canvas;
