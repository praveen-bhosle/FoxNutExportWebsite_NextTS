-- AlterTable
CREATE SEQUENCE otpstore_id_seq;
ALTER TABLE "OTPStore" ALTER COLUMN "id" SET DEFAULT nextval('otpstore_id_seq'),
ADD CONSTRAINT "OTPStore_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE otpstore_id_seq OWNED BY "OTPStore"."id";

-- DropIndex
DROP INDEX "OTPStore_id_key";
