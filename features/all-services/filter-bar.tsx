import NumberInputIntroduction from '@/components/input-price'
import TextInput from '@/components/text-input'
import { Filter, Logo } from '@/img'
import {Stack, Button} from '@mui/material'

function FilterBar() {
    return(
        <Stack flexDirection={"row"} gap={"20px"} marginTop={"20px"}>
          <TextInput id='keyword' label='Từ khóa' />
          <TextInput id='field' label='Lĩnh vực' />
          <NumberInputIntroduction placeholder="Nhập giá tối thiểu" />
          <NumberInputIntroduction placeholder="Nhập giá tối đa" />
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", height: "40px" }}
            endIcon={<i style={{color: '#000', fontSize: '14px'}} className="fa-solid fa-filter"></i>}
          >
            Lọc
          </Button>
        </Stack>
    )
}

export default FilterBar