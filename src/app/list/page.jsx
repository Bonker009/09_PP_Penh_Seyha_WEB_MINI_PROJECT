import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function List() {
  return (
    <div className="grid grid-cols-12 w-screen">
      <div className="col-span-2">
        <SidebarComponent />
      </div>
      <div className="col-span-10">
        <NavbarComponent />
        <div className="content ml-4">
          <div>Workspace / HRD Design / List</div>
          <div className="grid grid-cols-12 gap-3">
            <div className="w-full cols col-span-8">
              <h1>HRD Design</h1>
              <div className="w-full">
                <TodoCardComponent />
                <TodoCardComponent />
              </div>
            </div>
            <div className="  col-span-4 w-full">
              <MonthlyStatisticsComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
