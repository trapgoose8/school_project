import { NextResponse } from "next/server"
import connect from "../../../utils/db";
import User from "../../../models/User";

export const POST = async (request) => {
    const {fullfind, survey} = await request.json();
    
    await connect();
    
    try {
        await User.findOneAndUpdate({fullfind}, {survey: survey});
        return new NextResponse("Голос принят", {status: 200});
    } catch (error) {
        return new NextResponse(error, {status: 500});
    }


}