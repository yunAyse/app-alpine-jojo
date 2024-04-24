import React from "react";

import viewPurestandard1 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg";
import viewPurestandard2 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg";
import viewPurestandard3 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg";

import viewPureDinamica1 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg";
import viewPureDinamica2 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg";
import viewPureDinamica3 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg";

import viewLegendBlack1 from "../asset/configurateur/interieurs/vues/cuir-noir-1.jpg";
import viewLegendBlack2 from "../asset/configurateur/interieurs/vues/cuir-noir-2.jpg";
import viewLegendBlack3 from "../asset/configurateur/interieurs/vues/cuir-noir-3.jpg";

import viewPureBrown1 from "../asset/configurateur/interieurs/vues/cuir-brun-1.jpg";
import viewPureBrown2 from "../asset/configurateur/interieurs/vues/cuir-brun-2.jpg";
import viewPureBrown3 from "../asset/configurateur/interieurs/vues/cuir-brun-3.jpg";

import MediaAndNavigatiion from './MediaAndNavigation'

function DesignSealing({ choiceCar }) {
  return (
    <div>
      {choiceCar.id === 1 &&
      choiceCar.Sealing.name === "comfort seats in perforated black leather" ? (
        <>
          <img
            src={viewPurestandard1}
            alt=" view sealing standard"
            height={"150px"}
          />
          <img
            src={viewPurestandard3}
            alt=" view sealing standard"
            height={"150px"}
          />
          <img
            src={viewPurestandard2}
            alt=" view sealing standard"
            height={"150px"}
          />
        </>
      ) : null}

      {choiceCar.id === 1 &&
      choiceCar.Sealing.name === "bucket seats in black leatherand dinamica" ? (
        <>
          <img
            src={viewPureDinamica1}
            alt=" view sealing diamantica"
            height={"150px"}
          />
          <img
            src={viewPureDinamica3}
            alt=" view sealing diamantica"
            height={"150px"}
          />
          <img
            src={viewPureDinamica2}
            alt=" view sealing diamantica"
            height={"150px"}
          />
        </>
      ) : null}

      {choiceCar.id === 2 &&
      choiceCar.Sealing.name === "comfort seats in black leather" ? (
        <>
          <img
            src={viewLegendBlack1}
            alt=" view sealing black"
            height={"150px"}
          />
          <img
            src={viewLegendBlack3}
            alt=" view sealing black"
            height={"150px"}
          />
          <img
            src={viewLegendBlack2}
            alt=" view sealing black"
            height={"150px"}
          />
        </>
      ) : null}

      {choiceCar.id === 2 &&
      choiceCar.Sealing.name === "comfort seats in brown leather" ? (
        <>
          <img
            src={viewPureBrown1}
            alt=" view sealing brown"
            height={"150px"}
          />
          <img
            src={viewPureBrown3}
            alt=" view sealing brown"
            height={"150px"}
          />
          <img
            src={viewPureBrown2}
            alt=" view sealing brown"
            height={"150px"}
          />
        </>
      ) : null}
<MediaAndNavigatiion choiceCar={choiceCar}/>
    </div>
  );
}

export default DesignSealing;
