import React from "react";
import electrochromicInteriorMirror from "../asset/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg";
import electricfoldingheatedexteriormirrors from "../asset/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg";
import storagepack from "../asset/configurateur/equipements/categories/confort/pack-rangement.jpg";
import { useDispatch } from "react-redux";
import { selectOption } from "../feactures/alpine/AlpineSlice";
import cruisecontrolspeedlimiter from "../asset/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg";
import arParkingAssistance from "../asset/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg";
import frontAndRearParkingAssistance from "../asset/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg";
import frontRearParkingAssistanceAndReversingCamera from "../asset/configurateur/equipements/categories/conduite/camera-recul.jpg";
import activeSportExhaust from "../asset/configurateur/equipements/categories/conduite/echappement-sport.jpg";
import highPerf320mmBrakingSystem from "../asset/configurateur/equipements/categories/securite/freinage-haute-perf.jpg";
import emergencyBrakingAssistance from "../asset/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg";
import driverAndPassengerFrontAirbags from "../asset/configurateur/equipements/categories/securite/airbag.jpg";
import alpineBlueColorBrakeCalipers from "../asset/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg";
import alpineLogoOnTheFrontFenders from "../asset/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg";
import brakeCalipersInAnthraciteGrayColor from "../asset/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg";
import aluminumCrankset from "../asset/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg";
import matteCarbonHarmony from "../asset/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg";
import logoInTheCenterOfTheSteeringWheelInAlpineBlue from "../asset/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg";
import heatedSeats from "../asset/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg";
import heritagePack from "../asset/configurateur/equipements/categories/design/pack-heritage.jpg";
import aluminumpassengerfootrest from "../asset/configurateur/equipements/categories/design/repose-pied-alu.jpg";
import ConfigCard from "./ConfigCard";

