export const loginForm = async (userDetail) => {
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(userDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result;
};
