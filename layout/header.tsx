import { Box, Container } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../img/index";
import { MenuLogined } from "./components/menu-logined";
import { MenuPublic } from "./components/menu_public";


function Header() {
  const { status } = useSession()
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#fff",
      }}
      maxWidth='xl'
    >
      <Link href={'/'}>
        <Image
          style={{
            height: "50px",
          }}
          src={Logo}
          alt={""}
        />
      </Link>
      {
        status == 'authenticated' ? <MenuLogined /> : <MenuPublic />
      }
    </Container>
  );
}

export default Header;
