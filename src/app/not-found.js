"use client";
import { redirect, useRouter } from "next/navigation";
export default function NotFound() {
    const router = useRouter();

    router.back();
    return <h1>{pathname}</h1>;
}
