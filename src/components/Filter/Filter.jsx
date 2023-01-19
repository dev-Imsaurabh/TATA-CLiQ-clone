import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    AccordionIcon,
    Input,
    Checkbox,
    VStack,
    Wrap,
  } from '@chakra-ui/react'
  import {AiOutlinePlus} from "react-icons/ai"
import { CHECK_BOX, LEFT } from '../../constants/typography'

  export default function Filter({data,setFilters}){
    
    let allFilters = data?.map(({name,options})=>{

      return <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign={LEFT}>
            {name}
          </Box>
          <AiOutlinePlus />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}> 
      <Wrap >
      {options.map((el=><Checkbox value={el}>{el}</Checkbox>))}

      </Wrap>
       
      </AccordionPanel>
    </AccordionItem>
    })



    return <Accordion>
    
    {allFilters}
  
    
  </Accordion>
    
  }