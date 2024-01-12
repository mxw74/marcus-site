import { Box, Container, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { _ } from 'lodash'

// const numClicked = ['C', '+/-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']



const NumButn = ({numClicked}) => {

  return <Button {...{p: 2.5, fontWeight: 'bolder', color: 'white', bg: 'darkgray', border: 'solid gray', align: 'center', hover: 'white'}}>
    {numClicked}
  </Button>

}

const NumberGrid = () => {
  return  <Container {...{rounded: 'full', bg: '', maxW: '50%'}}>
    <Box {...{shadow: 'dark-lg'}}>
      <Box {...{bg: 'black', h: '85px', shadow: 'dark-lg', roundedTop: '2xl', color: 'white'}}>
        <Text {...{align: 'center', }}>Numbers Show Here</Text>
      </Box>
      <SimpleGrid {...{columns: 4, rows: 5}}>
        <NumButn {...{numClicked: 'C'}}/>
        <NumButn {...{numClicked: '+/-'}}/>
        <NumButn {...{numClicked: '%'}}/>
        <NumButn {...{numClicked: '/'}}/>
        <NumButn {...{numClicked: 7}}/>
        <NumButn {...{numClicked: 8}}/>
        <NumButn {...{numClicked: 9}}/>
        <NumButn {...{numClicked: 'X'}}/>
        <NumButn {...{numClicked: 4}}/>
        <NumButn {...{numClicked: 5}}/>
        <NumButn {...{numClicked: 6}}/>
        <NumButn {...{numClicked: '-'}}/>
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