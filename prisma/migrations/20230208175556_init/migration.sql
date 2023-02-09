-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "orderNo" INTEGER NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
