import React from 'react';
import { HeaderComponent } from './components/HeaderComponent';
import "./App.css";
import { PopularComponent } from './components/PopularComponent';
import { CatergoriesComponent } from './components/CatergoriesComponent';
import { StoreComponent } from './components/StoreComponent';
import { OfferComponent } from './components/OfferComponent';
import { ExtraComponent } from './components/ExtraComponent';
import { FooterComponent } from './components/FooterComponent';



function App() {
  return (
    <div>
      <HeaderComponent />
      <PopularComponent />
      <CatergoriesComponent />
      <StoreComponent />
      <OfferComponent />
      <ExtraComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
