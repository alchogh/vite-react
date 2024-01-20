import bird from "../../assets/bird.svg";
import cat from "../../assets/cat.svg";
import cow from "../../assets/cow.svg";
import dog from "../../assets/dog.svg";
import gator from "../../assets/gator.svg";
import heart from "../../assets/heart.svg";
import horse from "../../assets/horse.svg";

interface IconList {
  [key: string]: string;
  bird: string;
  cat: string;
  cow: string;
  dog: string;
  gator: string;
  heart: string;
  horse: string;
}

export const inconList: IconList = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};
