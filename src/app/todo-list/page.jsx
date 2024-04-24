import Card from "@/components/CardTodo";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTasks } from "../../../service/tasks/task";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";

export default async function List() {
  const result = await getAllTasks();
  console.log(result);
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="w-full  cols col-span-8"></div>
    </div>
  );
}
