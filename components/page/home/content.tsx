import { BankerIcon, ConnectFreelancer, FreelancerHome, GlobalIcon, OnBoardIcon, ShieldsIcon } from "@/img";
import { Stack, Box } from "@mui/material";
import Btn from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

function ContentHome() {
    const { status } = useSession()
    return (
        <>
            <Stack
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                height='500px'
                gap='20px'
            >
                <Box sx={{ fontSize: '30px', fontWeight: '500' }}>
                    Hire, manage and pay vetted freelancers
                    <br></br>
                    All in one place
                    <br></br>
                    <Link href={'freelancer/news' }>
                        <Btn>Get Started</Btn>
                    </Link>
                </Box>
                <Image style={{
                    borderRadius: '10px',
                    width: '60%',
                    height: '400px'
                }} src={ConnectFreelancer} alt={""} />

            </Stack>
            <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={"center"}
                height={'500px'}
                gap={'60px'}

            >
                <Image style={{
                    borderRadius: '10px',
                    width: '60%',
                    height: '400px'
                }} src={FreelancerHome} alt={""} />
                <Box sx={{}}>
                    <p style={{ fontSize: '30px', fontWeight: '500' }}>Replace your costly systems and processes with one platform</p>
                    <br></br>
                    Working with contractors does not need expensive systems, endless searches or messy spreadsheets. VNlancer is all-in-one platform takes the work out of sourcing, managing and paying your global freelance workforce.
                </Box>
            </Stack>
            <Stack gap={'50px'}>
                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                    <Stack flexDirection={'row'} gap={'20px'}>
                        <Image src={GlobalIcon} alt="" style={{ height: '60px', width: '60px' }} />
                        <Box width={'300px'}>
                            <Box color="text.primary">Source</Box>
                            <p style={{ fontSize: '14px' }}>Directly source the best freelancers from your own talent pool or our elite marketplace.</p>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} gap={'20px'}>
                        <Image src={OnBoardIcon} alt="" style={{ height: '60px', width: '60px' }} />
                        <Box width={'300px'}>
                            <Box color="text.primary">Onboard</Box>
                            <p style={{ fontSize: '14px' }}>Onboard in minutes with background checks, classification</p>
                        </Box>
                    </Stack>
                </Stack>

                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                    <Stack flexDirection={'row'} gap={'20px'}>
                        <Image src={BankerIcon} alt="" style={{ height: '60px', width: '60px' }} />
                        <Box width={'300px'}>
                            <Box color="text.primary">Pay</Box>
                            <p style={{ fontSize: '14px' }}>Pay your teams on time, wherever in the world, with full visibility of your global workforce costs.</p>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} gap={'20px'}>
                        <Image src={ShieldsIcon} alt="" style={{ height: '60px', width: '60px' }} />
                        <Box width={'300px'}>
                            <Box color="text.primary">Pay</Box>
                            <p style={{ fontSize: '14px' }}>Remove risks and hire with confidence with built-in global worker classification and tax compliance.</p>
                        </Box>
                    </Stack>
                </Stack>

            </Stack><Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"} gap={'60px'} height={'500px'}>
                <Image style={{
                    borderRadius: '10px',
                    width: '60%',
                    height: '400px'
                }} src={ConnectFreelancer} alt={""} />
                <Box sx={{ fontSize: '30px', fontWeight: '500' }}>
                    Save time and money with direct access to global talent
                    <br></br>
                    <br></br>
                    <ul>
                        <li style={{ fontSize: '14px', fontWeight: '400' }}>- Hire in minutes with direct sourcing from your own talent pool</li>
                        <li style={{ fontSize: '14px', fontWeight: '400' }}>- Easy to find freelancer who suitable for your demand</li>
                    </ul>
                </Box>
            </Stack>
        </>
    )
}

export default ContentHome