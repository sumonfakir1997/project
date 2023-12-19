import React, { useRef, useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";

export const Practice = () => {
    const [num, setNum] = useState(0)

    const numRef = useRef();
    const namRef = useRef()
    const handleChangesValue = () => {
        console.log("numRef",numRef.current)
        numRef.current.style.width ="350px"
        numRef.current.focus()
    }
    const handleChangesvalue2 = () => {
        namRef.current.style.width = "300px"
        namRef.current.focus()
        console.log(namRef.current)
    }
    return (
        <>
            <Box w='350px'>
                <Text>Number: </Text>
                <Input w='250px' ref={numRef} placeholder="name" type="number" onChange={(e) => setNum(e.target.value)} value={num} />
                <Text>Name: </Text>
                <Input w='100' ref={namRef} value={num} type="text"  onChange={(e) => setNum(e.target.value)}/>
            </Box>
            <Button mr='10px' onClick={handleChangesValue}>increment </Button>
            <Button onClick={handleChangesvalue2}> exrtra </Button>
        </>
    )
}