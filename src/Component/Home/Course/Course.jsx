import React from 'react';
import './Course.css'
import CouCard from '../../Comp/CouCard';
import { BsJournalBookmark } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import first from '../../../img/2e91fc101a4a1929e97ca8056feb3ddd.jpg'
import second from '../../../img/e02f004c1fd618dd7d863ed9426d99e6.jpg'
import third from '../../../img/4d35f623ab8172099dea22c9bc011e22.jpg'
import forth from '../../../img/4d4ec1232148b2b95497f42a6e7d8deb.jpg'
import fifth from '../../../img/70d797215963849f66069293c0a669ef.jpg'
import sixth from '../../../img/5085f98e4c65dadebca2cc6c95fa3ae9.jpg'
import seventh from '../../../img/275f8b8fa0ad91c6f6b976901574b898.jpg'
import eighth from '../../../img/istockphoto-1191817260-170667a.jpg'
import nine from '../../../img/8bdfb1f525261ce1c7fba4e6e52319e4.jpg'
import ten from '../../../img/9fb17ca694dd4833341678cfdbf03e18.jpg'
import eleven from '../../../img/96912fbeadc69dda84c6f90e030bf813.jpg'
import twelve from '../../../img/4c0f6895b9eddf3bc6e76b9e505f690d.jpg'
import thirteen from '../../../img/618fef62c7b1f647b6bf5f2ea96407c3.jpg'

const Course = () => {

    const data =[
        {
            Course: "CP100 - Business Management I & II(Online Campus)",
            price: "25,000",
            img: first
        },
        {
            Course: "CP102 - Financial Accounting I & II - Term II (Online Campus)",
            price: "25,000",
            img: second
        },
        {
            Course: "CP103 - Business Ethics I & II (Online Campus)",
            price: "25,000",
            img: third
        },
        {
            Course: "CP 105 - PROJECT MANAGEMENT CAPM I (online Campus)",
            price: "25,000",
            img: forth
        },
        {
            Course: "CP109 - Women and Leadership (Online Campus)",
            price: "25,000",
            img: fifth
        },
        {
            Course: "CP202 - Macro Economics I & II (Online Campus)",
            price: "25,000",
            img: sixth
        },
        {
            Course: "CP 202A - Entrepreneurship & Communication (Online Campus)",
            price: "25,000",
            img: seventh
        },
        {
            Course: "CP203 - Global Economy (Online Campus)",
            price: "25,000",
            img: eighth
        },
        {
            Course: "Basic English A2 (Online Campus)",
            price: "25,000",
            img: nine
        },
        {
            Course: "Intermediate English B1",
            price: "25,000",
            img: ten
        },
        {
            Course: "CP500A - Advanced Managerial Accounting (Online Campus)",
            price: "25,000",
            img: eleven
        },
        {
            Course: "CP501A - Advanced Financial Management (Online Campus)",
            price: "25,000",
            img: twelve
        },
        {
            Course: "CPA501 Advanced financial management",
            price: "25,000",
            img: thirteen
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
            <Link to="/register"><button><span>Click to Enroll <BsJournalBookmark /></span></button></Link>
        </div>
    )
}

export default Course;