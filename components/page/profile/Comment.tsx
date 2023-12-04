import { Box, Stack } from "@mui/material";
import GoldenStar from "./GoldenStar";
import { stringify } from "postcss";
import { JSX } from "react";
import NormalStar from "./NormalStar";
import { EventData } from "../jobs/ListEvent";

interface Props {
    id?: number
    content?: string
    rate?: number
    writer?: Writer
    createAt?: string
}

interface Writer {
    id?: number
    fullName?: string
    imageUrl?: string
}

export default function Comment(props: Props) {
    // function handleGoldenStar() {
    //     let Component: JSX.Element[] = []
    //     for (var i = 0; i < rank; i++) {
    //         Component.push(<GoldenStar />)
    //     }
    //     return Component
    // }
    // var amountOfGoldenStar = handleGoldenStar()

    // function handleNormalStar() {
    //     let Component: JSX.Element[] = []
    //     for (var i = 0; i < 5 - rank; i++) {
    //         Component.push(<NormalStar />)
    //         // return Component
    //     }
    //     return Component
    // }
    // var amountOfNormalStar = handleNormalStar()
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
                    <img style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                    }} src={props.writer?.imageUrl} alt="image" />
                    <Stack>
                        <Box sx={{ fontSize: '14px', fontWeight: 500 }}>{props.writer?.fullName}</Box>
                        <Box sx={{ fontSize: '8px', fontWeight: 500 }}>{props.createAt}</Box>
                    </Stack>
                </Stack>

                <Box sx={{ fontSize: '10px', paddingLeft: '60px' }}>{props.content}</Box>
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'5px'}
                    marginLeft={'60px'}
                >
                    {/* {
                        amountOfGoldenStar.map(
                            (item: any, index: number) => <Box key={index}>{item}</Box>
                        )
                    }
                    {
                        amountOfNormalStar.map(
                            (item: any, index: number) => <Box key={index}>{item}</Box>
                        )
                    } */}
                </Stack>
            </Stack>

        </>
    )
}