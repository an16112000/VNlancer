import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProfileLayout from "./layout";

function MyPublicProfile() {
    const router = useRouter()
    return (
        <ProfileLayout>

        </ProfileLayout>
    )
}
MyPublicProfile.requireLogin = true

export default MyPublicProfile