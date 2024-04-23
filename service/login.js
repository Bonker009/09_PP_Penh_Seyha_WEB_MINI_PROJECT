import { NextResponse } from "next/server";

const login = async (formData) => {
  try {
    const result = await fetch(`${process.env.BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      console.log("Login");
      const cookieHeader = result.headers.get("Set-Cookie");
      console.log(cookieHeader);
      return NextResponse.redirect(`${process.env.BASE_URL}/list`); // Absolute URL
    } else {
      // Handle error response
      const data = await result.text();
      console.error("Login failed:", data);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export default login;
