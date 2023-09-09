import Auth from "@/assets/common/auth";
import Title from "@/components/title";
import ListBtnHeader from "@/features/orders/list-btn-header";
import ListBtnBody from "@/features/orders/list_btn-body";
import { LayOut as Section } from "@/layout";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";

function Orders() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <Auth status={status}>
      <Section>
        <Box sx={{ width: "100%", padding: "20px 0" }}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Title value="Danh sách yêu cầu" />
            <ListBtnHeader options={["Dịch vụ", "Công việc", "Cuộc thi"]} />
          </Stack>
          <ListBtnBody
            options={[
              "Chờ duyệt",
              "Đang làm (0)",
              "Hoàn thành (0)",
              "Hủy bỏ (0)",
              "Từ chối (0)",
            ]}
            gap="20px"
          />
        </Box>
      </Section>
    </Auth>
  );
}

export default Orders;
