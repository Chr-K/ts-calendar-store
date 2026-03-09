import { create } from "zustand";

export type CalendarView = "month" | "week" | "day";

export type CalendarEvent<T = unknown> = {
  id: string;
  start: Date;
  end: Date;
  data?: T;
};

interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  view: CalendarView;
  events: Array<CalendarEvent>;
}

interface CalendarActions {
  setCurrentDate: (date: Date) => void;
  setSelectedDate: (date: Date | null) => void;
  setView: (view: CalendarView) => void;

  addEvent: (event: CalendarEvent) => void;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => void;
  removeEvent: (id: string) => void;
}

type CalendarStore = CalendarState & CalendarActions;

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
