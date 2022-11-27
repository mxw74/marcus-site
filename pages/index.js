import { Box, Button, Text } from "@chakra-ui/react"

export const MyHeader = () => {
  return <Box {...{padding: 5, bg: 'orange'}}>
    <Button {...{colorScheme: 'blue'}}>Yo its button</Button>
  </Box>
}

export default function Home() {
  return <Box {...{bg: 'blue', padding: 2}}>
    <MyHeader />
  </Box>
}
test 