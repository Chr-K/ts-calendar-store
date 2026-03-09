export type CalendarView = "month" | "week" | "day";

export type CalendarEvent<T = unknown> = {
  id: string;
  start: Date;
  end: Date;
  data?: T;
};

export interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  view: CalendarView;
  events: Array<CalendarEvent>;
}

export interface CalendarActions {
  setCurrentDate: (date: Date) => void;
  setSelectedDate: (date: Date | null) => void;
  setView: (view: CalendarView) => void;

  addEvent: (event: CalendarEvent) => void;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => void;
  removeEvent: (id: string) => void;
}

export type CalendarStore = CalendarState & CalendarActions;
