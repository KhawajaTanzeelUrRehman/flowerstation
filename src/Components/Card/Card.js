import React from 'react';
import style from './Card.module.css';
import arrow from "../../Images/Arrow 1.png"


const Card = (props) => {
    return (
        <div className={style.container}>
            <img className={style.image} src={props.image} alt="flower" />
            <div className={style.text}>
                <h3 className={style.heading}>{props.name}</h3>
                <p className={style.desc}>{props.desc}</p>
            </div>
            <div className={style.readmore}>
                <p>Read More</p>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

export default Card
