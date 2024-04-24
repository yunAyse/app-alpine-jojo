import React from "react";
import { useDispatch } from "react-redux";
import { changeRims } from "../feactures/alpine/AlpineSlice";
import nameRimStandard from "../asset/configurateur/jantes/selection/jante-standard.jpg";
import nameRimSerac from "../asset/configurateur/jantes/selection/jante-serac.jpg";
import nameRimLegende from "../asset/configurateur/jantes/selection/jante-legende.jpg";
import RimColor from "./RimColor";

function Rims({ choiceCar }) {
  const dispatch = useDispatch();
  const handleChangeRim = (name, price) => {
    dispatch(
      changeRims({
        idCar: choiceCar.id,
        name: name,
        price: price,
      })
    );
  };

  return (
    <div className="mt-5 vh-100">
      <div className="d-flex">
        <img
          src={nameRimStandard}
          alt="rims standard"
          height={"150px"}
          onClick={() => handleChangeRim("standard", 0)}
        />
        <p>standard</p>
        <p>price 0 €</p>

        <img
          src={nameRimSerac}
          alt="rims serac"
          height={"150px"}
          onClick={() => handleChangeRim("serac", 1000)}
        />
        <p>serac</p>
        <p>price 1000 €</p>
        {choiceCar.id === 2 ? (
          <div>
            <img
              src={nameRimLegende}
              alt="rims legende"
              height={"150px"}
              onClick={() => handleChangeRim("legend", 0)}
            />
            <p>legend</p>
            <p>price 0€</p>
          </div>
        ) : null}
      </div>
      <RimColor choiceCar={choiceCar} />
    </div>
  );
}

export default Rims;
