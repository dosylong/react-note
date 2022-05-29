-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- DropIndex
DROP INDEX "Todo_userId_key";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userFirebaseId") ON DELETE SET NULL ON UPDATE CASCADE;
