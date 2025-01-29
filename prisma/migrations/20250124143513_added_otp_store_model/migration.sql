-- CreateTable
CREATE TABLE "OTPStore" (
    "id" INTEGER NOT NULL,
    "otp" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OTPStore_id_key" ON "OTPStore"("id");
