import Btn from "@/components/button"
import TextInput from "@/components/text-input"
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader"
import { Box, FormGroup, Stack } from "@mui/material"
import axios from "axios"
import { signIn } from "next-auth/react"
import router from "next/router"
import { useState } from "react"



function SignUpPage() {
  
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setComfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  async function handleSignUp() {
    if(password === confirmPassword) {
      
      
      const response = await axios.post('https://api.emailjs.com/v1/validation/check', email)
      console.log(response)
      await axios.post('http://localhost:3001/accounts', {
        account: account,
        password: password
      })
    }
    else {
      alert('Vui lòng nhập lại mật khẩu')
    }
    setAccount('')
    setPassword('')
    setComfirmPassword('')
  }
    return(
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
            <h1 style={{fontSize: '24px', fontWeight: '500'}}>Sign Up</h1>
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Account:</label>
            <TextInput id="account" label="Account" styles={{ width: '100%' }} value={account} handleChange={(e: any) => setAccount(e.target.value)} />
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Password:</label>
            <TextInput id="password" label="Password" styles={{ width: '100%' }} value={password} type="password" handleChange={(e: any) => setPassword(e.target.value)} />
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Comfirm password:</label>
            <TextInput id="password" label="Confirm password" styles={{ width: '100%' }} value={confirmPassword} type="password" handleChange={(e: any) => setComfirmPassword(e.target.value)}/>
          </Box>
          <Box sx={{ width: '250px' }}>
            <label>Email:</label>
            <TextInput id="password" label="Password" styles={{ width: '100%' }} value={email} handleChange={(e: any) => setEmail(e.target.value)} />
          </Box>
          <Btn onClick={handleSignUp}>Create account</Btn>
          <Btn onClick={() => signIn()}>Sign in with other methods</Btn>

        </Stack>
      </Box>
        </LayOutWithOnlyHeader>
    )
}

export default SignUpPage