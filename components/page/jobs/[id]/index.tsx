import ButtonApply from "@/features/job-detail/ButtonApply";
import { Box, Button, Stack } from "@mui/material";
import { JobDetailData } from "../JobDetail";
import PopUpApplly from "./pop-up-apply";
import { useState } from "react";
import { dataJobExample } from "@/const";
import Image from "next/image";



export default function JobContent() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Stack
                sx={{
                    padding: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '8px'
                }}
                gap={'15px'}
            >
                <Box sx={{
                    fontSize: '16px'
                }}>
                    {dataJobExample.postDate} - {dataJobExample.dueDate}
                </Box>

                <Stack>
                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Box sx={{ fontSize: '20px', fontWeight: 500 }}>{dataJobExample.name.toUpperCase()}</Box>
                        <Button>Open</Button>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'15px'}
                    >
                        <Box sx={{
                            height: '50px',
                            width: '50px',
                            borderRadius: '8px'
                        }}>
                            <Image unoptimized style={{backgroundSize: 'cover', borderRadius: '8px'}} src={dataJobExample.client.avatarUrl} alt={dataJobExample.client.avatarUrl} height={100} width={100} />
                        </Box>
                        <Box sx={{ fontSize: '16px' }}>{dataJobExample.client.name}</Box>
                    </Stack>

                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box sx={{ color: '#297958', fontSize: '16px' }}>{dataJobExample.budget}$</Box>
                    <Box>{dataJobExample.typeOfEmployee}</Box>
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={'30px'}
                >
                    {/* <Button sx={{ flex: 1, backgroundColor: '#4B69B6', color: '#fff', borderRadius: '6px' }}>Applly Now</Button>
                <Button sx={{ flex: 1, backgroundColor: '#4B69B6', color: '#fff', borderRadius: '6px' }}>Save</Button> */}
                    <ButtonApply onClick={handleOpen}>Applly Now</ButtonApply>
                    <ButtonApply>Save</ButtonApply>
                </Stack>

                <Stack>
                    <ul>
                        {dataJobExample.jobLevel ?? <li>{dataJobExample?.jobLevel}</li>}
                        {dataJobExample.categoryName.map(
                            item => <li key={item}>{item}</li>
                        )}
                    </ul>
                </Stack>

                <Box sx={{
                    height: '1px',
                    width: '100%',
                    margin: 'auto',
                    border: '0.5px dashed  #ccc'
                }}></Box>

                <Box sx={{
                    minHeight: '100px'
                }}>
                    {dataJobExample.information}
                </Box>
            </Stack>
            <PopUpApplly isOpen={open} handleClose={handleClose}></PopUpApplly>
        </>
    )
}