import React from 'react'

export const StoreComponent = () => {
    return (
        <React.Fragment>
            <section className="stores">
                <div className="app">
                    <i className="material-icons">notifications</i>
                    <p>Get our App!</p>
                </div>
                <div className="app-stores">
                    <div className="app-store">
                        <div className="app-store-logo"></div>
                        <div className="app-store-details">
                            <small>Get on the</small>
                            <p>Appstore</p>
                        </div>
                    </div>
                    <div className="app-store">
                        <div className="app-store-logo"></div>
                        <div className="app-store-details">
                            <small>Get on the</small>
                            <p>Playstore</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
