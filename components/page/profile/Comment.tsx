import { Box, Stack } from "@mui/material";
import GoldenStar from "./GoldenStar";
import { stringify } from "postcss";
import { JSX } from "react";
import NormalStar from "./NormalStar";
import { EventData } from "../jobs/ListEvent";

interface CommentProps {
    children: EventData
}

export default function Comment({children}: CommentProps) {
    function handleGoldenStar() {
        let Component: JSX.Element[] = []
        for (var i = 0; i < children.rank; i++) {
            Component.push(<GoldenStar />)
        }
        return Component
    }
    var amountOfGoldenStar = handleGoldenStar()

    function handleNormalStar() {
        let Component: JSX.Element[] = []
        for (var i = 0; i < 5-children.rank; i++) {
            Component.push(<NormalStar />)
            // return Component
        }
        return Component
    }
    var amountOfNormalStar = handleNormalStar()
    return (
        <>
            <Stack
                gap={'0px'}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'20px'}
                >
                    <Box sx={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'red'
                    }}></Box>
                    <Stack>
                        <Box sx={{ fontSize: '14px', fontWeight: 500 }}>{children.user.email}</Box>
                        <Box sx={{ fontSize: '8px', fontWeight: 500 }}>{children.createAt}</Box>
                    </Stack>
                </Stack>

                <Box sx={{ fontSize: '10px', paddingLeft: '60px' }}>{children.content}</Box>
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'5px'}
                    marginLeft={'60px'}
                >
                    {
                        amountOfGoldenStar.map(
                            (item: any, index: number) => <Box key={index}>{item}</Box>
                        )
                    }
                    {
                        amountOfNormalStar.map(
                            (item: any, index: number) => <Box key={index}>{item}</Box>
                        )
                    }
                </Stack>
            </Stack>

        </>
    )
}