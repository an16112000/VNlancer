import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

interface AuthProps {
    children: any,
    status?: any,
    requiredLogin: boolean,
}

function Auth({ children, requiredLogin }: AuthProps) {
    const router = useRouter()
    const {status} = useSession()
    console.log(requiredLogin)
    useEffect(
        () => {
            if(!requiredLogin) return
            if(requiredLogin == true && status == 'unauthenticated') {
                signIn()
            } 
        }, [router, status, requiredLogin]
    )
    console.log(status)
    if (requiredLogin && status == 'loading') {
        return <>Loading</>
    } 
    else {
        return (
            <>
                {children}
            </>
        )

    }
}

export default Auth