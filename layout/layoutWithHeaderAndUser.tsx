import UserFrame from "@/components/userFrame";
import { Box, Container, Stack } from "@mui/material";
import Header from "./header";

interface LayOutProps {
  children: any;
}

export function LayOutWithHeaderAndUser({ children }: LayOutProps) {

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box marginTop={'120px'}>
          
          <Stack flexDirection={'row'} justifyContent={'space-between'} position={'relative'}>
              <UserFrame />
              {children}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
