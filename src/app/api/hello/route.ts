import { NextResponse } from "next/server";

/** This is a sample API route for a GET request */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: "Hello from the API!" });
}

/** This is a sample API route for a POST request */
export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  return NextResponse.json({
    message: "Received your data",
    data: body,
  });
}
