"use client";

import { colors } from "@/theme/colors";
import { Center, Loader } from "@mantine/core";
import { useState, useEffect } from "react";

export default function Loading() {
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProcessing(false);
    }, 1000);

    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);

  if (!processing) return null;
  return (
    <Center w={"100vw"} h={"100vh"}>
      <Loader color={colors.secondary[4]} type="dots" />
    </Center>
  );
}
