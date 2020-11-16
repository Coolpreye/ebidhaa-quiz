import React from 'react';
import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';

export const ExtraComponent = () => {
    return (
        <React.Fragment>
            <section className="extra">
                <div className="food-cards">
                    <div className="food-card">
                        <img alt="food" src={first} />
                        <p className="food-name">Jollof Rice &amp; Beef</p>
                        <p className="food-note">
                            Same as our regular jollof rice but meatier, perfect for a large party.
                        </p>
                        <p className="action">N4,670.00   |   Add to Cart</p>
                    </div>
                    <div className="food-card food-left">
                        <img alt="food" src={second} />
                        <p className="food-name">Jollof Rice &amp; Chicken-in-Stew</p>
                        <p className="food-note">
                            Same as our regular jollof rice but meatier, perfect for a large party.
                        </p>
                        <p className="action">N4,670.00   |   Add to Cart</p>
                    </div>
                    <div className="food-card food-left">
                        <img alt="food" src={third} />
                        <p className="food-name">Spaghetti &amp; Barbeque chicken</p>
                        <p className="food-note">
                            Same as our regular jollof rice but meatier, perfect for a large party.
                        </p>
                        <p className="action">N4,670.00   |   Add to Cart</p>
                    </div>
                    <div className="food-card food-left">
                        <img alt="food" src={first} />
                        <p className="food-name">Chinese Rice &amp; Beef</p>
                        <p className="food-note">
                            Same as our regular jollof rice but meatier, perfect for a large party.
                        </p>
                        <p className="action">N4,670.00   |   Add to Cart</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
