import { Button, Container, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"




export default function TempButtonConversionCalc() {
  return <Container {...{align: 'center'}}>
    <Heading>Temp Conversion Calculator</Heading>
    <TempInner />
  </Container>
}

//The ConversionButton was created to house all of the shared code from the input & output componenets defined on lines 27 & 33. This conversion button tells you if a button is selected or not and changes the colorScheme between facebook (not selected) or orange (selected)
const ConversionButton = ({onClick, unitVal, colorScheme, isSelected}) => {
  if (isSelected) {
    colorScheme = 'orange'
  } else {
    colorScheme = 'facebook'
  }
  // still unsure how to define the colors by the clicks
  return <Button {...{onClick, variant: 'solid', border:'solid', m: 2, value: unitVal, colorScheme}}> {unitVal} </Button>
}

//InputTypeButton & OutputTypeButton was defined separately because we needed a button that was not as general as the ConversionButton created on line 16. This was a change that helped with the color selection toggle
const InputTypeButton = ({onClick, unitVal, inputType}) => {
  const isSelected = (inputType == unitVal)

  return <ConversionButton {...{onClick, unitVal, isSelected}}/>
}

const OutputTypeButton = ({onClick, unitVal, outputType}) => {
  const isSelected = (outputType == unitVal)
  // still unsure how to define the colors by the clicks
  return <ConversionButton {...{onClick, unitVal, isSelected}}/>
}

const TempInner = () => {
  const [inputDegrees, setInputDegrees] = useState('') // set to take input degrees from the onChange function
  const [inputType, setInputType] = useState('') // this happens on inputClick to take the unitVal associated with the button (i.e. 'Celsius')
  const [outputType, setOutputType] = useState('') // Similar to input, but with outputClick

  // I had to define output degrees in its own variable because using 3 useState() was all we needed to collect information from the user
  // Defining this variable allowed for me to call it later on on line 113
  let outputDegrees = inputDegrees 
  
  // evt.target.value --> very important for taking input data and puting it into a variable
    // evt --> and event happened (i.e. the click of one of the keys in an input box)
    // .target --> identfier???? Not sure why this is here, but without it this won't work
    // .value --> this can be defined in a component. On line 23 you see value: unitVal and unitVal is what is taken in on the input or output clicks for this particular example.

  const onChange = (evt) => {
    setInputDegrees(_.toNumber(evt.target.value)) // taking data from input line
  }
  
  // taking the unitVal from our output and input buttons
  const inputClick = (evt) => { 
    setInputType(evt.target.value) 
  }

  const outputClick = (evt) => {
    setOutputType(evt.target.value)
  }

  // Conversion functions (helpful when using a bunch of times, but not necessary. I could have put these directly into my if statements)
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

  //Tells the program based on what is defined by my clicks which of the functions do I want it to run
    // It will set the output of that function to the defined variable outputDegrees (defined on line 46)
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

  // this function is useful for reloading the whole page, but not useful for reseting independent items (called this variable on line 133)
  const refreshPage = () => {
    window.location.reload(false)
  }

  // You could imagine the text below as being pasted when I call this component. This is like code's version of copy and paste
  return <Container>
    <Input {...{placeholder: 'Input number to convert', onChange}}/>
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
      {outputType && <Container {...{border: 'solid', p: 10, bg: 'gray', fontSize: 20, color: 'white'}}>{_.round(outputDegrees, 3)} Degrees {outputType}
      </Container>}
      <Button {...{onClick: refreshPage, mt: 2, minW: '100%'}}>Refresh</Button>
  </Container>
}