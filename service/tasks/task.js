import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getAllTasks = async () => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");
  try {
    let response = await fetch(`${process.env.BASE_URL}/tasks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    // console.error("An error occurred:", error);
    return null;
  }
};

export const addNewTask = async (newFormData) => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");
  try {
    console.log(newFormData, "data");
    let response = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks`, {
      method: "POST",
      body: JSON.stringify(newFormData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    const result = await response.json();
    // console.log(result, "result");
    return result;
  } catch (errors) {
    // console.error(errors);
    return null;
  }
};

export const getTaskByWrokspaceId = async (id) => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log(token, "hello world");
  try {
    let response = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/tasks/getTaskByStatusAndWorkspaceId/1/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {

    return null;
  }
};
