import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Car.css'
import { Link } from 'react-router-dom';

function Car() {
  const cars = useSelector((store) => store.config.car);

  return (

    <div className='container'>
      <div className='mt-5 '>
        {cars.map((car, index) => (
          <div key={index} style={{ marginBottom: '20px' }} className='card-version d-flex flex-wrap mt-5 gap-5'>
            <div className='d-flex flex-column mt-5'>
              <div className='d-flex justify-content-center'>
                <h2>{car.version}</h2>
                <h3 className='mx-5'>{car.price + ' Euros'}</h3>
              </div>
              <hr className='d-flex'/>
              <div className='d-flex justify-content-center'>  
                
                <img src={car.picture} alt={'picture ' + car.version} height={'200px'} ></img>
              </div>
            </div>

            <div className='d-flex align-items-end '>
              <div className='selcted d-flex flex-column align-items-start'>
                <h3 className='mb-4 mt-5'>{car.state100 + ' from 0 to 100 km/h'}</h3>
                <h3 className='mb-4'>{car.vMax + ' Speed max'}</h3>
                <h3 className='mb-4'>{car.hp + ' HP'}</h3>
              </div>
            </div>

            <div className='d-flex align-items-end'>
              <Link className='btn btn-info' type='button' id={car.id} to={'/configurator/'+ car.id}>SELECTED</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Car;
