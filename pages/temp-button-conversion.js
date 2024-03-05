import { Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"

//Homework 
// only 3 usestates 
// highlight which button is selected (visually see which input & output is clicked)
// remove complete calculation button (as long as input degrees and type and selected output temp type then it should just spit out the answer)

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

const ConversionButton = ({onClick, unitVal, shadow}) => {
  let colorScheme = 'facebook'
  if (unitVal == 'Celsius') {
    colorScheme = 'orange'
  }
  return <Button {...{onClick, colorScheme, variant: 'solid', border:'solid', m: 2, shadow, value: unitVal}}>{unitVal}</Button>
}

export default function TempButtonConversionCalc() {
  const [outputDegrees, setOutputDegrees] = useState()
  const [inputDegrees, setInputDegrees] = useState(0)
  const [inputType, setInputType] = useState('undefined units')
  const [outputType, setOutputType] = useState('undefined units')

  const onChange1 = (evt) => {
    setInputDegrees(_.toNumber(evt.target.value))
  }
  
  const inputClick = (evt) => { 
    setInputType(evt.target.value)
  }

  const outputClick = (evt) => {
    // setOutputType(evt.target.value) // I need to move this and the if statements apart, but I cannot think of where to put the if statements
  }

  const completeCalc = () => {
    if (inputType == outputType) {
      setOutputDegrees(inputDegrees)
    } if (inputType == 'Celsius' && outputType == 'Fahrenheit') {
      setOutputDegrees(celsiusToFahrenheit(inputDegrees))
    } if (inputType == 'Celsius' && outputType == 'Kelvin') {
      setOutputDegrees(celsiusToKelvin(inputDegrees))
    } if (inputType == 'Fahrenheit' && outputType == 'Celsius') {
      setOutputDegrees(fahrenheitToCelsius(inputDegrees))
    } if (inputType == 'Fahrenheit' && outputType == 'Kelvin') {
      setOutputDegrees(fahrenheitToKelvin(inputDegrees))
    } if (inputType == 'Kelvin' && outputType == 'Fahrenheit') {
      setOutputDegrees(kelvinToFarenheit(inputDegrees))
    } if (inputType == 'Kelvin' && outputType == 'Celsius') {
      setOutputDegrees(kelvinToCelsius(inputDegrees))
    }
  }

  return <Container {...{align: 'center'}}>
    <Heading>Conversion Calculator with Buttons</Heading>
    <NumInput {...{placeholder: 'Input goes here', onChange: onChange1}}/>
      <Container>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Celsius'}}/>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Kelvin'}}/>
      </Container>
      {inputDegrees && <Text>Your Input Value is set to: {inputDegrees} degrees {inputType}
      </Text>}
      <Text>Select the conversion you would like to complete</Text>
      <Container>
        <ConversionButton {...{onClick: outputClick, unitVal: 'Celsius'}}/> 
        <ConversionButton {...{onClick: outputClick, unitVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: outputClick, unitVal: 'Kelvin'}}/>
      </Container>
      <Container> <Button {...{onClick: completeCalc}}>Complete Calculation</Button></Container>
    

    
    <Text>Your output value has been converted to: {outputDegrees} degrees {outputType}</Text>

    
  </Container>
}

