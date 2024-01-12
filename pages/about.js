import { Box, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

const tomatoAttrs = {bg: 'tomato', height: '80px'}

const TomatoBox = () => {
  return <Box bg='tomato' height='80px'></Box>
}

export default function About() {
  // return <SimpleGrid columns={2} spacing={10}>

  return <SimpleGrid {...{columns: 2, spacing: 10}}>
    <Box {...{bg: 'tomato', height: '80px'}}></Box>
    <Box {...tomatoAttrs}></Box>
    <TomatoBox />
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
}