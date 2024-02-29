import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  LayoutGrid,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export interface Team {
  createdBy: String;
  teamName: String;
  _id: String;
}
function TopSection({ setTeamInfo }: any) {
  const router = useRouter();
  const { user }: any = useKindeBrowserClient();
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<any>();
  const [teamList, setTeamList] = useState<any[]>();

  const menu = [
    {
      id: 1,
      name: "Team Create",
      path: "/team/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  useEffect(() => {
    getTeamList();
  }, [user]);
  useEffect(() => {
    activeTeam &&setTeamInfo(activeTeam);
  }, [activeTeam]);

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const handleMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="relative">
      <div className="h-[40px] p-4 w-full bg-slate-400 hover:bg-slate-600 rounded-lg flex flex-col justify-center items-center">
        <Popover>
          <PopoverTrigger>
            <div className="flex justify-start items-center">
              <Image
                src={"/vercel.svg"}
                alt="image"
                height={30}
                width={30}
                className="h-10 w-10"
              />
              <h1 className="ml-2">{activeTeam?.teamName}</h1>
              <ChevronDown className="h-4 w-4" />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <div>
                {teamList?.map((team, index) => (
                  <div
                    key={index}
                    className={`p-2 cursor-pointer hover:bg-blue-600 hover:text-white hover:rounded-md ${
                      activeTeam?._id === team?._id &&
                      "bg-blue-500 text-white rounded-md"
                    }`}
                    onClick={() => setActiveTeam(team)}
                  >
                    {team.teamName}
                  </div>
                ))}
              </div>
              <hr className="bg-black text-black" />
              <div>
                {menu.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer flex gap-1 items-center hover:bg-slate-300 rounded-md p-2"
                    onClick={() => handleMenuClick(item)}
                  >
                    <item.icon className="h-4 w-4" />
                    <h1>{item.name}</h1>
                  </div>
                ))}
                <LogoutLink>
                  <div className="flex items-center ml-1 hover:bg-slate-300 p-2 rounded-md">
                    <LogOut className="h-4" />
                    <h1>Logout</h1>
                  </div>
                </LogoutLink>

                <div className="flex items-center ml-1 hover:bg-slate-300 p-2 rounded-md">
                  <Image
                    src={user?.picture}
                    alt="image"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <div className="ml-1 text-xs font-semibold">
                    <p>{`${user?.given_name} ${user?.family_name}`}</p>
                    <p className="font-light">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className=" w-full h-[40px]">
        <Button
          variant="outline"
          className=" w-full flex border-[1px] border-black justify-start items-start"
        >
          <LayoutGrid className="" />
          <span>All Files</span>
        </Button>
      </div>
    </div>
  );
}

export default TopSection;
