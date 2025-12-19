import type Event from "../models/Event";
import { query } from "../db"; // สมมติว่า export query มาจากไฟล์ db

export async function getEventByCategory(category: string): Promise<Event[]> {
  const result = await query(
    "SELECT * FROM events WHERE category = $1",
    [category]
  );
  return result.rows;
}

export async function getAllEvents(): Promise<Event[]> {
  const result = await query("SELECT * FROM events");
  return result.rows;
}

export async function getEventById(id: number): Promise<Event | undefined> {
  const result = await query("SELECT * FROM events WHERE id = $1", [id]);
  return result.rows[0];
}

export async function addEvent(newEvent: Event): Promise<Event> {
  const {
    category,
    title,
    description,
    location,
    date,
    time,
    petsAllowed,
    organizer,
  } = newEvent;

  const result = await query(
    `INSERT INTO events
     (category, title, description, location, date, time, petsAllowed, organizer)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [category, title, description, location, date, time, petsAllowed, organizer]
  );

  return result.rows[0];
}
