import React from 'react';
import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';

export const CatergoriesComponent = () => {
    return (
        <React.Fragment>
            <section className="categories container">
                <div className="intro-text">
                    <p>Our Categories</p>
                    <a href='/'>See All</a>
                </div>
                <div className="food-imgs">
                    <div className="food-img">
                        <img src={third} alt="food" />
                        <p className="breakfast">Breakfast Foods</p>
                    </div>
                    <div className="food-img">
                        <img src={second} alt="food" />
                        <p>Fast Foods</p>
                    </div>
                    <div className="food-img">
                        <img src={first} alt="food" />
                        <p>Pizzas</p>
                    </div>
                    <div className="food-img">
                        <img src={third} alt="food" />
                        <p>Beef Soups</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
