'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function useAuthentication() {
    const { status } = useSession();
    const router = useRouter();
    if (status !== "authenticated") router.push("/api/auth/signin");
}