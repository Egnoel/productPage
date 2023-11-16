import React, { useState } from "react";
import "./left.css";
import product1 from "../../assets/images/image-product-1.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product4 from "../../assets/images/image-product-4.jpg";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import Modal from "../Modal/Modal";
import ArrowIcon from "../Icons/ArrowIcon";

const LeftSide = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="left">
      <div className="main-product" onClick={() => setOpenModal(true)}>
        <div className="arrow-left prev-left">
          <ArrowIcon className="arrow-icon" width="8" heigth="8" />
        </div>
        <img src={product1} alt="product1" className="product" />
        <div className="arrow next-left">
          <ArrowIcon className="arrow-icon arrow-next" width="8" heigth="8" />
        </div>
      </div>
      <div className="thumbnails">
        <img src={thumbnail1} alt="product2" className="thumbs active" />
        <img src={thumbnail2} alt="product2" className="thumbs" />
        <img src={thumbnail3} alt="product2" className="thumbs" />
        <img src={thumbnail4} alt="product2" className="thumbs" />
      </div>
      {openModal && (
        <div className="modal">
          <Modal setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      )}
    </div>
  );
};

export default LeftSide;
