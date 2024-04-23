"use server";

const registerHandler = async (formData) => {
  try {
    const response = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response}`);
    }

  
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    return { error: "An error occurred while registering." };
  }
};

export default registerHandler;
