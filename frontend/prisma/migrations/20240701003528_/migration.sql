/*
  Warnings:

  - You are about to drop the column `coverImg` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `framework` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `githubUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `siteUrl` on the `Project` table. All the data in the column will be lost.
  - Added the required column `url` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "coverImg",
DROP COLUMN "description",
DROP COLUMN "framework",
DROP COLUMN "githubUrl",
DROP COLUMN "name",
DROP COLUMN "siteUrl",
ADD COLUMN     "url" TEXT NOT NULL;
