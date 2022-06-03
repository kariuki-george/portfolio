/*
  Warnings:

  - Made the column `message` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subject` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstName` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `Message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "message" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "subject" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "email" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "firstName" SET NOT NULL;
ALTER TABLE "Message" ALTER COLUMN "lastName" SET NOT NULL;
