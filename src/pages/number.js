import React from "react";
import { Box,Text } from "@chakra-ui/react";

const Numbers = () => {

    const nam = 100;
    const nam2 = 5000;
    const nam3 = 10000000;
    const formattingnum = nam.toFixed(2) // to fixed () eta r parameter e ja value diben dot er pore eto ta ZERO ASBE 
    console.log("nam",formattingnum) // => 100.00

    const standertext = nam3.toLocaleString(); // normally usa er stander number likhar format e niye asha 
    console.log("standertext",standertext) // => 10,000,000

    const next_var = nam2.toString() // number ka string e convert kora 

    const tree = () => {
        
    }

    console.log(typeof next_var)
    console.log(next_var)



    const extra = nam3.valueOf


    return (
        <>
        <Text>
            {/* number  */}
        </Text>
        </>
    )
}
export default Numbers