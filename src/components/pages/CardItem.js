import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Travel Image" className='cards__item__img'/>
                </figure>
                <div className='card__items__info'>
                    <h5 className='card__items__text'>
                        {props.text}
                    </h5>
                </div>   
            </Link>
        </li>
        </>
    )
}

export default CardItem;