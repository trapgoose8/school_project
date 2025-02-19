import User from "../../../../models/User";
import { NextResponse } from "next/server";
import connect from "../../../../utils/db";

export const GET = async () => {
    await connect();

    try {
        // Получаем количество пользователей для каждого значения votedFor
        const count1 = await User.countDocuments({ votedFor: 1 });
        const count2 = await User.countDocuments({ votedFor: 2 });
        const count3 = await User.countDocuments({ votedFor: 3 });

        return NextResponse.json({ count1, count2, count3 }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
};
