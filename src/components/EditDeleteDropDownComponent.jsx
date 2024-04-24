"use client";
import Image from "next/image";
import React from "react";
import { deleteWorkspaceById } from "../../service/workspace/workspace";

export default function EditDeleteDropDownComponent({ workspaceId }) {
  const deleteWorkspacehandler = async (workspaceId) => {
    const response = await deleteWorkspaceById(workspaceId);
    console.log(response);
  };
  return (
    <details className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a>Edit</a>
        </li>
        <li>
          <a
            onClick={() => {
              deleteWorkspacehandler(workspaceId);
            }}
          >
            Delete
          </a>
        </li>
      </ul>
    </details>
  );
}
