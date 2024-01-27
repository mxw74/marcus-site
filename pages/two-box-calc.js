import { Box, Button, Container, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"

// const SheaInput = () => {
//   const [inputVal, setInputVal] = useState()
//   const onChange = (evt) => {
//     setInputVal(evt.target.value)
//   }

//   return <>
//     <Input {...{onChange}} />
//     current val is: {inputVal}
//   </>
// }

// const SheaInput2 = () => {
//   const [inputVal, setInputVal] = useState()
//   const onChange = (evt) => {
//     setInputVal(evt.target.value)
//   }

//   return <>
//     <Input {...{onChange}} />
//     current val is: {inputVal}
//   </>
// }


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
    <Input {...{onChange: onChange2}} />
    current val is: {inputVal2}
  </>
  // const [val, setVal] = useState()
  // const handleChange = (event) => setVal(event.target.val)
  // console.log(val)


  // return <Input {...{type: 'number', bg: 'white', value: val, onChange: handleChange}}/>

}

const InputTwo = () => {
  return <Input {...{type: 'number', bg: 'white'}}/>
}

{/* <Button {...{p: 2.5, fontWeight: 'bolder', color: 'white', bg: 'darkgray', border, align: 'center', hover: 'white', onClick, value: numClicked}}>
    {numClicked}
  </Button> */}

const OppButn = ({onClick, oppSelected}) => {
  onClick = () => {
    console.log({oppSelected})
  }

  return <Button {...{onClick, value: oppSelected, m: 5}}>
  {oppSelected}
</Button>
}


const Opperators = ({onClick, oppSelected}) => {

  return <Container {...{align: 'center'}}>
    <SimpleGrid {...{display: 'inline'}}>
      <OppButn {...{onClick, oppSelected: 'X'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '/'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '+'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '-'}}>{oppSelected}</OppButn>
    </SimpleGrid>
  </Container>
}


export default function Calculator() {
  const [inputVal1, setInputVal1] = useState()
  const [inputVal2, setInputVal2] = useState()

  return <Container {...{bg:'pink', p: 5, color: 'black'}}>
    <Box {...{align: 'center', p: 5}}>
      <Heading>My Calculator</Heading>
      <Text>Type in the two numbers you want to calculate with then select an opperator to be displayed</Text>
    </Box>
    <NumInputs {...{inputVal1, inputVal2, setInputVal1, setInputVal2}} />
    <Opperators />
  </Container>
}