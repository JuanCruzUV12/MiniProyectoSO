import { prisma } from "@/src/lib/prisma";
import { cpuStress } from "@/src/lib/cpuStress";
import { NextResponse } from "next/server";

export async function POST() {

  const start = Date.now();

  const iterations = cpuStress();

  await prisma.requestLog.create({

    data: {

      executionTime:
        Date.now() - start,

      cpuIterationCount:
        iterations,

      randomValue:
        Math.random(),
    },
  });

  return NextResponse.json({
    success: true,
  });
}
