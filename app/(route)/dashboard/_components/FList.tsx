"use client";
import { ContextFile } from "@/app/contextApi/ContextFile";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { MoreHorizontalIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export interface File {
  archived: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteBoard: string;
  _id: string;
  _creationTime: number;
}
function FList() {
  const router=useRouter();
  const { user }: any = useKindeBrowserClient();
  const { FileList, setFileList } = useContext(ContextFile);
  const [flist, setFlist] = useState<any>();
  console.log(FileList);
  useEffect(() => {
    FileList && setFlist(FileList);
    console.log("this is filelist", flist);
  }, [FileList]);

  return (
    <div className=" mt-5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Created At
              </td>{" "}
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Edited
              </td>{" "}
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 cursor-pointer" >
            {FileList &&
              FileList?.map((item: File, index: number) => (
                <tr className="odd:bg-gray-50" onClick={()=>{router.push(`/workspace/${item?._id}`)}}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {item.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(item?._creationTime).format("LL")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(item?._creationTime).format("LL")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Image
                      src={user?.picture}
                      alt="user"
                      width={40}
                      height={40}
                      className=" rounded-full h-[30px] w-[30px]"
                    ></Image>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FList;
