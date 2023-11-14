import Btn from "@/components/button";
import { RootState } from "@/state/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserRole, changeRole } from "@/state/user";

export default function SwapRoleButton() {
    const { asPath } = useRouter()
    const userRole = useSelector((state: RootState) => state.user.role)
    const [navigationLink, setNavigationLink] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        if (asPath.includes("freelancer")) {
            setNavigationLink("/client/my-jobs")
            dispatch(changeRole(UserRole.freelancer))
        }
        else {
            setNavigationLink("/freelancer/news")
            dispatch(changeRole(UserRole.client))
        }
    })
    return (
        <Link href={navigationLink}>
            <Btn styles={{ borderRadius: '10px' }}>Swap to {userRole == UserRole.freelancer ? UserRole.client : UserRole.freelancer}</Btn>
        </Link>
    )
}