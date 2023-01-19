import { Checkbox } from "@chakra-ui/react"
import React, { useRef, useState } from "react"


function CheckFilter({name,setFilters}){


    return <Checkbox  onChange={(e)=>{

        setFilters((prev)=>{
         
          if(!prev.includes(e.target.value)){
            
            return [...prev,e.target.value]

          }else{
            let removeFilter = prev.filter((el)=>el!=e.target.value)
            return [...removeFilter]

          }
        })

      }} value={name}>{name}</Checkbox>
}

export default React.memo(CheckFilter)