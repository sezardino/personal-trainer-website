import React from "react";
import { stringFormatting } from "../../utils";

const Services = ({ data }) => {
    const { title, list } = data;
    return (
        <section className="services">
            <div className="container services__container">
                <h2 className="services__title">
                    {stringFormatting.getFirstWord(title)}{" "}
                    <span className="services__title-second">
                        {stringFormatting.getLastWord(title)}
                    </span>
                </h2>
                <ul className="services__list">
                    {list.map((item, index) => (
                        <li className="services__item" key={item.name + index}>
                            <div className="services__img-wrapper">
                                <img
                                    src={item.image.publicURL}
                                    alt={item.name}
                                    className="services__item-img"
                                />
                            </div>
                            <h3 className="hidden">{item.name}</h3>
                            <p className="services__item-text">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;
