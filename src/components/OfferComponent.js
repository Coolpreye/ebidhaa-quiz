import React from 'react';
import second from '../images/second.png';

export const OfferComponent = () => {
    return (
        <React.Fragment>
            <section className="offers">
                <p className="first-text">Offers</p>
                <div className="offer-imgs">
                    <div className="offer-img">
                        <img src={second} alt="food" />
                        <p>Get 50% off a scheduled order from Tuesday</p>
                    </div>
                    <div className="offer-img">
                        <img src={second} alt="food" />
                        <p>Get 50% off a scheduled order from Tuesday</p>
                    </div>
                    <div className="offer-img">
                        <img src={second} alt="food" />
                        <p>Get 50% off a scheduled order from Tuesday</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
