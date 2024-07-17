import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/db/database";
import Service from "@/models/Service";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const services = await Service.find({});
    return NextResponse.json(services);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  console.log(request);
  try {
    await connectToDatabase();
    const newService = await request.json();
    const service = new Service(newService);
    await service.save();
    return NextResponse.json(service);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}
