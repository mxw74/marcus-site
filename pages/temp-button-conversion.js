import { Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"


const fahrenheitToCelsius = (f) => {
  return (f - 32) * (5/9)
}

const fahrenheitToKelvin = (f) => {
  return (f - 32) * 5/9 + 273.15
}

const celsiusToFahrenheit = (c) => {
  return (c * 9/5) + 32
}

const celsiusToKelvin = (c) => {
  return c + 273.15
}

const kelvinToCelsius = (k) => {
  return k - 273
}

const kelvinToFarenheit = (k) => {
  return (k - 273.15) * 1.8 + 32
}

const NumInput = ({placeholder, onChange}) => {
  return <Input {...{placeholder, onChange}}></Input>
}

const ConversionButton = ({onClick, orginVal, shadow}) => {
  return <Button {...{onClick, colorScheme: 'facebook', variant: 'solid', border:'solid', m: 2, shadow, value: orginVal}}>{orginVal}</Button>
}

export default function TempButtonConversionCalc() {
  const [val, setVal] = useState("")
  const [degrees, setDegrees] = useState(0)
  const [inputType, setInputType] = useState('')

  const onChange1 = (evt) => {
    setDegrees(_.toNumber(evt.target.value))
  }

  //i need to click the button and for it to register which button it clicked, take the text on the button, and move it to another location

  const onClick1 = (evt) => {
    setVal(degrees + ' degrees ' + inputType)
    setInputType(evt.target.value)    
  }


  return <Container {...{align: 'center'}}>
    <Heading>Conversion Calculator with Buttons</Heading>
    <NumInput {...{placeholder: 'Input goes here', onChange: onChange1}}/>
      <Container>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Celsius'}}/>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Kelvin'}}/>
      </Container>
      <Text>Your Input Value is set to: {val} </Text>
      <Text>Select the conversion you would like to complete</Text>
      <Container>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Celsius'}}/>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: onClick1, orginVal: 'Kelvin'}}/>
      </Container>
    

    
    <Text>Your output value has been converted to: blaze degrees blaze</Text>

    
  </Container>
}

