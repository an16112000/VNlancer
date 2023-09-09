import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import Title from "@/components/title";
import { LayOut as Section } from "@/layout";
import {Stack} from '@mui/material'

function MyContests() {
  return (
    <Section>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Title value="Danh sách cuộc thi" />
        <Stack flexDirection={'row'} gap={'20px'}>
            <TextInput id="name-competition" label="Tên cuộc thi" />
            <Btn>Thêm mới</Btn>
        </Stack>
      </Stack>
    </Section>
  );
}

export default MyContests;
