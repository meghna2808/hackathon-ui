import React from 'react';
import jacket3 from "../assets/home.jpg";
import "./Home.css"


const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img
        src={jacket3}
        style={{
          width: '100%',
          height:"100%",
          objectFit: 'cover',
        }}
      />


    </div>
  );
};

export default Home;
