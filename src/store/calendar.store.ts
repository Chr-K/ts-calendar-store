import { create } from "zustand";
import type { CalendarStore } from "./calendar.types";

export const createCalendarStore = <T = unknown>() =>
  create<CalendarStore>((set) => ({
    currentDate: new Date(),
    selectedDate: null,
    view: "month",
    events: [],

    setCurrentDate: (date) => set({ currentDate: date }),

    setSelectedDate: (date) => set({ selectedDate: date }),

    setView: (view) => set({ view }),

    addEvent: (event) => set((state) => ({ events: [...state.events, event] })),

    updateEvent: (id, updates) =>
      set((state) => ({
        events: state.events.map((e) =>
          e.id === id ? { ...e, ...updates } : e
        ),
      })),

    removeEvent: (id) =>
      set((state) => ({
        events: state.events.filter((e) => e.id !== id),
      })),
  }));
