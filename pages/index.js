import { Box, Button, color, InputRightAddon, Text } from "@chakra-ui/react"
import _ from "lodash"
// import { useState } from "react"

// export const MyHeader = () => {
//   const onClick = () => {
//     alert("you clicked me")
//   }
//   return <Box {...{padding: 5, bg: 'orange'}}>
//     <Button {...{colorScheme: 'blue', onClick}}>Yo its button</Button>
//   </Box>
// }

// export const MyHeader2 = () => {
//   const [bg, setBg] = useState('orange')
//   const [isBoxShown, setShown] = useState(false)
//   // const shown = false
//   // bg = useState('yellow')

//   const onClick = () => {
//     // const myArray = ["shea", "marcus"]
  
//     // const [name1, name2] = myArray
//     // const name1 = myArray[1]
//     // const name2 = myArray[2]

//     // console.log(isBoxShown)

//     setShown(!isBoxShown)
//     // if (shown) {
//     //   setShown(false)
//     // } else {
//     //   setShown(true)
//     // }

//     setBg(_.sample(["blue", "red", "green", "yellow"]))
//   }

//   return <Box {...{padding: 5, bg}}>
//     <Button {...{colorScheme: 'blue', onClick}}>Yo its button</Button>
//     {isBoxShown && <Box {...{bg: 'yellow', rounded: "full"}}>Hi</Box>}
//   </Box>
// }

export const MyHeader3 = () => {
  //set a value for kelvin --> how do I get kelvin to be a variable I can input vs having to define in my code?
  let kelvin = 273

  //create a function that will convert kelvin to celsius
  function handleSubmit(kelvin) {

    //I want to take kelvin and convert it to celsius
    let celsius = kelvin - 273;

    //when I call this function I want it to do the conversions and display in my Box
    return celsius

  }

  //create a space to display the information to the DOM
  return <Box{...{margin: "20px", bg: "white"}}> 
    <Text> 
      {/* I want to return celsius here based on the input from my form */}
      {kelvin} degrees Kelvin is {handleSubmit(kelvin)} degrees Celsius
    </Text>
  </Box>
}

export default function Home() {
  return <Box {...{bg: 'blue', padding: 2}}>
    {/* <MyHeader />
    <MyHeader2 /> */}
    <MyHeader3 />
  </Box>
}
