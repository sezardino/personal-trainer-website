import React, { useState, useEffect } from "react";
import Loader from "./loader";
import Portal from "./portal";

const Modal = ({ data, show, closeHandler }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        document.body.style.overflow = show ? "hidden" : "initial";
    }, [show]);

    return (
        <Portal>
            <div className={`modal ${show ? "modal--show" : ""}`}>
                <div className="modal__overflow" onClick={closeHandler}></div>
                <div className="modal__inner">
                    {loading && <Loader />}
                    <img
                        src={data?.image.childImageSharp.fluid.src}
                        alt={data?.name}
                        className="modal__img"
                        title={data?.name}
                        onLoad={() => setLoading(false)}
                    />
                    <h3 className="modal__title">{data?.name}</h3>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
