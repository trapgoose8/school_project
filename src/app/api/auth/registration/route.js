
import User from "../../../../models/User";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { fullname, level, password, fullfind, votedFor, survey } = await request.json();
  await connect();
  const newUser = new User({
    fullname,
    level,
    password,
    fullfind,
    votedFor,
    survey
  });

  try {
    newUser.save();
    return new NextResponse("Пользователь успешно создан", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};