/*
  Warnings:

  - You are about to drop the column `notesGroup` on the `Notes` table. All the data in the column will be lost.
  - Added the required column `notesGroupId` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_notesGroup_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "notesGroup",
ADD COLUMN     "notesGroupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_notesGroupId_fkey" FOREIGN KEY ("notesGroupId") REFERENCES "NotesGroups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
