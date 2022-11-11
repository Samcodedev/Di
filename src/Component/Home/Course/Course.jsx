import React from 'react';
import './Course.css'
import CouCard from '../../Comp/CouCard';
import { BsJournalBookmark } from 'react-icons/bs'
import first from '../../../img/2e91fc101a4a1929e97ca8056feb3ddd.jpg'
import second from '../../../img/51757724fdb031d98db3545f1552b380.jpg'
import third from '../../../img/1c35e08837ad474ba95562d6c339ff33.jpg'
import forth from '../../../img/e02f004c1fd618dd7d863ed9426d99e6.jpg'
import fifth from '../../../img/f2a28e395c3e132552b11faf418a6485.jpg'
import sixth from '../../../img/5085f98e4c65dadebca2cc6c95fa3ae9.jpg'
import seventh from '../../../img/70d797215963849f66069293c0a669ef.jpg'
import eighth from '../../../img/istockphoto-1191817260-170667a.jpg'

const Course = () => {

    const data =[
        {
            Course: "CP105 Project management (CAPM 1)",
            price: 29.99,
            img: first
        },
        {
            Course: "CP100 Business management I & II",
            price: 29.99,
            img: second
        },
        {
            Course: "CP103 Business Ethics I & II",
            price: 29.99,
            img: third
        },
        {
            Course: "CP203 Global economy",
            price: 29.99,
            img: forth
        },
        {
            Course: "CP202A Entrepreneurship and communication",
            price: 29.99,
            img: fifth
        },
        {
            Course: "CP108 Plutus/Haskell",
            price: 29.99,
            img: sixth
        },
        {
            Course: "CP109 Woman and leadership",
            price: 29.99,
            img: seventh
        },
        {
            Course: "CPA501 Advanced financial management",
            price: 29.99,
            img: eighth
        }
    ]

    const lists = data.map((item) =>{
        return(
            <CouCard 
                course={item.Course}
                price={item.price}
                img={item.img}
            />
        )
    })

    return(
        <div className='course'>
            <h2>Available Courses you can enroll for in the scholarship</h2>
            <div className="cards">
                {lists}
            </div>
            <button><span>Click to Enroll <BsJournalBookmark /></span></button>
        </div>
    )
}

export default Course;