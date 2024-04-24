"use server";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export const getAllWorkspace = async () => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");

  try {
    console.log("w");
    let response = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/workspaces",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    console.log(response, "w1");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const addNewWorkSpace = async (newFormData) => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");
  try {
    console.log(newFormData, "data");
    let response = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces`,
      {
        method: "POST",
        body: JSON.stringify(newFormData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response);
    if (!response.ok) {
      console.error("Server responded with error:", response.status);
      return null;
    }

    const result = await response.json();
    console.log("Result:", result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
export const deleteWorkspaceById = async (id) => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");
  try {
    let response = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({
          workspaceId: id,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response Delete:", response);
    if (!response.ok) {
      console.error("Server responded with error:", response.status);
      return null;
    }

    const result = await response.json();
    console.log("Result Delete:", result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
const getToken = async () => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  return token;
};
