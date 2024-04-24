import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import { getWorkspaceById } from "../../../../service/workspace/workspace";
import { getTaskByWrokspaceId } from "../../../../service/tasks/task";
import Card from "@/components/CardTodo";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";

export default async function Page({ params: { todoId } }) {
  let response = await getTaskByWrokspaceId(todoId);
  console.log(response, "tests");

  console.log(todoId);
  return (
    <div className="p-4">
      <ListBoardComponentHeader />
      {response?.data?.map((item, key) => (
        <Card {...item} key={key} />
      ))}
      <div className="col-span-4 w-full">
        <MonthlyStatisticsComponent />
        <div className="">
          <AddNewTaskComponent id={todoId} />
        </div>
      </div>
    </div>
  );
}
