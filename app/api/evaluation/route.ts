import { dummyCriteriaData } from "@/lib/constants";
import { CriteriaData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { subject } = await request.json();

    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 },
      );
    }

    if (!(dummyCriteriaData as CriteriaData)[subject]) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    await new Promise((resolve) => setTimeout(resolve, 4000));

    const data = (dummyCriteriaData as CriteriaData)[subject];

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 },
    );
  }
}
