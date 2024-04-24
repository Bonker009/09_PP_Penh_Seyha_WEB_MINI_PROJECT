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
          <div className="col-span-10">
            <NavbarComponent />
            {children}{" "}
          </div>
        </div>
      </body>
    </html>
  );
}
