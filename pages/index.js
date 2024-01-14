import { Box, Button, color, Input, InputRightAddon, Text, Link, Container, Heading } from "@chakra-ui/react"
import _ from "lodash"
import { useState } from "react"
// import Link from "next/link" // use this one

export default function Home() {
  return <Container {...{bg: 'none', padding: 2, align: 'center'}}>
    <Heading>My Sites</Heading>
    <Link {...{href: '../conversion-calc'}}> Conversion Calculator</Link>
    <br />
    <Link {...{href: '/calculator'}}>Calculator with Buttons</Link>
    <br />
    <Link {...{href: '/about'}}>About</Link>
    <br />
    <Link {...{href: '/two-box-calc'}}>Two Field Calculator</Link>
  </Container>
}