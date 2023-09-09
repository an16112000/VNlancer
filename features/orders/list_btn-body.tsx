import Btn from '@/components/button'
import {Stack} from '@mui/material'
import { useState } from 'react'

interface ListBtnBody {
    options: string[], 
    gap?: string,
}

function ListBtnBody({options, gap = '0'}: ListBtnBody) {
  const [active, setActive] = useState('Chờ duyệt')
  function handleClick(e: any) {
    const text = e.target.innerText
    setActive(text)
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

export default ListBtnBody