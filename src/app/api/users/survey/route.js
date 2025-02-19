import User from "../../../../models/User";
import { NextResponse } from "next/server";
import connect from "../../../../utils/db";

export const GET = async (request) => {
    await connect();

    try {
        const { searchParams } = new URL(request.url);
        const eventIndex = searchParams.get("eventIndex");
        const date = searchParams.get("date");
        if (eventIndex === null || isNaN(eventIndex)) {
            return NextResponse.json(
                {
                    message:
                        "Параметр eventIndex обязателен и должен быть числом",
                },
                { status: 400 }
            );
        }

        const index = parseInt(eventIndex);

        let count;
        if (date) {
            count = await User.countDocuments({
                [`survey.${index}`]: date,
            });
        } else {
            count = await User.countDocuments({
                [`survey.${index}`]: { $ne: "" },
            });
        }

        return NextResponse.json({ count }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
};
