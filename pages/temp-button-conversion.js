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
  const [outputType, setOutputType] = useState('') // added to set the output type of 

  const onChange1 = (evt) => {
    setDegrees(_.toNumber(evt.target.value))
  }

  //i need to click the button and for it to register which button it clicked, take the text on the button, and move it to another location

  const inputClick = (evt) => {
    setInputType(evt.target.value)
    setVal(degrees + ' degrees ' + inputType)
  }

  const outputClick = (evt) => {
    setOutputType(evt.target.value) // I need this to set the string value that it is going to convert too on the second button (labled orginVal)
    setVal(degrees + ' degrees ' + outputType) // I need this to know which conversion I want it to complete and take degrees as an input and put it into my conversion functions to put out a new output 
    // I feel I need to use the useState && type function, but my brain cannot imagine how to use it atm
    // I then need for the set val function to complete to conversion from the val that was taken in earlier to the output that converts that to the new designated value

  }


  return <Container {...{align: 'center'}}>
    <Heading>Conversion Calculator with Buttons</Heading>
    <NumInput {...{placeholder: 'Input goes here', onChange: onChange1}}/>
      <Container>
        <ConversionButton {...{onClick: inputClick, orginVal: 'Celsius'}}/>
        <ConversionButton {...{onClick: inputClick, orginVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: inputClick, orginVal: 'Kelvin'}}/>
      </Container>
      <Text>Your Input Value is set to: {val} </Text>
      <Text>Select the conversion you would like to complete</Text>
      <Container>
        <ConversionButton {...{onClick: outputClick, orginVal: 'Celsius'}}/> {/* These should not be orgin val versus output val or maybe these should just be val in general of any button to simplify this statement */}
        <ConversionButton {...{onClick: outputClick, orginVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: outputClick, orginVal: 'Kelvin'}}/>
      </Container>
    

    
    <Text>Your output value has been converted to: {val}</Text>

    
  </Container>
}