function Comfort({ choiceCar }) {
  const dispatch = useDispatch();

  const haldleSelect = (name, price, type, classement) => {
    dispatch(
      selectOption({
        idCar: choiceCar.id,
        name: name,
        price: price,
        type: type,
        id: classement,
      })
    );
  };

  return (
    <div className="d-flex container-card-option container flex-wrap justify-content-center">
      {/* design */}
      <div className="d-flex flex-column card-option">
        <img
          src={aluminumpassengerfootrest}
          alt="Aluminum passenger footrest"
          // height={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Aluminum passenger footrest", 96, "design", 1)
          }
        />
        <div className="d-flex flex-column align-items-center">
          <label for="Aluminum passenger footrest">
            Aluminum passenger footrest
          </label>
          <p>price 96 </p>
        </div>
      </div>

      <div className="d-flex flex-column card-option">
        <img
          src={heritagePack}
          alt="Heritage Pack"
          // height={"50px"}
          // width={"50px"}
          onClick={() => haldleSelect("Heritage Pack", 180, "design", 2)}
        />
        <div className="d-flex flex-column align-items-center">
          <label for="Heritage Pack">Heritage Pack</label>
          <p>price 180 </p>
        </div>
      </div>
      {/* comfort */}
      <div className="d-flex flex-column card-option">
        <img
          src={electrochromicInteriorMirror}
          alt="Electrochromic interior mirror"
          // height={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Electrochromic interior mirror", 180, "comfort", 1)
          }
        />
        <div className="d-flex flex-column align-items-center">
          <label for="electrochromicInteriorMirror">
            Electrochromic interior mirror
          </label>
          <p>price 180 </p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={electricfoldingheatedexteriormirrors}
          alt="Electric folding heated exterior mirrors"
          type="radio"
          // height={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect(
              "Electric folding heated exterior mirrors",
              504,
              "comfort",
              2
            )
          }
        />
        <div className="d-flex flex-column align-items-center">
          <label for="electricfoldingheatedexteriormirrors">
            Electric folding heated exterior mirrors
          </label>
          <p>price 504</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={storagepack}
          alt="Storage pack"
          // height={"50px"}
          // width={"50px"}
          onClick={() => haldleSelect("Storage pack", 504, "comfort", 3)}
        />
        <div className="d-flex flex-column align-items-center">
          <label for="storagepack">Storage pack</label>
          <p>price 504</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={cruisecontrolspeedlimiter}
          alt="Cruise control/speed limiter"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Cruise control/speed limiter", 0, "comfort", 4)
          }
        />
        <div className="d-flex flex-column align-items-center">
          <label for="cruisecontrolspeedlimiter">
            Cruise control/speed limiter
          </label>
          <p>Price O euro</p>
        </div>
      </div>
      {/* conduit */}
      <div className="d-flex flex-column card-option ">
        <img
          src={arParkingAssistance}
          alt="AR parking assistance"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("AR parking assistance", 420, "conduct", 1)
          }
        />
        <div className="d-flex flex-column align-items-center">
          <label for="arParkingAssistance">AR parking assistance</label>
          <p>Price 420 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={frontAndRearParkingAssistance}
          alt="Front and rear parking assistance"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Front and rear parking assistance", 750, "conduct", 2)
          }
        />
        <div className="d-flex flex-column ">
          <label for="frontAndRearParkingAssistance">
            Front and rear parking assistance
          </label>
          <p>Price 750 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={frontRearParkingAssistanceAndReversingCamera}
          alt="Front rear parking assistance and reversing camera"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect(
              "Front and rear parking assistance",
              1200,
              "conduct",
              3
            )
          }
        />
        <div>
          <label for="frontRearParkingAssistanceAndReversingCamera">
            Front rear parking assistance and reversing camera
          </label>
          <p>Price 1200 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={activeSportExhaust}
          alt="Active Sport Exhaust"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Active Sport Exhaust", 1500, "conduct", 4)
          }
        />
        <div>
          <label for="activeSportExhaust">Active Sport Exhaust</label>
          <p>Price 1500 euro</p>
        </div>
      </div>
      {/* sécurity */}
      <div className="d-flex flex-column card-option ">
        <img
          src={highPerf320mmBrakingSystem}
          alt="High-Perf 320mm braking system"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("High-Perf 320mm braking systemt", 1000, "security", 1)
          }
        />
        <div>
          <label for="highPerf320mmBrakingSystem">
            High-Perf 320mm braking system
          </label>
          <p>Price 1000 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={emergencyBrakingAssistance}
          alt="Emergency braking assistance"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Emergency braking assistance", 0, "security", 2)
          }
        />
        <div>
          <label for="emergencyBrakingAssistance">
            Emergency braking assistance
          </label>
          <p>Price 0 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={driverAndPassengerFrontAirbags}
          alt="Driver and passenger front airbags"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Driver and passenger front airbags", 0, "security", 3)
          }
        />
        <div>
          <label for="driverAndPassengerFrontAirbags">
            Driver and passenger front airbags
          </label>
          <p>Price 0 euro</p>
        </div>
      </div>
      {/* custom ext. */}
      <div className="d-flex flex-column card-option ">
        <img
          src={alpineBlueColorBrakeCalipers}
          alt="Alpine Blue color brake calipers"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Alpine Blue color brake calipers", 384, "customE", 1)
          }
        />
        <div>
          <label for="alpineBlueColorBrakeCalipers">
            Alpine Blue color brake calipers
          </label>
          <p>Price 384 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={alpineLogoOnTheFrontFenders}
          alt="Alpine logo on the front fenders"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect("Alpine logo on the front fenders", 120, "customE", 2)
          }
        />
        <div>
          <label for="alpineLogoOnTheFrontFenders">
            Alpine logo on the front fenders
          </label>
          <p>Price 120 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={brakeCalipersInAnthraciteGrayColor}
          alt="Brake calipers in Anthracite Gray color"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect(
              "Brake calipers in Anthracite Gray color",
              0,
              "customE",
              3
            )
          }
        />
        <div>
          <label for="brakeCalipersInAnthraciteGrayColor">
            Brake calipers in Anthracite Gray color
          </label>
          <p>Price 0 euro</p>
        </div>
      </div>
      {/* custom int. */}
      <div className="d-flex flex-column card-option ">
        <img
          src={aluminumCrankset}
          alt="Aluminum crankset"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() => haldleSelect("Aluminum crankset", 120, "customI", 1)}
        />
        <div>
          <label for="aluminumCrankset">Aluminum crankset</label>
          <p>Price 120 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={matteCarbonHarmony}
          alt="Matte carbon harmony"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() => haldleSelect("Matte carbon harmony", 0, "customI", 2)}
        />
        <div>
          <label for="matteCarbonHarmony">Matte carbon harmony</label>
          <p>Price 0 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={logoInTheCenterOfTheSteeringWheelInAlpineBlue}
          alt="Logo in the center of the steering wheel in Alpine Blue"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() =>
            haldleSelect(
              "Logo in the center of the steering wheel in Alpine Blue",
              84,
              "customI",
              3
            )
          }
        />
        <div>
          <label for="logoInTheCenterOfTheSteeringWheelInAlpineBlue">
            Logo in the center of the steering wheel in Alpine Blue
          </label>
          <p>Price 84 euro</p>
        </div>
      </div>

      <div className="d-flex flex-column card-option ">
        <img
          src={heatedSeats}
          alt="Heated seats"
          //heigth={"50px"}
          // width={"50px"}
          onClick={() => haldleSelect("Heated seats", 400, "customI", 4)}
        />
        <div>
          <label for="heatedSeats">Heated seats</label>
          <p>Price 400 euro</p>
        </div>
      </div>
      <ConfigCard choiceCar={choiceCar}/>
    </div>
  );
}

export default Comfort;
