import React from 'react'
import style from './Rightbar.module.css'

const Rightbar = () => {
    return (
        <div className={style.container}>
            <h3 className={style.heading}>Flowers</h3>
            <p className={style.desc}>
                Flower Station is considered by many to be one of the UK's best florist. This is an accolade that takes time and commitment to achieve, and it is something our team are constantly working towards. Although a large part of our focus as a company is on customer service, quick delivery and reasonable prices, the thing that we focus on the most is the quality of our flowers and bouquets. <br /><br />

                We only source the best flowers direct from sustainable farms and growers around the world, whether it be colourful tulips from Holland or exquisite Roses from Ecuador. Our flowers conform to the Fair Flowers Fair Plants (FFP) standards, stimulating the production of sustainable cut flowers and potted plants, minimizing the environmental impact of cut flower production on the natural environment and surrounding communities, and establishing good social conditions for workers on flower and plant farms. <br /><br />

                Moving forward, Flower Station is making huge strides in efforts to become the UK's first, fully carbon neutral florist and online flower retailer. In order to do this, we are working very closely with British flower farms and growers to source amazing, home grown, high quality flowers and plants.</p>
            <h3 className={style.heading1}>About</h3>
            <h3 className={style.heading1}>Local Florist Shops</h3>
            <h3 className={style.heading1}>Delivery</h3>
            <h3 className={style.heading1}>Questions & Answers</h3>

        </div>

    )
}

export default Rightbar
