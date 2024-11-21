


import { Input } from "@/components/ui/input";
import Task from "./Task";
import { Search } from "lucide-react";
import db from "@/prisma/route";
import { Label } from "@/components/ui/label";
import ButtonAdd from "./ButtonAdd";


export default async function TaskList() {

    const players = await db.player.findMany()


    return (
        <div className="mx-auto flex flex-col mt-10 gap-4 items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center mx-auto w-[80%]">
                <div className="flex flex-col w-[80%] gap-3 mt-8">
                    <div>
                        <Label>task</Label>
                        <Input placeholder="learn java..." />
                    </div>
                    <ButtonAdd />
                </div>
                <div className="border-b-2 bg-black/5 w-[80%] my-5"></div>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto w-[80%] my-5">
                <div className="flex items-center  gap-2 w-[80%] mb-5">
                    <Search className="w-8 h-8 mr-2" />
                    <Input placeholder="filter..." className="w-[40%]" />
                </div>
                <div className="flex items-center justify-center flex-col gap-5 mb-10 w-full">
                    {players.map((play,index) => {
                    return <Task key={index} initialdata={play}/>
                    })}
                </div>
            </div>
        </div>
    );

}
