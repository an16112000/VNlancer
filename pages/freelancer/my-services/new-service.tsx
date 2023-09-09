import Btn from "@/components/button";
import Title from "@/components/title";
import { LayOut as Section } from "@/layout";
import { Stack } from "@mui/material";

function NewService() {
  return (
    <Section>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
      >
        <Title value="Thêm mới dịch vụ" />
        <Stack>
            <Btn>Thêm mới</Btn>
        </Stack>
      </Stack>
    </Section>
  );
}

export default NewService;
