import React from 'react'

import alpineTelemetrics from '../asset/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg'

import focalAudioSystem from '../asset/configurateur/equipements/categories/media et navigation/audio-focal.jpg'

import focalPremiumAudioSystem from '../asset/configurateur/equipements/categories/media et navigation/audio-premium.jpg'

import standardAudioSystem from '../asset/configurateur/equipements/categories/media et navigation/audio-standard.jpg'
import { useDispatch } from 'react-redux'
import { changeMedia } from '../feactures/alpine/AlpineSlice'
import Comfort from './Comfort'

function MediaAndNavigation({choiceCar}) {
    
    const dispatch = useDispatch();
    const handlemedia =(name,price)=> {
        dispatch(
            changeMedia({
            idCar : choiceCar.id,
            name: name,
            price: price
        }))

    }
  return (
    <div>
        <img src={standardAudioSystem} alt="standard audio system" height={'150px'}onClick={()=>handlemedia('standard audio system', 0)}/>
        <p>standard audio system</p>
        <p>price 0</p>

        <img src={alpineTelemetrics} alt="alpine Telemetrics" height={'150px'}onClick={()=>handlemedia('alpine telemetrics', 204)}/>
        <p>alpine Telemetrics</p>
        <p>price 204</p>

        <img src={focalAudioSystem} alt="focalAudioSystem" height={'150px'}onClick={()=>handlemedia('focal audio system', 600)}/>
        <p>focal audio system</p>
        <p>price 600</p>
        
        <img src={focalPremiumAudioSystem} alt="focal premium audio system" height={'150px'}onClick={()=>handlemedia('focal premium audio system', 1200)}/>
        <p>focal premium audio system</p>
        <p>price 1200</p>
    <Comfort choiceCar={choiceCar}/>
    </div>
  )
}

export default MediaAndNavigation