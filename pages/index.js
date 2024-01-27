import { Box, Button, color, Input, InputRightAddon, Text, Link, Container, Heading, Stack } from "@chakra-ui/react"
import _ from "lodash"
import { useState } from "react"
// import Link from "next/link" // use this one

export default function Home() {
  return <Container {...{bg: 'none', padding: 2, align: 'center'}}>
    <Heading>My Sites</Heading>
    <Stack>
      <Link {...{href: '../conversion-calc'}}> Conversion Calculator</Link>
      <Link {...{href: '/calculator'}}>Calculator with Buttons</Link>
      <Link {...{href: '/about'}}>About</Link>
      <Link {...{href: '/two-box-calc'}}>Two Field Calculator</Link>
      <Link {...{href: '/temp-conversion-calc'}}>Celsius to Farenheit to Kelvin</Link>
    </Stack>
  </Container>
}
