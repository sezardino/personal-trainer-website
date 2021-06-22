import React from "react";
import { Link } from "gatsby";

const Offer = ({ data }) => {
    const { button, description, list, title } = data;
    return (
        <section className="offer">
            <div className="offer__container container">
                <h2 className="hidden">{title}</h2>
                <div className="offer__wrapper">
                    <ul className="offer__list">
                        {list.map((item) => {
                            console.log(item);
                            return (
                                <li className="offer__item" key={item.name}>
                                    <h3 className="offer__item-title">
                                        {item.name}
                                    </h3>
                                    <ul className="offer__sub-list">
                                        {item.list.map((subItem, index) => (
                                            <li
                                                className="offer__sub-item"
                                                key={index + subItem}
                                            >
                                                {subItem.item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="offer__item-price">
                                        {item.price}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="offer__description">{description}</p>
                    <Link to={button.link} className="button button--primary offer__button">
                        {button.label}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Offer;
