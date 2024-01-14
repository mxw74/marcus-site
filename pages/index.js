import { Box, Button, color, Input, InputRightAddon, Text } from "@chakra-ui/react"
import _ from "lodash"
import Script from "next/script"
import { useState } from "react"
import Link from "next/link" // use this one


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

export default function Home() {
  return <Box {...{bg: 'blue', padding: 2}}>
    <MyHeader/>
    <NumInput/>
    <TemperaturePage />
  </Box>
}