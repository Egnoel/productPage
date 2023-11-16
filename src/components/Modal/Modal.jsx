import React from "react";
import "./modal.css";
import PropTypes from "prop-types";
import product1 from "../../assets/images/image-product-1.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product4 from "../../assets/images/image-product-4.jpg";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import CloseIcon from "../Icons/CloseIcon";
import ArrowIcon from "../Icons/ArrowIcon";

const Modal = ({ setOpenModal, openModal }) => {
  return (
    <div className="modal-wrapper">
      <div onClick={() => setOpenModal(false)} className="close-modal">
        <CloseIcon className="close-icon" />
      </div>
      <div className="main-product-modal">
        <div className="arrow prev">
          <ArrowIcon className="arrow-icon" width="8" heigth="8" />
        </div>
        <img src={product1} alt="product1" className="product" />
        <div className="arrow next">
          <ArrowIcon className="arrow-icon arrow-next" width="8" heigth="8" />
        </div>
      </div>
      <div className="thumbnails">
        <div className="thumb-modal active-modal">
          <img
            src={thumbnail1}
            alt="product2"
            className="thumbs-modal active-thumb"
          />
        </div>
        <div className="thumb-modal">
          <img src={thumbnail2} alt="product2" className="thumbs-modal" />
        </div>
        <div className="thumb-modal">
          <img src={thumbnail3} alt="product2" className="thumbs-modal" />
        </div>
        <div className="thumb-modal">
          <img src={thumbnail4} alt="product2" className="thumbs-modal" />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default Modal;
