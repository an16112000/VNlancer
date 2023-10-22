import Btn from "@/components/button";
import TippyCustom from "@/components/dropdown";
import { Button, Stack } from "@mui/material"
import Tippy from '@tippyjs/react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const menu = [
    {
        title: "Hire freelancer",
        children: [
            {
                title: 'Find and post',
                children: [
                    {
                        title: 'Post job and rececive information about freelancer',
                        children: []
                    },
                    {
                        title: "Find service packages",
                        link: '',
                    },
                    {
                        title: "VNlancer for bussiness",
                        link: '',
                    }
                ]
            },
            {
                title: 'Find and post',
                children: [
                    {
                        title: 'Post job and rececive information about freelancer',
                        children: []
                    },
                    {
                        title: "Find service packages",
                        link: '',
                    },
                    {
                        title: "VNlancer for bussiness",
                        link: '',
                    }
                ]
            }
        ]
    },
    {
        title: "Find jobs",
        children: [
            {
                title: 'Find and post',
                children: [
                    {
                        title: 'Post job and rececive information about freelancer',
                        children: []
                    },
                    {
                        title: "Find service packages",
                        link: '',
                    },
                    {
                        title: "VNlancer for bussiness",
                        link: '',
                    }
                ]
            },
        ]
    }
]

export function MenuPublic() {
    const router = useRouter()
    function handleClick() {
        signIn()
    }
    return (
        <Stack
            flexDirection={'row'}
            gap={'20px'}
        >
            {
                menu.map(
                    (item, index) => {
                        return <Button key={index} sx={{ color: 'text.third' }}>
                            <TippyCustom value={item} />
                        </Button>
                    }
                )
            }
            <Btn onClick={handleClick}>Login</Btn>

        </Stack>
    )
}