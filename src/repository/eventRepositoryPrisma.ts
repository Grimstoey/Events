import { prisma } from "../lib/prisma";
import type Event from "../models/Event";

export function getEventByCategory(category: string) {
  return prisma.event.findMany({
    where: { category },
  });
}

export function getAllEvents() {
  return prisma.event.findMany();
}

export function getEventById(id: number) {
  return prisma.event.findUnique({
    where: { id },
    select: {
      title: true,
      time: true,
      organizer: {
        select: {
          id: true,
        },
      },
    },
  });
}

export function addEvent(newEvent: Event) {
  return prisma.event.create({
    data: {
      category: newEvent.category,
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
      date: newEvent.date,
      time: newEvent.time,
      petsAllowed: newEvent.petsAllowed,
      organizer: {
        connect: { id: newEvent.organizerId },
      },
    },
  });
}

export function getAllEventsWithOrganizer() {
  return prisma.event.findMany({
    select: {
      id: true,
      category: true,
      organizerId: false,
      organizer: {
        select: {
          name: true,
        },
      },
      participants: {
        select: {
          id: true,
          name: true,
          email: true,
          events: true,
        },
      },
    },
  });
}




