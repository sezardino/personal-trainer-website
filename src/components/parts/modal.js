import React, { useState, useEffect } from "react";
import Portal from "./portal";

const Modal = ({ data, show, closeHandler }) => {
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "initial";
    }, [show]);

    return (
        <Portal>
            <div className={`modal ${show ? "modal--show" : ""}`}>
                <div className="modal__overflow" onClick={closeHandler}></div>
                <div className="modal__inner">
                    <h3 className="modal__title">{data?.name}</h3>
                    <img
                        src={data?.image.childImageSharp.fluid.src}
                        alt={data?.name}
                        className="modal__img"
                    />
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
