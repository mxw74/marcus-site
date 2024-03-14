import { Box, Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"

export default function TempButtonConversionCalc() {
  return <Container {...{align: 'center'}}>
    <Heading>Temp Conversion Calculator</Heading>
    <TempInner />
  </Container>
}

const TempInner = () => {
  const [inputDegrees, setInputDegrees] = useState('')
  const [inputType, setInputType] = useState('')
  const [outputType, setOutputType] = useState('')
  let outputDegrees = inputDegrees

  const ConversionButton = ({onClick, unitVal, shadow, colorScheme}) => {
    // if (unitVal == 'Celsius') {
    //   colorScheme = 'orange'
    // }
    // still unsure how to define the colors by the clicks
    return <Button {...{onClick, colorScheme, variant: 'solid', border:'solid', m: 2, shadow, value: unitVal}}>{unitVal}</Button>
  }

  const onChange1 = (evt) => { // I am not able to update this more than a single number at a time (seems to be a bug)
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
      outputDegrees = celsiusToFahrenheit(outputDegrees)
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
      {inputDegrees} {inputType}
    </Container>}
    <Container>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Celsius', colorScheme: 'facebook'}}/>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: inputClick, unitVal: 'Kelvin'}}/>
    </Container>
    Converted To
    <Container>
        <ConversionButton {...{onClick: outputClick, unitVal: 'Celsius'}}/> 
        <ConversionButton {...{onClick: outputClick, unitVal: 'Fahrenheit'}}/>
        <ConversionButton {...{onClick: outputClick, unitVal: 'Kelvin'}}/>
    </Container>
      {outputType && <Container {...{m: 10, border: 'solid', p: 10, bg: 'gray', fontSize: 20, color: 'white'}}>{outputDegrees} {outputType}
      </Container>}
  </Container>
}










/// OLD CODE BEYOND THIS POINT KEPT FOR LEARNING PURPOSES

// import { Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
// import { useState } from "react"
// import _ from "lodash"

// //Homework 
// // only 3 usestates 
// // highlight which button is selected (visually see which input & output is clicked)
// // remove complete calculation button (as long as input degrees and type and selected output temp type then it should just spit out the answer) -- DONE 

// const NumInput = ({placeholder, onChange}) => {
//   return <Input {...{placeholder, onChange, name: 'numberInput'}}></Input>
// }

// const ConversionButton = ({onClick, unitVal, shadow, colorScheme}) => {
  
//   // if (unitVal == 'Celsius') {
//   //   colorScheme = 'orange'
//   // }
//   return <Button {...{onClick, colorScheme, variant: 'solid', border:'solid', m: 2, shadow, value: unitVal}}>{unitVal}</Button>
// }

// // The only use states I need are the user input ones 
//     // Input Degrees
//     // Input Type
//     // Output Type

// export default function TempButtonConversionCalc() {
//   // const [outputDegrees, setOutputDegrees] = useState()
//   const [inputDegrees, setInputDegrees] = useState('')
//   const [inputType, setInputType] = useState('undefined units')
//   const [outputType, setOutputType] = useState('undefined units')
//   let outputDegrees = inputDegrees
//   const onChange1 = (evt) => {
//     setInputDegrees(_.toNumber(evt.target.value))
//   }
  
//   const inputClick = (evt) => { 
//     setInputType(evt.target.value) // if I was able to change this to be a toggle for the color versus projecting the value on the scren then that could allow me to do the changes requested
//     // It would be a different usestate maybe a setColorScheme, isColorScheme
//     // might run into issues with output type 
//     // The only use states I need are the ones neccessary 
//         // 
//   }

//   const outputClick = (evt) => {
//     setOutputType(evt.target.value)
//     completeCalc()
//   }

//   // would it be possible to set the output type and use the if statements to return the text? 

//   const completeCalc = () => { 

//     const fahrenheitToCelsius = (f) => {
//       return (f - 32) * (5/9)
//     }
    
//     const fahrenheitToKelvin = (f) => {
//       return (f - 32) * 5/9 + 273.15
//     }
    
//     const celsiusToFahrenheit = (c) => {
//       return (c * 9/5) + 32 
//     }
    
//     const celsiusToKelvin = (c) => {
//       return c + 273.15
//     }
    
//     const kelvinToCelsius = (k) => {
//       return k - 273
//     }
    
//     const kelvinToFarenheit = (k) => {
//       return (k - 273.15) * 1.8 + 32
//     }

//     if (inputType == outputType) {
//         // setOutputDegrees(inputDegrees)
//         {inputDegrees && inputDegrees} // cannot get this one to work
//     } if (inputType == 'Celsius' && outputType == 'Fahrenheit') {
//         // return celsiusToFahrenheit(inputDegrees) + ' degrees Fahrenheit'
//         outputDegrees = celsiusToFahrenheit(outputDegrees)
//         // setOutputDegrees(celsiusToFahrenheit(inputDegrees))
//     } if (inputType == 'Celsius' && outputType == 'Kelvin') {
//         return celsiusToKelvin(inputDegrees)
//         // setOutputDegrees(celsiusToKelvin(inputDegrees))
//     } if (inputType == 'Fahrenheit' && outputType == 'Celsius') {
//         return fahrenheitToCelsius(inputDegrees)
//         // setOutputDegrees(fahrenheitToCelsius(inputDegrees))
//     } if (inputType == 'Fahrenheit' && outputType == 'Kelvin') {
//         return fahrenheitToKelvin(inputDegrees)
//         // setOutputDegrees(fahrenheitToKelvin(inputDegrees))
//     } if (inputType == 'Kelvin' && outputType == 'Fahrenheit') {
//         return kelvinToFarenheit(inputDegrees)
//         // setOutputDegrees(kelvinToFarenheit(inputDegrees))
//     } if (inputType == 'Kelvin' && outputType == 'Celsius') {
//         return kelvinToCelsius(inputDegrees)
//         // setOutputDegrees(kelvinToCelsius(inputDegrees))
//     }
//   }

//   return <Container {...{align: 'center'}}>
//     <Heading>Conversion Calculator with Buttons</Heading>
//     <HStack>
//       <NumInput {...{placeholder: 'Input goes here', onChange: onChange1}}/> 
//       <Text {...{w: '50%'}}>Degrees</Text>
//     </HStack>
//       <Container>
//         <ConversionButton {...{onClick: inputClick, unitVal: 'Celsius', colorScheme: 'facebook'}}/>
//         <ConversionButton {...{onClick: inputClick, unitVal: 'Fahrenheit'}}/>
//         <ConversionButton {...{onClick: inputClick, unitVal: 'Kelvin'}}/>
//       </Container>
//       {inputDegrees && <Text>Your Input Value is set to: {inputDegrees} degrees {inputType}
//       </Text>}
//       <Text>Select the conversion you would like to complete</Text>
//       <Container>
//         <ConversionButton {...{onClick: outputClick, unitVal: 'Celsius'}}/> 
//         <ConversionButton {...{onClick: outputClick, unitVal: 'Fahrenheit'}}/>
//         <ConversionButton {...{onClick: outputClick, unitVal: 'Kelvin'}}/>
//       </Container>     
//     {outputType == 'Celsius' && <Text> {outputDegrees} {/*I want it to complete the calculation right here */} {outputType}</Text>} 
//     {outputType == 'Fahrenheit' && <Text>{outputDegrees} {outputType}</Text>} 
//     {outputType == 'Kelvin' && <Text>{outputDegrees} {outputType}</Text>}    
//   </Container>
// }

