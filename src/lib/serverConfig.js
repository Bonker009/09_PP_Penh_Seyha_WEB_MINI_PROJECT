import { getServerSession } from "next-auth";

const token = await getServerSession(authOption);
console.log("Token is : " + token?.user?.token);
