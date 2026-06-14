import { prisma } from "@/src/lib/prisma";
import { cpuStress } from "@/src/lib/cpuStress";
import { NextResponse } from "next/server";

export async function POST() {

  const jobs = [];

  for (let i = 0; i < 100; i++) {

    jobs.push(

      prisma.requestLog.create({

        data: {

          executionTime: 0,

          cpuIterationCount:
            cpuStress(),

          randomValue:
            Math.random(),
        },
      })
    );
  }

  await Promise.all(jobs);

  return NextResponse.json({
    success: true,
    records: 100,
  });
}
