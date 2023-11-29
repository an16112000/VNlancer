import Btn from "@/components/button";
import { Stack } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export function MenuPublic() {
    const router = useRouter()
    function handleClick() {
        signIn()
    }
    return (
        <Stack
            flexDirection='row'
            gap='20px'
            width='100%'
            justifyContent='flex-end'
            paddingRight='10px'
        >
            <Btn onClick={handleClick}>Login</Btn>
        </Stack>
    )
}