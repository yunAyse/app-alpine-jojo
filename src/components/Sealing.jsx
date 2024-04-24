import React from "react";
import SealingPureStandard from "../asset/configurateur/interieurs/selection/cuir-noir_dinamica.jpg";
import SealingPureBlack from "../asset/configurateur/interieurs/selection/cuir-noir_perfore.jpg";
import SealingLegendStandard from "../asset/configurateur/interieurs/selection/cuir-noir.jpg";
import SealingLegendBrun from "../asset/configurateur/interieurs/selection/cuir-brun.jpg";
import { useDispatch } from "react-redux";
import { changeSealing } from "../feactures/alpine/AlpineSlice";
import DesignSealing from "./DesignSealing";

function Sealing({ choiceCar }) {
//   console.log(choiceCar.Sealing);
  const dispatch = useDispatch();

  const handleChangeSealing = (name, price) => {
    dispatch(
      changeSealing({
        idCar: choiceCar.id,
        name: name,
        price: price,
      })
    );
  };

  return (
    <div>
      {choiceCar.id === 1 ? (
        <>
          <img
            src={SealingPureStandard}
            alt="sealing standard"
            height={"150px"}
            onClick={() =>
              handleChangeSealing(
                "bucket seats in black leatherand dinamica",
                0
              )
            }
          />
          <p>bucket seats in black leatherand dinamica</p>
          <p>price 0</p>

          <img
            src={SealingPureBlack}
            alt="sealing black"
            height={"150px"}
            onClick={() =>
              handleChangeSealing(
                "comfort seats in perforated black leather",
                800
              )
            }
          />
        <p>comfort seats in perforated black leather</p>
        <p>price 800</p>
        </>
      ) : null}

      {choiceCar.id === 2 ? (
        <>
          <img
            src={SealingLegendStandard}
            alt="sealing standard"
            height={"150px"}
            onClick={() =>
              handleChangeSealing("comfort seats in black leather", 0)
            }
          />

          <img
            src={SealingLegendBrun}
            alt="sealing black"
            height={"150px"}
            onClick={() =>
              handleChangeSealing("comfort seats in brown leather", 800)
            }
          />
        </>
      ) : null}

      <DesignSealing choiceCar={choiceCar} />
    </div>
  );
}

export default Sealing;
