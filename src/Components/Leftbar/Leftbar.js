import React from 'react'
import style from './Leftbar.module.css'
import Card from '../Card/Card'
import flower1 from '../../Images/Rectangle 450.jpg'
import flower2 from '../../Images/Rectangle 451.jpg'
import flower3 from '../../Images/Rectangle 452.jpg'
import arrow from "../../Images/Arrow 2.png"

const Leftbar = () => {
  return (
    <div className={style.container}>
      <h3 className={style.heading}>Keep Up With Flower Station</h3>
      <p className={style.readall}>Read all articles</p>
      <div className={style.arrow}>
        <img src={arrow} alt="arrow" />
      </div>

      <Card image={flower1} name="Boo-Tiful Flower Ideas To Incorporate Into This Halloween" desc="Halloween is perhaps the most anticipated day of October." />
      <Card image={flower2} name="Best Winter Wedding Bouquet Ideas" desc="Regardless of how glamorous or expensive your wedding dress is, your bridal look is not complete without a stunning bridal bouquet! Flowers are naturally beautiful and coming in." />
      <Card image={flower3} name="15 Atunning Autumn Wedding Flower Bouquets" desc="Flowers are one of the most fundamental elements to a wedding, not only serving as the ultimate bridal accessory, but also being one of the main decorations of the wedding itsel." />
    </div>
  )
}

export default Leftbar
