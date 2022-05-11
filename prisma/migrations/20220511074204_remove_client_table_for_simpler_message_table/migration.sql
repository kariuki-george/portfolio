/*
  Warnings:

  - You are about to drop the column `emailId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `replyId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Message` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "emailId";
ALTER TABLE "Message" DROP COLUMN "from";
ALTER TABLE "Message" DROP COLUMN "replyId";
ALTER TABLE "Message" DROP COLUMN "to";
ALTER TABLE "Message" ADD COLUMN     "email" STRING;
ALTER TABLE "Message" ADD COLUMN     "firstName" STRING;
ALTER TABLE "Message" ADD COLUMN     "lastName" STRING;

-- DropTable
DROP TABLE "Client";

-- CreateIndex
CREATE UNIQUE INDEX "Message_email_key" ON "Message"("email");
