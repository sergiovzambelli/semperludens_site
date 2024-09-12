/*
  Warnings:

  - You are about to drop the `_GameToPlayer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eventId` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToPlayer" DROP CONSTRAINT "_GameToPlayer_B_fkey";

-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_id_fkey";

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "eventId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_GameToPlayer";

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
