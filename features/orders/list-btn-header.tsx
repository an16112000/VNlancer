import Btn from '@/components/button'
import {Stack} from '@mui/material'
import { useState } from 'react'

interface ListBtnHeader {
    options: string[], 
    gap?: string,
}

function ListBtnHeader({options, gap = '0'}: ListBtnHeader) {
    const [active, setAcitve] = useState('Dịch vụ')
  function handleClick(e: any) {
    const text = e.target.innerText
    setAcitve(text)
  }
    return(
        <Stack flexDirection="row" gap={gap}>
              {
                options.map(
                    (item, index) => <Btn onClick={handleClick} active={active}>{item}</Btn>
                )
              }
            </Stack>
    )
}

export default ListBtnHeader