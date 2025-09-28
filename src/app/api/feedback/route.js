const feedbacks = [];

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Message:", body);
    feedbacks.push(body);

    return Response.json(
      { message: "feedback added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json(feedbacks, { status: 200 });
}
