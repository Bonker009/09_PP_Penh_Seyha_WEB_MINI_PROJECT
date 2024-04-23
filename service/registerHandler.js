const registerHandler = async (formData) => {
  try {
    const result = await fetch(`${process.env.BASE_URl}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log("Hello World");

    if (result.ok) {
      const data = await result.json();
      console.log(data, "register Success");
    
      window.location.href = "/login";
    } else {
      const errorData = await result.json();
      console.error("Registration failed:", errorData);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export default registerHandler;
