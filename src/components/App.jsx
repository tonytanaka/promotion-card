import React, { useState } from 'react';
import PromotionCard from './Promotion/Card/Card';

import '../App.css';

const App = () => {

  const promotions = [
  {
  "id": 1,
  "title": "Lenovo Yoga Smart Tab 25,5 cm (10,1 Zoll, 1920x1200, Full HD, WideView, Touch) Tablet-PC (Octa-Core, 3GB RAM, 32GB eMMC, Wi-Fi, LTE, Android 9) grau",
  "price": 199,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71Mx2n2HcEL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/Lenovo-1920x1200-Tablet-PC-Octa-Core-Android/dp/B0857LVFWM?ref_=Oct_DLandingS_D_11fd2948_60&smid=A3JWKAKR8XB7XF",
  "comments": [{"id": 1,"comment": "good RAM memory"}, {"id": 2,"comment": "good price"}],
  },
  {
  "id": 2,
  "title": "Lenovo IdeaCentre 3i Desktop PC (Intel Core i5-10400, 512GB SSD, 8GB RAM, DVD-Brenner, Intel UHD-Grafik 630, Windows 10 Home) grau",
  "price": 529,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/516AR9k2lkL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/Lenovo-IdeaCentre-i5-10400-DVD-Brenner-UHD-Grafik/dp/B08DY8VXF1?ref_=Oct_DLandingS_D_11fd2948_65&smid=A3JWKAKR8XB7XF",
  "comments": [{"id": 1,"comment": "die Grafikkarte kann in 4K betrieben werden, die Hz Frekquenz hängt von dem Spiel ab."}]
},
  {
  "id": 3,
  "title": "ASUS Computer ZenBook 14 UM431DA (90NB0PB3-M02570) 35,5 cm (14 Zoll, Full HD, IPS-Level, matt) Ultrabook (AMD R5-3500U, AMD Radeon RX Vega 8 Graphics , 8GB RAM, 512GB SSD, Windows 10) Silver Blue",
  "price": 733.80,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51N7FxPHroL._AC_SL1000_.jpg",
  "url": "https://www.amazon.de/ASUS-Computer-90NB0PB3-M02570-IPS-Level-Ultrabook/dp/B086RCRMF5/?_encoding=UTF8&pd_rd_w=LUjUZ&pf_rd_p=07208ea4-5452-4c67-8f65-44901c0f68eb&pf_rd_r=B7AGKBFREC01PG4G72T4&pd_rd_r=44f99c2f-efa9-4d33-8295-0bb6b5c841ba&pd_rd_wg=JKJEF&ref_=pd_gw_ci_mcx_mr_hp_d",
  "comments": [{"id": 1,"comment": "Finanzierung: 61,15 € x 12 Monate"}]
},
  {
  "id": 4,
  "title": "Predator Orion 3000 (PO3-620) Intel Core i7-10700F / 16 GB DDR4 RAM schwarz / 1024 GB SSD / NVIDIA GeForce RTX 3070 (8 GB GDDR6) / Windows 10 Home (64 Bit)",
  "price": 1599,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71mxEb6Q5iL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/Predator-PO3-620-i7-10700F-schwarz-GeForce/dp/B08NPN12KL/ref=sr_1_4?_encoding=UTF8&dchild=1&fst=as%3Aoff&pf_rd_p=71530b7e-4903-4c59-a6e0-92944272f5cf&pf_rd_r=85TV6BS7KM7WB2ZM9JQF&pf_rd_s=visualsn_de_pc-content-4&pf_rd_t=SubnavFlyout&qid=1460550577&rnid=4368988031&s=computers&sr=1-4",
  "comments": [{"id": 1,"comment": "Wie viele Bildschirme kann ich Anstecken?"}, {"id": 2,"comment": "Maus und Tastatur dabei?"}]
},
  {
  "id": 5,
  "title": "Wir stellen vor: Fire TV Stick Lite mit Alexa-Sprachfernbedienung Lite (ohne TV-Steuerungstasten) | HD-Streaminggerät | 2020",
  "price": 33.95,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61JkbkAQMbL._AC_SL1000_.jpg",
  "url": "https://www.amazon.de/dp/B07ZZVWB4L/ref=gw_de_desk_mso_smp_shl_qc2_0920?pf_rd_r=B7AGKBFREC01PG4G72T4&pf_rd_p=a60dd20b-1cd3-4a2c-9e45-870c46c7990a",
  "comments": [{"id": 1,"comment": "Geht so ein teil auch von zeit zu zeit kaputt..? wir haben einen älteren lite und wird vom fernseher nicht mehr erkannt."}, {"id": 1,"comment": "Funktioniert der Stick mit jeden Fernseher"}]
},
  {
  "id": 6,
  "title": "Leuchtflasche, Flaschenlicht, bottle light 'Einen Engel ohne Flügel nennt man Mama' mit Korken Lichterkette zum Muttertag, Mutti",
  "price": 21.9,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81kGXXPDUYL._SL1500_.jpg",
  "url": "https://www.amazon.de/Leuchtflasche-Flaschenlicht-bottle-Lichterkette-Muttertag/dp/B07MLTDMBK/ref=lp_10733076031_1_1",
  "comments": [{"id": 1,"comment": "Ein spitzen Geschenk das vom Herzen kommt"}]
},
{
  "id": 7,
  "title": "AmazonBasics – Hochgeschwindigkeitskabel, Ultra HD HDMI 2.0, unterstützt 3D-Formate, mit Audio Return Channel, 1,8 m",
  "price": 6.99,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71pFDaZU8lL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/AmazonBasics-HL-007306-Hochgeschwindigkeits-HDMI-Kabel-Ethernet-4K-Videowiedergabe-Schwarz/dp/B014I8SSD0?ref_=Oct_s9_apbd_oup_hd_bw_b293O1f&pf_rd_r=1KASMHXTMWB6G2137Q5D&pf_rd_p=2d3dfca2-b4ea-55af-a95b-cd38e9ce8d8d&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=1966060031",
  "comments": [{"id": 1,"comment": "Kann dieses Kabel ein 144Hz Signal übertragen?"}]
},
  {
  "id": 8,
  "title": "Fire TV Cube│Hands-free mit Alexa, 4K Ultra HD-Streaming-Mediaplayer",
  "price": 119.99,
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SL1500_.jpg",
  "url": "https://www.amazon.de/gp/browse.html?node=17569395031&ref_=nav_em__k_fire_tv_cube_0_2_8_4",
  "comments": [{"id": 1,"comment": "kann ich auch über lankabel das internet antschlißen?"}]
}
]

  return (
    <div className="App">
    <h1>Top Promotions of the Day</h1>
      {promotions.map((promotion) => 
    <PromotionCard promotion={promotion}/>
      )}
    </div>
  );
}

export default App;
