import React,{forwardRef} from "react";
import { Input } from "@chakra-ui/react";

const ForwardRefs = ({type, placeholder},ref) => {
    return (
        <Input w='250px' ref={ref} type={type} placeholder={placeholder} value={num} />
    )
}

const forwardInput = forwardRef(ForwardRefs)

console.log("forwardInput",forwardInput)

export default forwardInput