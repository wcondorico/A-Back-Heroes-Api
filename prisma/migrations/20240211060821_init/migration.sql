-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "img" TEXT,
    "description" TEXT,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
