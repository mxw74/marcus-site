import { Box, Container, SimpleGrid, Text, Button, Input } from "@chakra-ui/react";
import { _ } from 'lodash'
import { useState } from "react";

// const numClicked = ['C', '+/-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

// one button selected and only see one output 
// reset calculations and selected buttons



const NumButn = ({numClicked, onClick, border}) => {

  return <Button {...{p: 2.5, fontWeight: 'bolder', color: 'white', bg: 'darkgray', border, align: 'center', hover: 'white', onClick, value: numClicked}}>
    {numClicked}
  </Button>

}



const NumberGrid = () => {
  const [val, setVal] = useState("")
  const onClick = (e) => {
    console.log(e)
    setVal(val + e.target.value)
  }

  return  <Container {...{rounded: 'full', bg: '', maxW: '50%'}}>
    <Box {...{shadow: 'dark-lg'}}>
      {val}
      <Input {...{type: 'text'}} />
      <SimpleGrid {...{columns: 4, rows: 5}}>
        <NumButn {...{numClicked: 'C', onClick}}/>
        <NumButn {...{numClicked: '+/-', onClick}}/>
        <NumButn {...{numClicked: '%', onClick}}/>
        <NumButn {...{numClicked: '/', onClick}}/>
        <NumButn {...{ numClicked: 7, border: 'solid gray', onClick }} />
        <NumButn {...{numClicked: 8, onClick}}/>
        <NumButn {...{numClicked: 9, onClick}}/>
        <NumButn {...{numClicked: 'X', onClick}}/>
        <NumButn {...{numClicked: 4, onClick}}/>
        <NumButn {...{numClicked: 5, onClick}}/>
        <NumButn {...{numClicked: 6, onClick}}/>
        <NumButn {...{numClicked: '-', onClick}}/>
        <NumButn {...{numClicked: 1}}/>
        <NumButn {...{numClicked: 2}}/>
        <NumButn {...{numClicked: 3}}/>
        <NumButn {...{numClicked: '+'}}/>
        <NumButn {...{numClicked: 0}}/>
        <NumButn {...{numClicked: 0}}/>
        <NumButn {...{numClicked: '.'}}/>
        <NumButn {...{numClicked: '='}}/>
      </SimpleGrid>
    </Box>
  </Container>
}

export default function Calculator() {

  return <Box>
    <NumberGrid></NumberGrid>
  </Box>
}