import { Box, Container, Input } from "@chakra-ui/react"
import { useState } from "react"

const fahrenheitToCelsius = (num) => {
  return (num - 32) * (5/9)
}

const fahrenheitToKelvin = (num) => {
  return (num - 32) * (5/9) + 273.15
}

const celsiusToFahrenheit = (num) => {
  return (num * 9/5) + 32
}

const celsiusToKelvin = (num) => {

}

const kelvinToCelsius = (num) => {
  return num - 273
}

const kelvinToFarenheit = (num) => {

}



const NumInput = () => {
  return <Input {...{type:'number', placeholder:'input goes here'}}/>
}

export default function TempConversionCalc() {
  const [degreesFahrenheit, setDegreesFahrenheit] = useState()
  const [degreesKelvin, setDegreesKelvin] = useState()
  const [degreesCelsius, setDegreesCelcius] = useState()
  console.log(fahrenheitToCelsius(32) + ' f to c')
  console.log(fahrenheitToKelvin(0) + ' f to k')
  console.log(celsiusToFahrenheit() + 'c to f')
  console.log(celsiusToKelvin() + ' c to k')
  console.log(kelvinToCelsius() + ' k to c')
  console.log(kelvinToFarenheit() + ' k to f')

  return <Container>
    <NumInput />
    <Box> F to C results: {fahrenheitToCelsius(degreesFahrenheit)}</Box>

  </Container>
}