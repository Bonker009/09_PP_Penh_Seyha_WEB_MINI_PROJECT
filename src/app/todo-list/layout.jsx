import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="font-SFProDisplay">
        <div className="grid grid-cols-12 w-screen">
          <div className="col-span-2">
            <SidebarComponent />
          </div>
          <div className="col-span-10 ">
            <NavbarComponent />
            <div className="content ml-8 grid grid-cols-12 py-4">
              <div className="col-span-8">{children}</div>
            
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
