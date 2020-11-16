import React, { useRef, useEffect } from 'react';
import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';

const useMOuntEffect = fun => useEffect(fun, [fun]);

export const PopularComponent = () => {
    const myRef = useRef(null);
    const secondRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView();
    const executeSecondScroll = () => secondRef.current.scrollIntoView();

    useMOuntEffect(executeScroll);
    useMOuntEffect(executeSecondScroll);

    return (
        <React.Fragment>
            <section className="popular">
                <div className="intro-text container">
                    <p>What's Popular?</p>
                    <div className="buttons">
                        <i onClick={executeSecondScroll} className="material-icons">
                            arrow_back
                        </i>
                        <i onClick={executeScroll} className="material-icons forward">
                            arrow_forward
                        </i>
                    </div>
                </div>
                <div className="food-cards">
                    <div className="food-card" ref={secondRef}>
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
                    <div className="food-card food-left" ref={myRef}>
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
