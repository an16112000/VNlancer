import UserFrame from "@/components/userFrame";
import FilterBar from "@/features/all-services/filter-bar";
import { Box, Container, Stack, SxProps, createTheme } from "@mui/material";
import Header from "./header";

interface LayOutProps {
  children: any;
}

export function Layout({ children }: LayOutProps) {
  return (
    <Container maxWidth='xl'>
      <Header />
      <Box sx={contentStyle}>
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
          <UserFrame />
          {children}
          <FilterBar />
        </Stack>
      </Box>
    </Container>
  );
}

const contentStyle: SxProps = {
  paddingTop: '10px'
}