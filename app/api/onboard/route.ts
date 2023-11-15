import prisma from "@/lib/db/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.subject ||
    !body.skills ||
    !body.bio
  ) {
    return Response.json(
      { message: "Please fill up all fields values" },
      { status: 400 }
    );
  }

  try {
    const onBoard = await prisma.mentor.create({
      data: {
        firstname: body.firstName,
        lastname: body.lastName,
        email: body.email,
        bio: body.bio,
        subject: body.subject,
        skills: body.skills,
      },
    });

    await prisma.user.update({
      where: {
        email: onBoard.email,
      },
      data: {
        role: "MENTOR",
        onboard: true,
      },
    });
    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: `Onboarding problem ${error}` },
      { status: 500 }
    );
  }
}
