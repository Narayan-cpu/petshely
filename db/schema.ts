// db/schema.ts
import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description'),

});

export type Pet = typeof pets.$inferSelect;
export type NewPet = typeof pets.$inferInsert;

// drizzle/schema.ts


export const blogs = pgTable('blogs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
export type BlogInsert = typeof blogs.$inferInsert; 
export type Blog = typeof blogs.$inferSelect; // For type inference



export const donations = pgTable('donations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  amount: integer('amount').default(1),  // Change to integer
});

// Type inference for insert and select
export type DonationInsert = typeof donations.$inferInsert;
export type Donation = typeof donations.$inferSelect;

// function integer(arg0: string) {
//   throw new Error('Function not implemented.');
// }
import { varchar } from 'drizzle-orm/pg-core';

export const helpline = pgTable('helpline', {
  id: serial('id').primaryKey(),
  place: varchar('place', { length: 100 }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  helplineNumber: varchar('helpline_number', { length: 15 }).notNull(),
});
export type HelplineInsert = typeof donations.$inferInsert;
export type Helpline = typeof helpline.$inferSelect; // For type inference
