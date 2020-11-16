import React, { useState } from 'react';
import { HeaderComponent } from './components/HeaderComponent';
import "./App.css";
import { PopularComponent } from './components/PopularComponent';
import { CatergoriesComponent } from './components/CatergoriesComponent';
import { StoreComponent } from './components/StoreComponent';
import { OfferComponent } from './components/OfferComponent';
import { ExtraComponent } from './components/ExtraComponent';
import { FooterComponent } from './components/FooterComponent';
import { ModalComponent } from './components/ModalComponent';



function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <HeaderComponent showModal={showModal} setShowModal={setShowModal} />
      <PopularComponent />
      <CatergoriesComponent />
      <StoreComponent />
      <OfferComponent />
      <ExtraComponent />
      <FooterComponent />
      {
        showModal && <ModalComponent showModal={showModal} setShowModal={setShowModal} />
      }
    </div>
  );
}

export default App;
