"use server";
export const registerForm = async (userDetail) => {
    console.log(userDetail);
  const res = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
    {
      method: "POST",
      body: JSON.stringify(userDetail),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await res.json();
  return result;
};
