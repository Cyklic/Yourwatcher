"use server";

import { core } from "@/constant/url";
import axios from "axios";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function fetchTasks() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth")?.value;

  try {
    const { data: res } = await axios.get(`${core}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    revalidatePath("/");
    return res.data;
  } catch (error) {
    // throw error;
    return [];
  }
}

export async function fetchSingleTask(id: string) {
  const cookieStore = cookies();
  const token = cookieStore.get("auth")?.value;

  try {
    const { data: res } = await axios.get(`${core}/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    revalidatePath("/");
    return res.data;
  } catch (error) {
    // throw error;
    redirect("/");
    return [];
  }
}

export async function fetchPeople() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth")?.value;

  try {
    const { data: res } = await axios.get(`${core}/people/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    // throw error;
    return [];
  }
}

export async function fetchTasksStat() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth")?.value;
  try {
    const { data: res } = await axios.get(`${core}/tasks/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    revalidatePath("/");
    return res.data;
  } catch (error) {
    return null;
  }
}
