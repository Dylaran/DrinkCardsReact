import React from "react";
import { Drink } from "./Types";
import Modal from "react-modal";
import ExitIcon from "../Assets/Images/exit_icon.svg";
import "./CustomModal.css";

type CustomModalProps = {
  selectedDrink: Drink;
  isOpen: boolean;
  closeModal: () => void;
};

export const CustomModal = (props: CustomModalProps) => {
  const { selectedDrink, isOpen, closeModal } = props;

  return (
    <>
      {isOpen && (
        <div className="exit-icon" data-testid="exit-icon">
          <img src={ExitIcon} alt="Close" onClick={closeModal} />
        </div>
      )}
      <Modal
        isOpen={isOpen}
        // onRequestClose={closeModal}
        className="modal"
        ariaHideApp={false}
        overlayClassName="modal-overlay"
      >
        {/* Title */}
        <h1 className="modal-title">{selectedDrink.name}</h1>

        {/* Ingredients */}
        <div className="modal-section-title">Ingredients</div>
        <ul className="ingredients-list">
          {selectedDrink.ingredients.map((ingredient, index) => (
            <li key={index} style={{ marginBottom: 5 }}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="section-break" />

        {/* How to prepare */}
        <div className="modal-section-title">How to prepare</div>
        <div className="prepare-section">
          {selectedDrink.steps.map((step, index) => (
            <div className="prepare-pair" key={index}>
              <div className="prepare-left">STEP {index + 1}</div>
              <div>{step}</div>
            </div>
          ))}
        </div>
        <div className="section-break" />

        {/* Make it a mocktail */}
        <div className="modal-section-title">Make it a mocktail</div>
        <p className="mocktail-text">{selectedDrink.mocktail}</p>
        <div className="section-break" />

        {/* Glass recommendation */}
        <div className="modal-section-title">Glass recommendation</div>
        <p className="glass-text">{selectedDrink.glassware}</p>
      </Modal>
    </>
  );
};
