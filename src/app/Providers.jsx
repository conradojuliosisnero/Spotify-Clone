"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function ProvidersNextUI({ children }) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
