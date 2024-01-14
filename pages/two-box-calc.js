import { Box, Button, Container, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react"


const InputOne = () => {
  return <Input {...{type: 'number', bg: 'white'}}/>
}

const InputTwo = () => {
  return <Input {...{type: 'text', bg: 'white'}}/>
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


export default function Calculator() {
  return <Container {...{bg:'black', p: 5}}>
    <Box {...{color: 'white', align: 'center', p: 5}}>
      <Heading>My Calculator</Heading>
      <Text>Type in the two numbers you want to calculate with then select an opperator to be displayed</Text>
    </Box>
    <InputOne />
    <Opperators />
    <InputTwo />
  </Container>
}