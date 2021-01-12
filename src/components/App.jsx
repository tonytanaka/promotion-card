import React, { useState } from 'react';
import PromotionCard from './Promotion/Card/Card';

import '../App.css';

const App = () => {

  const promotion = {
  "id": 1,
  "title": "Lenovo Yoga Smart Tab 25,5 cm (10,1 Zoll, 1920x1200, Full HD, WideView, Touch) Tablet-PC (Octa-Core, 3GB RAM, 32GB eMMC, Wi-Fi, LTE, Android 9) grau",
  "price": 199.00,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71Mx2n2HcEL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/Lenovo-1920x1200-Tablet-PC-Octa-Core-Android/dp/B0857LVFWM?ref_=Oct_DLandingS_D_11fd2948_60&smid=A3JWKAKR8XB7XF",
  "comments": [{"id": 1,"comment": "good RAM memory"}, {"id": 2,"comment": "good price"}]
}

  return (
    <div className="App">
    <PromotionCard promotion={promotion}/>
    </div>
  );
}

export default App;
