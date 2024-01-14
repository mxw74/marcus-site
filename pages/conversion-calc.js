import { Box, Button, color, Input, InputRightAddon, Text, Link, Container } from "@chakra-ui/react"
import _ from "lodash"
import { useState } from "react"

const MyHeader = () => {
  return <Text {...{fontSize:'26px', align:'center', color:'white'}}>Conversion Calculator App</Text>
}

const NumInput = () => {
  <input {...{type:'number', placeholder:'input goes here'}}/>
}

const kelvinToCelsius = (num) => {
  return num - 273
}

export const TemperaturePage = () => {
  const [degreesKelvin, setDegreesKelvin] = useState()

  const onChange = (evt) => {
    console.log('input event', evt)

    setDegreesKelvin(_.toNumber(evt.target.value))
  }

  return <Box {...{margin:"20px", bg:"white"}}>
    <label> Degrees Kelvin to Convert: </label>
    <input {...{type:'number', placeholder:'input goes here', onChange}}/>

    {degreesKelvin && <Text>{degreesKelvin} degrees Kelvin is {kelvinToCelsius(degreesKelvin)} degrees Celsius
    </Text>}
  </Box>
}

export default function ConversionCalc() {
  return <Box {...{bg: 'blue', padding: 2}}>
    <MyHeader/>
    <NumInput/>
    <TemperaturePage />
  </Box>
}