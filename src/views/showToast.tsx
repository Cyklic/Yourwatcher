"use client";

import useNotification from "@/hooks/useNotification";

type Props = {
  status: number;
  message: string;
};

export default function ShowToast({ status, message }: Props) {
  const { handleSuccess } = useNotification();

  if (status === 200) return handleSuccess("Success", message);
  //   Other status codes can be handled here, like 400, 500, etc.

  return (
    <div>
      <p></p>
    </div>
  );
}
