import { Box, Button, Stack } from "@mui/material";
import Options from "../myApplications/options";
import Image from 'next/image'
import { TestImage } from "@/img";

interface PostForCustomerProps {
    list: any
}

export function PostForCustomer({list}: PostForCustomerProps) {
    return (
        <Stack gap={'30px'}>
          {list.map((job: any, index: number) => {
            return (
              <Box key={index} sx={{ backgroundColor: "#fff", borderRadius: '12px', padding: '10px 12px'}}>
                <Stack flexDirection={'row'} sx={{height: "30px"}} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Button sx={{backgroundColor: ''}}>{job.type}</Button>
                    </Box>
                    <Box>
                        {job.title}
                    </Box>
                </Stack>
                <Stack flexDirection={"row"} sx={{ height: "50px" }} alignItems={'center'}>
                  <Box sx={{ height: "100%" }} flex={1}>
                    <img style={{height: '45px', width: '45px', borderRadius: '50%'}} src={job.avatar} alt={""} />
                  </Box>
                  <Stack flex={8} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box sx={{ height: "100%" }}>
                      <p style={{fontSize: '16x', fontWeight: '500'}}>{job.nameUser}</p>
                      <p style={{fontSize: '12px', fontWeight: '300'}}>{job.date}</p>
                    </Box>
                    <Box sx={{height: '100%'}}>
                        <p>{job.price}</p>
                    </Box>
                  </Stack>
                </Stack>
                <Box>
                    <Image style={{height: 'auto', width: '100%'}} src={TestImage} alt="" />
                </Box>
                <Box>
                    <Box sx={{textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 4, WebkitBoxOrient: "vertical", display: '-webkit-box', padding: '6px 12px'}}>{job.details}</Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      );
}

