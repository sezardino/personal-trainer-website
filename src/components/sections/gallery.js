import React, { useState } from "react";
import Modal from "../parts/modal";
import { stringFormatting } from "../../utils";

const Gallery = ({ data }) => {
    const { list, title } = data;
    const [modal, setModal] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const itemClickHandler = (item) => {
        setModal(item);
        setModalShow(true);
    };

    const closeHandler = () => {
        setModal(null);
        setModalShow(false);
    };

    return (
        <section className="gallery">
            <div className="gallery__container container">
                <h2 className="gallery__title">
                <span className="gallery__title-frst">
                {stringFormatting.getFirstLetters(title)}
                </span>
                {stringFormatting.deleteFirstLetters(title)}</h2>
                <ul className="gallery__list">
                    {list.map((item) => {
                        return (
                            <li
                                className="gallery__item"
                                key={item.name}
                                onClick={() => itemClickHandler(item)}
                            >
                                {/* <h3 className="gallery__item-title">
                                    {item.name}
                                </h3> */}
                                <img
                                    src={item.image.childImageSharp.fluid.src}
                                    alt={item.name}
                                    className="gallery__item-image"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Modal data={modal} show={modalShow} closeHandler={closeHandler} />
        </section>
    );
};

export default Gallery;
