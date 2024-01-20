import { Box, Button, Container, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"


const InputOne = () => {
  const [inputVal1, setInputVal1] = useState()
  const [inputVal2, setInputVal2] = useState()
  const onChange = (evt) => {
    if (Input.input1 > 0 ) {
    setInputVal1(evt.target.value)
    } else {
    setInputVal2(evt.target.value)
    }
  }

  return <>
    <Input {...{onChange, className: 'input1', type: 'number'}} />
    current val is: {inputVal1}
    <Input {...{onChange, className: 'input2'}} />
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


const Opperators = ({onClick, value, oppSelected}) => {

  return <Container {...{align: 'center'}}>
    <SimpleGrid {...{display: 'inline'}}>
      <OppButn {...{onClick, oppSelected: 'X'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '/'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '+'}}>{oppSelected}</OppButn>
      <OppButn {...{onClick, oppSelected: '-'}}>{oppSelected}</OppButn>
    </SimpleGrid>
  </Container>
}


export default function Calculator({val}) {
  return <Container {...{bg:'pink', p: 5, color: 'black'}}>
    <Box {...{align: 'center', p: 5}}>
      <Heading>My Calculator</Heading>
      <Text>Type in the two numbers you want to calculate with then select an opperator to be displayed</Text>
      <Box>{val}</Box>
    </Box>
    <InputOne />
    <Opperators />
    <InputTwo />
  </Container>
}