/*
  Warnings:

  - Made the column `email` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `from` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `to` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subject` on table `Message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "emailId" DROP NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "from" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "to" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "message" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "replyId" DROP NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "subject" SET NOT NULL;
