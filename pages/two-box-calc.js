import { Box, Button, Container, HStack, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"

const NumInputs = ({inputVal1, inputVal2, setInputVal1, setInputVal2}) => {

  const onChange1 = (evt) => {
    setInputVal1(evt.target.value)
  }
  const onChange2 = (evt) => {
    setInputVal2(evt.target.value)
  }

  return <>
    <Input {...{onChange: onChange1, type: 'number'}} />
    current val is: {inputVal1}
    <Input {...{onChange: onChange2, type: 'number'}} />
    current val is: {inputVal2}
  </>
}

const Multiplication = ({inputVal1, inputVal2, setOppMultiply}) => {

  const onMultiply = () => {
   setOppMultiply(inputVal1 * inputVal2)
  }
  
  return <>
    <Button {...{onClick: onMultiply}}>X</Button>
  </>
}

const Division = ({inputVal1, inputVal2, setOppDivide}) => {

  const onDivide = () => {
   setOppDivide(inputVal1 / inputVal2)
  }
  
  return <>
    <Button {...{onClick: onDivide}}>/</Button>
  </>
}

const Addition = ({inputVal1, inputVal2, setOppAddition}) => {

  const onAddition = () => {
   setOppAddition(inputVal1 + inputVal2) // cannot get this to add versus concatenate
  }
  
  return <>
    <Button {...{onClick: onAddition}}>+</Button>
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
  const [multiplyResults, setOppMultiply] = useState()
  const [divisionResults, setOppDivide] = useState()
  const [additionResults, setOppAddition] = useState()

  return <Container {...{bg:'pink', p: 5, color: 'black'}}>
    <Box {...{align: 'center', p: 5}}>
      <Heading>My Calculator</Heading>
      <Text>Type in the two numbers you want to calculate with then select an opperator to be displayed</Text>
    </Box>
    <NumInputs {...{inputVal1, inputVal2, setInputVal1, setInputVal2}} />
    <br />
    <Box {...{align: 'center'}}>
      <Multiplication {...{inputVal1, inputVal2, setOppMultiply, multiplyResults}} />
      <Division {...{inputVal1, inputVal2, divisionResults, setOppDivide}}/>
      <Addition {...{inputVal1, inputVal2, additionResults, setOppAddition}}/>
    </Box>
    <Box>Your Results are: {multiplyResults}{divisionResults}{additionResults}</Box>
  </Container>
}