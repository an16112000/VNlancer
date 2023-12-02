import LeftNavigation from "@/components/LeftNavigation";
import { Box, Container, Grid, SxProps } from "@mui/material";
import Header from "./header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageLayoutWithOutLeftNavi({ children }: Props) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={contentStyle}>
          <Grid container spacing={{ md: 1 }}>
            <Grid item xs>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

const contentStyle: SxProps = {
  paddingTop: "55px",
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
};
