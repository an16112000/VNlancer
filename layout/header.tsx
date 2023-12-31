import { Box, Container } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { Logo } from "../img/index";
import { MenuLogined } from "./components/menu-logined";
import { MenuPublic } from "./components/menu_public";


function Header() {
  const { data: session, status } = useSession()
  const { asPath } = useRouter()
  const [role, setRole] = useState('Freelancer');
  const currentRole = role === 'Freelancer' ? 'Customer' : 'Freelancer'

  const isFreelancerMode = useMemo(() => asPath.includes("/freelancer"), [asPath]);
  const linkSwitch = useMemo(() => (isFreelancerMode ? "/client/news" : "/freelancer/news"), [isFreelancerMode]);
  const textSwitch = useMemo(() => (isFreelancerMode ? "customer" : "freelancer"), [isFreelancerMode]);
  const renderMenu = useCallback(() => {
  
    if (status === 'authenticated') {
      return <MenuLogined role={textSwitch} linkSwitch={linkSwitch} />
    }
    else if (status == 'unauthenticated') {
      return <MenuPublic />
    }
  }, [status, linkSwitch, textSwitch])



  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: '60px',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          zIndex: 999,
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
          <Link href={'/'}>
            <Image
              style={{
                height: "50px",
              }}
              src={Logo}
              alt={""}
            />
          </Link>
          {renderMenu()}
        </Container>
      </Box>
    </>
  );
}

export default Header;
