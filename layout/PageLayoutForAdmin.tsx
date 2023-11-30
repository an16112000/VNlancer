import LeftNavigation from "@/components/LeftNavigation";
import { Box, Container, Grid, SxProps } from "@mui/material";
import Header from "./header";
import { ReactNode } from "react";
import HeaderForAdmin from "./headerForAdmin";

interface Props {
  children: ReactNode;
}

export function PageLayoutForAdmin({ children }: Props) {
  return (
    <Container maxWidth='lg' >
      <HeaderForAdmin />
      <Box sx={contentStyle}>
        <Grid container spacing={{ md: 1 }}>
          <Grid item display={{ xs: 'none', md: 'block' }}>
            <LeftNavigation />
          </Grid>
          <Grid item xs>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const contentStyle: SxProps = {
  paddingTop: '10px',
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
}
