import { signIn, signOut, useSession } from "next-auth/react"
import { LayOut as Section } from "@/layout"
import { Box, Stack } from "@mui/material"
import Btn from "@/components/button"
import TextInput from "@/components/text-input"
import Home from "."
import { useRouter } from "next/router"
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader"
import axios from "axios"
import { useState } from "react"

export default function Component() {
  const { data: session } = useSession()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  if (session) {
    router.push('/')
  }
  async function handleLogin() {
    await axios.post('http://localhost:3001/accounts', {
      account: account, 
      password: password
    })
    setAccount('')
    setPassword('')
  }
  return <>
    <LayOutWithOnlyHeader>

      <Box sx={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",

      }}>
        <Stack gap={'25px'} sx={{ backgroundColor: '#fff', padding: '40px 40px', borderRadius: '10px' }}>
          <Box textAlign='center'>
            <h1 style={{fontSize: '24px', fontWeight: '500'}}>Log in</h1>
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Account:</label>
            <TextInput id="account" label="Account" styles={{ width: '100%' }} value={account} handleChange={(e: any) => setAccount(e.target.value)}  />
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Password:</label>
            <TextInput id="password" label="Password" styles={{ width: '100%' }} value={password} handleChange={(e: any) => setPassword(e.target.value)} type='password'/>
          </Box>
          <Btn onClick={handleLogin}>Log in</Btn>
          <Btn onClick={() => router.push('/signup')}>Create a free account</Btn>
          <Btn onClick={() => signIn()}>Sign in with other methods</Btn>

        </Stack>
      </Box>
    </LayOutWithOnlyHeader>
  </>
}