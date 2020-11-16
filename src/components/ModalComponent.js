import React from 'react';

export const ModalComponent = ( { showModal, setShowModal } ) => {
    return (
        <React.Fragment>
            <section className="modal">
                <div className="overall">
                <div className="modal-content">
                    <div className="modal-food"></div>
                    <div className="modal-food-note">
                        <p className="modal-food-name">Spaghetti &amp; Barbeque chicken</p>
                        <p className="modal-food-text">
                            Gluten free cowflower crust dough with our handcrafted tomato sauce, 
                            covered with a blend of fine cheeses.
                        </p>
                        <div className="modal-footer">
                            <p className="amount">N 4,670.00</p>
                            <div className="counter">
                                <i className="material-icons">remove_circle</i>
                                <p className="number">1</p>
                                <i className="material-icons">add_circle</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-form">
                    <p>
                        We need to confirm the availability of this meal from the Black pepper
                        closest to you. 
                    </p>
                    <form>
                    <div className="form1 modal-form1">
                            <div className="form-icon">
                                <i className="material-icons">location_on</i>
                                <input 
                                    type="text" 
                                    placeholder="Select Closest Blackpepper to you" 
                                />
                            </div>
                            <div className="form1-last-icon">
                                <i className="material-icons">expand_more</i>
                            </div>
                        </div>
                        <button 
                            onClick={() => setShowModal(!showModal)} 
                            type="submit" className="modal-button">
                                Confirm
                        </button>
                    </form>
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}
