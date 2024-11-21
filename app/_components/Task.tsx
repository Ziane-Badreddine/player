


import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { player } from "@prisma/client"
import { Pencil, Trash2 } from "lucide-react"

interface Props {
    initialdata: player
}

const Task = ({initialdata}: Props) => {
    return (
        <Card className="w-[80%]">
            <CardHeader>
                <CardTitle>{initialdata.nom}</CardTitle>
            </CardHeader>
            <CardFooter className="flex gap-2">

                <Button >
                    Update
                    <Pencil className="w-5 h-5" />
                </Button>
                <Button className=" bg-red-500">
                    Delete
                    <Trash2 className="w-5 h-5" />
                </Button>
            </CardFooter>
        </Card>

    )
}

export default Task