import React, { useState } from "react";
import { Drink } from "./Types";
import "./Images.css";

type ImagesProps = {
  drinks: Drink[];
  setSelectedDrink: React.Dispatch<React.SetStateAction<Drink>>;
  onClick: () => void;
};

// Images panel
export const Images = (props: ImagesProps) => {
  const { drinks, setSelectedDrink, onClick } = props;
  return (
    <div className="images-panel">
      {drinks.map((drink, index) => (
        <Image
          key={index}
          className={"image"}
          drink={drink}
          width={240}
          setSelectedDrink={setSelectedDrink}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

// Property from each image, propped in from drinks object
type ImageProps = {
  className: string;
  drink: Drink;
  width: number;
  setSelectedDrink: React.Dispatch<React.SetStateAction<Drink>>;
  onClick: () => void;
};

// Each image component in the images panel
const Image = (props: ImageProps) => {
  const { className, drink, width, setSelectedDrink, onClick } = props;
  // Show front image by default
  const [imageShown, setImageShown] = useState<string>(drink.images.front);
  const [cardFront, setCardFront] = useState<boolean>(true);

  return (
    <img
      key={drink.id}
      data-testid={drink.id}
      className={className}
      src={imageShown}
      alt={cardFront ? drink.name + " Front" : drink.name + " Back"}
      width={width}
      onMouseOver={() => {
        // Show back image
        setCardFront(false);
        setImageShown(drink.images.back);
      }}
      onMouseLeave={() => {
        // Show front image
        setCardFront(true);
        setImageShown(drink.images.front);
      }}
      onClick={() => {
        // Lifting state up to the parent
        onClick();
        setSelectedDrink(drink);
      }}
    />
  );
};
