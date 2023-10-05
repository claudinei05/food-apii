import React from 'react';
import Veggie from '../components/Veggie';
import Popular from '../components/Popular';



function Home() {
  return (
    <React.Fragment>
      <div>
        <Veggie />
        <Popular/>
      </div>      
    </React.Fragment>
  );
}

export default Home;
