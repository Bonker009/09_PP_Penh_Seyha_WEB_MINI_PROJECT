import { redirect, useRouter } from "next/navigation";
import login from "../../service/login";
import { signIn } from "next-auth/react";

export default async function loginForm(formData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await signIn("credentials", {
    email: rawFormData.email,
    password: rawFormData.password,
    redirect: false,
  });
  if (!response?.error) {
    console.log(response);
  }
  console.log(response);

  login(rawFormData);
  console.log(rawFormData);
}
