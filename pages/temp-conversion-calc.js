import { Box, Button, Container, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"

const NumInput = ({setInputVal}) => {

  const onChange1 = (evt) => {
    setInputVal(_.toNumber(evt.target.value))
  }

  return <Input {...{type:'number', placeholder:'input goes here', onChange: onChange1}}/>
}

export default function TempConversionCalc() {
  const [inputVal, setInputVal] = useState(0)

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

  const p = 5
  const my = 5

  return <Container {...{align: 'center'}}>
    <Heading>Kelvin to Fahrenheit to Celsius Conversion Calc</Heading>
    <Text {...{my}}>Input a value you would like to convert and allow the code to do the work.</Text>
    <NumInput {...{inputVal, setInputVal}}/>
    <br />
    <br />
    <Box>
      <Heading {...{fontSize: '20px', my}}>Conversion Results:</Heading>
      <SimpleGrid {...{columns: 2, rows: 6, border: 'solid'}}>
        <Text {...{border: 'solid', p}}>Fahrenheit to Celsius</Text>
        <Text {...{border: 'solid', p}}>{fahrenheitToCelsius(inputVal) + ' C'}</Text>
        <Text {...{border: 'solid', p}}>Fahrenheit to Kelvin</Text>
        <Text {...{border: 'solid', p}}>{fahrenheitToKelvin(inputVal) + ' K'}</Text>
        <Text {...{border: 'solid', p}}>Celsius to Fahrenheit</Text>
        <Text {...{border: 'solid', p}}>{celsiusToFahrenheit(inputVal) + ' F'}</Text>
        <Text {...{border: 'solid', p}}>Celsius to Kelvin</Text>
        <Text {...{border: 'solid', p}}>{celsiusToKelvin(inputVal) + ' K'}</Text>
        <Text {...{border: 'solid', p}}>Kelvin to Fahrenheit</Text>
        <Text {...{border: 'solid', p}}>{kelvinToFarenheit(inputVal) + ' F'}</Text>
        <Text {...{border: 'solid', p}}>Kelvin to Celsius</Text>
        <Text {...{border: 'solid', p}}>{kelvinToCelsius(inputVal) + ' C'}</Text>
      </SimpleGrid>
    </Box>

  </Container>
}