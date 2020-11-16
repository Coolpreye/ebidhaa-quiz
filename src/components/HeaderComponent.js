import React from 'react';
import { FormComponent } from './FormComponent';
import { NavbarComponent } from './NavbarComponent';

export const HeaderComponent = ({ showModal, setShowModal }) => {
    return (
        <React.Fragment>
            <div className="jumbotron header">
                <NavbarComponent />
                <FormComponent showModal={showModal} setShowModal={setShowModal}  />
            </div>
        </React.Fragment>
    )
}
