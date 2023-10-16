import React, { useState } from "react";
import { Images } from "./Components/Images";
import { Drink } from "./Components/Types";
import { CustomModal } from "./Components/CustomModal";
import Logo from "./Assets/Images/logo.svg";
import drinksJson from "./Assets/drinks.json";
import "./App.css";

function App() {
  // Drinks object from drinks.json
  const drinks: Drink[] = drinksJson.drinks;

  // Selected drink when popping up modal
  const [selectedDrink, setSelectedDrink] = useState<Drink>(drinks[0]);

  // Controls the modal state
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="app">
      {/* Logo */}
      <div className="app-logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Header */}
      <header className="app-header">
        <h1 className="title">Welcome Holiday Text</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          odio ac ante malesuada feugiat. Mauris pretium, nulla ac imperdiet
          suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien
          gravida lacus.
        </p>
      </header>

      {/* Body - Drink Cards */}
      <section className="app-body">
        <Images
          drinks={drinks}
          setSelectedDrink={setSelectedDrink}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </section>

      {/* Change what is in the modal based on which image is clicked */}
      <CustomModal
        selectedDrink={selectedDrink}
        isOpen={openModal}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}

export default App;
