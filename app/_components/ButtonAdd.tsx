import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const ButtonAdd = () => {
    return (
        <Button size={"sm"} className="w-[12%]">
            add
            <Plus className="w-5 h-5 mr-2" />
        </Button>
    )
}

export default ButtonAdd