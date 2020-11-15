import React from 'react';
import { FormComponent } from './FormComponent';
import { NavbarComponent } from './NavbarComponent';

export const HeaderComponent = () => {
    return (
        <React.Fragment>
            <div className="jumbotron header">
                <NavbarComponent />
                <FormComponent />
            </div>
        </React.Fragment>
    )
}
