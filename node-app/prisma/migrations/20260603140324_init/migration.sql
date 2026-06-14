-- CreateTable
CREATE TABLE "RequestLog" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executionTime" INTEGER NOT NULL,
    "cpuIterationCount" INTEGER NOT NULL,
    "randomValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RequestLog_pkey" PRIMARY KEY ("id")
);
