import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../feactures/alpine/AlpineSlice";
import glacierWhite from "../asset/configurateur/couleurs/selection/blanc.jpg";
import specialBlueAlpine from "../asset/configurateur/couleurs/selection/bleu.jpg";
import BlueAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg";
import WhiteAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac_1.jpg";
import deepBlackMetallic from "../asset/configurateur/couleurs/selection/noir.jpg";
import blackAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg";
import Rims from "./Rims";

function Color() {
  const dispatch = useDispatch();

  const cars = useSelector((store) => store.config.car);

  let urlcurrent = document.location.href;
  let url = urlcurrent.substring(urlcurrent.lastIndexOf("/") + 1);

  const choiceCar = cars.find((car) => car.id === parseInt(url));

  // function dispatch qui va venir changer le state
  const handleChangeColor = (name, price, slug, picture) => {
    dispatch(
      changeColor({
        idCar: choiceCar.id,
        name: name,
        picture: picture,
        price: price,
        slug: slug,
      })
    );
  };

  return (
    <div className="mt-5 mb-5">

      <div className="d-flex vh-100 align-items-center justify-content-center flex-wrap">

        <div className="">
          <img
            src={choiceCar.color.picture}
            alt={choiceCar.name}
            height={'450px'}
          />
        </div>

        <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center">
          <div>
            <img
              src={glacierWhite}
              alt="Glacier White Opaque Paint"
              height={"150px"}
              id="1"
              onClick={() =>
                handleChangeColor(
                  "Glacier White Opaque Paint ",
                  0,
                  "white",
                  WhiteAlpine
                )
              }
            />
            <p>Glacier White Opaque Paint</p>
          </div>

          <div>
            <img
              src={deepBlackMetallic}
              alt="Deep Black Metallic"
              height={"150px"}
              id="3"
              onClick={() =>
                handleChangeColor(
                  "Deep Black Metallic",
                  840,
                  "black",
                  blackAlpine
                )
              }
            />
            <div>
              <p>Deep Black Metallic</p>
            </div>
          </div>

          <div>
            <img
              src={specialBlueAlpine}
              alt="Special Blue AlpinePaint "
              height={"150px"}
              id="2"
              onClick={() =>
                handleChangeColor(
                  "Special Blue AlpinePaint ",
                  1800,
                  "blue",
                  BlueAlpine
                )
              }
            />
            <div>
              <p>Special Blue AlpinePaint</p>
            </div>
          </div>

        </div>

      </div>

      <Rims choiceCar={choiceCar} />
    </div>
  );
}

export default Color;
