import React from 'react';

export const FormComponent = () => {
    return (
        <React.Fragment>
            <div className="text-form">
                <div className="header-text">
                    <p>What are you eating today?</p>
                </div>
                <form className="header-form">
                    <div className="form-inputs">
                        <div className="form1">
                            <div className="form-icon">
                                <i className="material-icons">location_on</i>
                                <input 
                                    type="text" 
                                    placeholder="Select Closest BlackBells to you" 
                                />
                            </div>
                            <div className="form1-last-icon">
                                <i className="material-icons">expand_more</i>
                            </div>
                        </div>
                        <div className="form2">
                            <div className="form-icon">
                                <i className="material-icons">watch_later</i>
                                <input 
                                    type="text" 
                                    placeholder="Deliver now" 
                                />
                            </div>
                            <div className="form1-last-icon">
                                <i className="material-icons">expand_more</i>
                            </div>
                        </div>
                        <button type="submit">Get Food</button>
                    </div>
                </form>
                <div className="form-under-text">
                    <p>sign up for extra features</p>
                </div>
            </div>
        </React.Fragment>
    )
}
