import { Container, Heading, Input, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import _ from "lodash"

const NumInput = ({setInputVal}) => {

  const onChange1 = (evt) => {
    setInputVal(_.toNumber(evt.target.value))
  }

  return <Input {...{type:'number', placeholder:'input goes here', shadow: 'sm', onChange: onChange1}}/>
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
  const rounded = '2xl'
  const shadow = '2xl'

  return <Container {...{align: 'center', p: 10, minW: '100%'}}>
    <Stack {...{spacing: 6}}>
      <Heading> Kelvin to Fahrenheit to Celsius Conversion Calc </Heading>
      <Text {...{}}> Input a value you would like to convert and allow the code to do the work. </Text>
      <NumInput {...{inputVal, setInputVal}}/>
        <Heading {...{fontSize: '20px'}}> Conversion Results: </Heading>
        <TableContainer {...{p, rounded, shadow}}>
          <Table {...{variant: 'striped', colorScheme: 'blue'}}>
            <Thead>
              <Tr>
                <Th> Conversion To Be Completed </Th>
                <Th> Output </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> {inputVal} degrees Fahrenheit to Celsius </Td>
                <Td> {fahrenheitToCelsius(inputVal) + ' C'} </Td>
              </Tr>
              <Tr>
                <Td> {inputVal} degrees Fahrenheit to Kelvin </Td>
                <Td> {fahrenheitToKelvin(inputVal) + ' K'} </Td>
              </Tr>
              <Tr>
                <Td> {inputVal} Celsius to Fahrenheit </Td>
                <Td> {celsiusToFahrenheit(inputVal) + ' F'} </Td>
              </Tr>
              <Tr>
                <Td> {inputVal} Celsius to Kelvin </Td>
                <Td> {celsiusToKelvin(inputVal) + ' K'} </Td>
              </Tr>
              <Tr>
                <Td> {inputVal} Kelvin to Fahrenheit </Td>
                <Td> {kelvinToFarenheit(inputVal) + ' F'} </Td>
              </Tr>
              <Tr>
                <Td> {inputVal} Kelvin to Celsius </Td>
                <Td> {kelvinToCelsius(inputVal) + ' C'} </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
    </Stack>
  </Container>
}