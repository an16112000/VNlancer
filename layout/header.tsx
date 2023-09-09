import { Box } from "@mui/material";
import { Avatar, Logo } from "../img/index";
import Image from "next/image";
import Global from "./globalStyles";
import { Container } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
        }}
      >
        <Container
          sx={{
            // width: "1400px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <Image
            style={{
              height: "50px",
            }}
            src={Logo}
            alt={""}
          />
          <Image
            style={{
              height: "30px",
              width: "30px",
            }}
            src={Avatar}
            alt=""
          />
        </Container>
      </Box>
    </>
  );
}

export default Header;
