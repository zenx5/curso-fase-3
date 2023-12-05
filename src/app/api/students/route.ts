import { NextResponse } from "next/server"

const students = [
    { id:1 , name:'Miguel', rating:10.00 },
    { id:2 , name:'Ricardo', rating:7.92 },
    { id:3 , name:'Stephany', rating:6.33 },
    { id:4 , name:'Carlos', rating:5.17 },
    { id:5 , name:'Marxell', rating:4.67 },
    { id:6 , name:'Gabriel', rating:2.33 },
    { id:7 , name:'Jhonatan', rating:1.00 },
]


export async function GET() {

    return NextResponse.json(students)
}