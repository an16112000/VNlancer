import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import Title from "@/components/title";
import { LayOut as Section } from "@/layout";
import { Stack } from "@mui/material";

function MyServices() {
  return (
    <Section>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
      >
        <Title value="Danh sách dịch vụ" />
        <Stack
            flexDirection={'row'}
            gap={'20px'}
        >
            <TextInput id="name-service" label="Tên dịch vụ" />
            <Btn>Thêm mới</Btn>
        </Stack>
      </Stack>
    </Section>
  );
}

export default MyServices;
