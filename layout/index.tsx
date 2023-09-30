import UserFrame from "@/components/userFrame";
import FilterBar from "@/features/all-services/filter-bar";
import { Box, Container, Stack } from "@mui/material";
import Header from "./header";

interface LayOutProps {
  children: any;
}

export function LayOut({ children }: LayOutProps) {
  
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box marginTop={'120px'}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <UserFrame />
            {children}
            <FilterBar />
          </Stack>
        </Box>
      </Container>
    </>
  );
}
