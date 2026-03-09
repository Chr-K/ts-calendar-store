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
export declare const useCalendarStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CalendarStore>>;
export {};
