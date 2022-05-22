-- CreateTable
CREATE TABLE "User" (
    "userFirebaseId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userFirebaseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
