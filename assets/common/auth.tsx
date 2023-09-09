import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

interface AuthProps {
    children: any,
    status?: any,
}

function Auth({children, status}: AuthProps) {
    const router = useRouter()
    useEffect(
        () => {
            if(status == 'unauthenticated') {
                router.push('/login')
            }
        }, [status]
    )
    return(
        <>
            {children}
        </>
    )
}

export default Auth