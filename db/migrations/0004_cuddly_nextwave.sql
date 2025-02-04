CREATE TABLE "donations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"amount" integer DEFAULT 1
);
