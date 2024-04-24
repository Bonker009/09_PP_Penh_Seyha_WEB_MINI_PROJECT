export const getAllTasks = async () => {
  try {
    let response = await fetch(`${process.env.BASE_URL}/tasks`);
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
  try {
    console.log(newFormData, "data");
    let response = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks`, {
      method: "POST",
      body: JSON.stringify(newFormData),
      headers: {
        "Content-Type": "application/json",
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
