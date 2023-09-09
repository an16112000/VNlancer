import Header from "./header";
import { Box, Container, Stack } from "@mui/material";

interface LayOutProps {
  children: any;
}

export function LayOut({ children }: LayOutProps) {
  return (
    <>
      <Container>
        <Header />
        <Box marginTop={'70px'}>{children}</Box>
      </Container>
    </>
  );
}
