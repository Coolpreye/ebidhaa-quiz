import React from 'react';

export const FooterComponent = () => {
    return (
        <React.Fragment>
            <section className="footer">
                <div className="container">
                <div className="first-row">
                    <p className="footer-logo">Blackpeppereats</p>
                    <div className="app-stores">
                        <div className="app-store footer-store">
                            <div className="app-store-logo footer-store-logo"></div>
                            <div className="app-store-details footer-store-details">
                                <small>Get on the</small>
                                <p>Appstore</p>
                            </div>
                        </div>
                        <div className="app-store footer-store">
                            <div className="app-store-logo footer-store-logo"></div>
                            <div className="app-store-details footer-store-details">
                                <small>Get on the</small>
                                <p>Playstore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-row">
                    <p>&copy; 2020 Blackpepper</p>
                    <div className="footer-links">
                        <a href="/">Legals</a>
                        <a href="/">Legals</a>
                        <a href="/">Legals</a>
                    </div>
                    <div className="social-icons">
                        <a href="/">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="/">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="/">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}
