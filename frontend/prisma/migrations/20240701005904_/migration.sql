/*
  Warnings:

  - You are about to drop the `ExtensionToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExtensionToken" DROP CONSTRAINT "ExtensionToken_userId_fkey";

-- DropTable
DROP TABLE "ExtensionToken";
