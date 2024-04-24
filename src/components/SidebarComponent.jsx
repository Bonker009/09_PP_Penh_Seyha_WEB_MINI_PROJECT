import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkspace } from "../../service/workspace/workspace";
import Link from "next/link";

export default async function SidebarComponent() {
  let response = await getAllWorkspace();
  console.log(response, "all workspace");

  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} alt="" width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} alt="" width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {response?.data?.map((item, key) => (
        <Link
          href={`/todo-list/${item.workSpaceId}`}
          className="flex items-center mt-5 w-full px-2 "
          key={key}
        >
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <p>{item.workspaceName}</p>

            <EditDeleteDropDownComponent workspaceId={item.workSpaceId} />
          </div>
        </Link>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image
          alt=""
          src={"/assets/icons/favorite.svg"}
          width={22}
          height={22}
        />
      </div>

      {/* each favorite workspace */}
      {response?.data
        ?.filter((item) => item.isFavorite) 
        .map((item, key) => (
          <div className="flex items-center mt-5 w-full" key={key}>
            <div className="rounded-full w-4 h-4 bg-todo"></div>
            <div className="flex justify-between w-full pl-3">
              <p>{item.workspaceName}</p>
              <EditDeleteDropDownComponent workspaceId={item.workspaceId} />
            </div>
          </div>
        ))}
    </div>
  );
}
