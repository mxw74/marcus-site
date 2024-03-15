import { Box, Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"

export default function TempButtonConversionCalc() {
  return <Container {...{align: 'center'}}>
    <Heading>Temp Conversion Calculator</Heading>
    <TempInner />
  </Container>
}

// round output degrees
// shared component returned by both input output buttons
// reset conversions button



const OutputTypeButton = ({onClick, unitVal, shadow, colorScheme, outputType}) => {
  const isSelected = (outputType == unitVal)

  if (isSelected) {
    colorScheme = 'orange'
  } else {
    colorScheme = 'facebook'
  }
  // still unsure how to define the colors by the clicks
  return <Button {...{onClick, variant: 'solid', border:'solid', m: 2, shadow, value: unitVal, colorScheme}}> {unitVal} </Button>
}


const InputTypeButton = ({onClick, unitVal, shadow, colorScheme, inputType}) => {
  const isSelected = (inputType == unitVal)

  if (isSelected) {
    colorScheme = 'orange'
  } else {
    colorScheme = 'facebook'
  }
  // still unsure how to define the colors by the clicks
  return <Button {...{onClick, variant: 'solid', border:'solid', m: 2, shadow, value: unitVal, colorScheme}}> {unitVal} </Button>
}

const TempInner = () => {
  const [inputDegrees, setInputDegrees] = useState('')
  const [inputType, setInputType] = useState('')
  const [outputType, setOutputType] = useState('')

  // const [isSelected, setSelected] = useState('facebook')
  let outputDegrees = inputDegrees





  const onChange1 = (evt) => {
    setInputDegrees(_.toNumber(evt.target.value))
  }
  
  const inputClick = (evt) => { 
    setInputType(evt.target.value)
  }

  const outputClick = (evt) => {
    setOutputType(evt.target.value)
  }

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

  if (inputType == outputType) {
    outputDegrees = inputDegrees
  } if (inputType == 'Celsius' && outputType == 'Fahrenheit') {
    outputDegrees = celsiusToFahrenheit(inputDegrees)
  } if (inputType == 'Celsius' && outputType == 'Kelvin') {
    outputDegrees = celsiusToKelvin(inputDegrees)
  } if (inputType == 'Fahrenheit' && outputType == 'Celsius') {
    outputDegrees = fahrenheitToCelsius(inputDegrees)
  } if (inputType == 'Fahrenheit' && outputType == 'Kelvin') {
    outputDegrees = fahrenheitToKelvin(inputDegrees)
  } if (inputType == 'Kelvin' && outputType == 'Fahrenheit') {
    outputDegrees = kelvinToFarenheit(inputDegrees)
  } if (inputType == 'Kelvin' && outputType == 'Celsius') {
    outputDegrees = kelvinToCelsius(inputDegrees)
  }

  return <Container>
    <Input {...{placeholder: 'Input number to convert', onChange: onChange1}}/>
    {inputType && <Container>
      {inputDegrees} Degrees {inputType}
    </Container>}
    <Container>
      <InputTypeButton {...{onClick: inputClick, unitVal: 'Celsius', inputType}}/>
      <InputTypeButton {...{onClick: inputClick, unitVal: 'Fahrenheit', inputType}}/>
      <InputTypeButton {...{onClick: inputClick, unitVal: 'Kelvin', inputType}}/>
    </Container>
    Converted To
    <Container>
      <OutputTypeButton {...{onClick: outputClick, unitVal: 'Celsius', outputType}}/> 
      <OutputTypeButton {...{onClick: outputClick, unitVal: 'Fahrenheit', outputType}}/>
      <OutputTypeButton {...{onClick: outputClick, unitVal: 'Kelvin', outputType}}/>
    </Container>
      {outputType && <Container {...{border: 'solid', p: 10, bg: 'gray', fontSize: 20, color: 'white'}}>{outputDegrees} Degrees {outputType}
      </Container>}
  </Container>
}