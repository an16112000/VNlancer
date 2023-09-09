import { Box, Stack } from "@mui/material";
import { LayOut as Section } from "@/layout";
import Title from "@/components/title";
import Btn from "@/components/button";
import TextInput from "@/components/text-input";
function MyJobs() {
  return(
    <Section>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
      >
        <Title value="Danh sách công việc" />
        <Stack
          flexDirection={'row'}
          gap={'20px'}
        >
          <TextInput id="name-competition" label="Tên cuộc thi" />
          <Btn>Thêm mới</Btn>
        </Stack>
      </Stack>
    </Section>
  )
}

export default MyJobs;
