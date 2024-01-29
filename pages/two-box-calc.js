import { Box, Button, Container, HStack, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"

const NumInputs = ({ setInputVal1, setInputVal2}) => {

  const onChange1 = (evt) => {
    setInputVal1(evt.target.value)
  }
  const onChange2 = (evt) => {
    setInputVal2(evt.target.value)
  }

  return <>
    First Number:
    <Input {...{onChange: onChange1, type: 'number'}} />
    <br />
    <br />
    Second Number:
    <Input {...{onChange: onChange2, type: 'number'}} />
  </>
}

const OppButn = ({oppSelected, onClick}) => {
  return <Button {...{m: 5, variant: 'outline', colorScheme: 'blackAlpha', onClick}}>{oppSelected}</Button>
}

const Multiplication = ({inputVal1, inputVal2, setOppMultiply}) => {

  const onMultiply = () => {
   setOppMultiply(inputVal1 * inputVal2)
  }
  
  return <>
    <OppButn {...{onClick: onMultiply, oppSelected: 'X'}}/>
  </>
}

const Division = ({inputVal1, inputVal2, setOppDivide}) => {

  const onDivide = () => {
   setOppDivide(inputVal1 / inputVal2)
  }
  
  return <>
    <OppButn {...{onClick: onDivide, oppSelected: '/'}} />
  </>
}

const Addition = ({inputVal1, inputVal2, setOppAddition}) => {

  const onAddition = () => {
   setOppAddition(Number(inputVal1) + Number(inputVal2)) // cannot get this to add versus concatenate
  }
  
  return <>
    <OppButn {...{onClick: onAddition, oppSelected: '+'}} />
  </>
}

const Subtraction = ({inputVal1, inputVal2, setOppSubtraction}) => {

  const onSubtraction = () => {
   setOppSubtraction(inputVal1 - inputVal2) // cannot get this to add versus concatenate
  }
  
  return <>
    <OppButn {...{onClick: onSubtraction, oppSelected: '-'}} />
  </>
}


// const OppButn = ({onClick, oppSelected}) => {
//   onClick = () => {
//     console.log({oppSelected})
//   }



//   return <Button {...{onClick, value: oppSelected, m: 5}}>
//   {oppSelected}
// </Button>
// }


// const Opperators = ({onClick, oppSelected}) => {

//   return <Container {...{align: 'center'}}>
//     <SimpleGrid {...{display: 'inline'}}>
//       <OppButn {...{onClick, oppSelected: 'X'}}>{oppSelected}</OppButn>
//       <OppButn {...{onClick, oppSelected: '/'}}>{oppSelected}</OppButn>
//       <OppButn {...{onClick, oppSelected: '+'}}>{oppSelected}</OppButn>
//       <OppButn {...{onClick, oppSelected: '-'}}>{oppSelected}</OppButn>
//     </SimpleGrid>
//   </Container>
// }


export default function Calculator() {
  const [inputVal1, setInputVal1] = useState()
  const [inputVal2, setInputVal2] = useState()
  const [multiplicationResults, setOppMultiply] = useState()
  const [divisionResults, setOppDivide] = useState()
  const [additionResults, setOppAddition] = useState()
  const [subtractionResults, setOppSubtraction] = useState()

  return <Container {...{bg:'pink', p: 5, color: 'black', minW: '100%'}}>
    <Box {...{align: 'center', p: 5}}>
      <Heading>My Calculator</Heading>
      <Text>Type in the two numbers you want to calculate with then select an opperator to be displayed</Text>
    </Box>
    <NumInputs {...{inputVal1, inputVal2, setInputVal1, setInputVal2}} />
    <br />
    <Box {...{align: 'center'}}>
      <Multiplication {...{inputVal1, inputVal2, setOppMultiply, multiplicationResults}} />
      <Division {...{inputVal1, inputVal2, divisionResults, setOppDivide}}/>
      <Addition {...{inputVal1, inputVal2, additionResults, setOppAddition}}/>
      <Subtraction {...{inputVal1, inputVal2, subtractionResults, setOppSubtraction}} />
    </Box>
    <Box>Your Multiplication Results Are: {multiplicationResults}</Box>
    <Box>Your Division Results Are: {divisionResults}</Box>
    <Box>Your Addition Results Are: {additionResults}</Box>
    <Box>Your Subtraction Results Are: {subtractionResults}</Box>
  </Container>
}