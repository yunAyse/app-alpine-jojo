import React from 'react'
import Color from './Color';
import Rims from './Rims';
import Sealing from './Sealing';

function ConfigCard({ choiceCar }) {



  let priceTotal = [];


  console.log(priceTotal);


  priceTotal.push(choiceCar.price)

  priceTotal.push(choiceCar.rims.price)
  priceTotal.push(choiceCar.color.price)
  priceTotal.push(choiceCar.Sealing.price)
  priceTotal.push(choiceCar.mediaAndNavigation.price)

  choiceCar.equipment.design.map((design) => {
    priceTotal.push(design.price)
  })
  choiceCar.equipment.comfort.map((comfort) => {
    priceTotal.push(comfort.price)
  })
  choiceCar.equipment.conduct.map((conduct) => {
    priceTotal.push(conduct.price)
  })
  choiceCar.equipment.security.map((security) => {
    priceTotal.push(security.price)
  })
  choiceCar.equipment.exteriorCustomization.map((exteriorCustomization) => {
    priceTotal.push(exteriorCustomization.price)
  })
  choiceCar.equipment.interiorCustomization.map((interiorCustomization) => {
    priceTotal.push(interiorCustomization.price)
  })

  const totalPrice = priceTotal.reduce((acc, curr) => acc + curr, 0);
  console.log(totalPrice);

  return (
    choiceCar ?
      <div class="dropup-center dropup fixed-bottom mt-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {'Total price ' + totalPrice + ' Euros '}
        </button>
        <ul class="dropdown-menu">
          <li>Version : {choiceCar.version}</li>
          <li>Color : {choiceCar.color.name} price: {choiceCar.color.price} €</li>
          <li>Rims : {choiceCar.rims.name}  price: {choiceCar.rims.price} €</li>
          <li>Sealing : {choiceCar.Sealing.name} price: {choiceCar.Sealing.price} €</li>
          <li>Design : </li>
          {choiceCar.equipment.design.map((design) => {
            return <li> - {design.name} price : {design.price} € </li>
          })}
          <li>Comfort : </li>
          {choiceCar.equipment.comfort.map((comfort) => {
            return <li> - {comfort.name} price : {comfort.price} € </li>
          })}
          <li>Conduct : </li>
          {choiceCar.equipment.conduct.map((conduct) => {
            return <li> - {conduct.name} price : {conduct.price} € </li>
          })}
          <li>Security : </li>
          {choiceCar.equipment.security.map((security) => {
            return <li> - {security.name} price : {security.price} € </li>
          })}
          <li>Exterior Customization : </li>
          {choiceCar.equipment.exteriorCustomization.map((exteriorCustomization) => {
            return <li> - {exteriorCustomization.name} price : {exteriorCustomization.price} € </li>
          })}
          <li>Intérior Customization: </li>
          {choiceCar.equipment.interiorCustomization.map((interiorCustomization) => {
            return <li> - {interiorCustomization.name} price : {interiorCustomization.price} € </li>
          })}

        </ul>
      </div>
      : null
  )



}

export default ConfigCard
