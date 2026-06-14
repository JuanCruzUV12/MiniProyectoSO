import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const total = await prisma.requestLog.count();

  const avg = await prisma.requestLog.aggregate({
    _avg: {
      executionTime: true,
    },
  });

  return NextResponse.json({
    totalRequests: total,
    averageExecutionTime:
      avg._avg.executionTime ?? 0,
  });
}
