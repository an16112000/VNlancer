import { Box } from "@mui/material"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useMemo } from "react";



function AvatarDropdown() {
    const { asPath } = useRouter()
    const isFreelancerMode = useMemo(() => asPath.includes("/freelancer"), [asPath]);
    const ItemDropDown = [
        {
            title: 'Profile',
            link: isFreelancerMode ? '/freelancer/my-public-profile' : '/client/my-public-profile'
        },
        {
            title: 'Sign out',
            handleClick: () => signOut()
        }
    ]
    return (
        <Box sx={{ backgroundColor: '#fff', padding: '6px 6px 10px 6px', borderRadius: '6px' }}>
            {ItemDropDown.map(
                (item: any, index: number) => {
                    if (item.handleClick) {
                        return <Box sx={{cursor: 'pointer'}} key={index} onClick={item.handleClick}>{item.title}</Box>
                    } else {
                        return <Link key={index} href={item.link}>{item.title}</Link>
                    }
                }
            )}
        </Box>
    )
}

export default AvatarDropdown