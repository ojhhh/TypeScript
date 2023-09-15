import manDown from "@images/char_walk_left.gif";
import manUp from "@images/char_walk_left.gif";
import manLeft from "@images/char_walk_left.gif";
import manRight from "@images/char_walk_left.gif";

const init: { [key: string]: HTMLImageElement } = {};
const imageSrc = {
  manDown,
  manUp,
  manLeft,
  manRight,
};

const CharacterImages = Object.entries(imageSrc).reduce(
  (images, [key, src]) => {
    const image = new Image();
    image.src = src;
    images[key] = image;
    return images;
  },
  init
);

export default CharacterImages;
