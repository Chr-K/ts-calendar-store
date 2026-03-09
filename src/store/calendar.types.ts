/*
 * Filename:\src\store\calendar.types.ts
 * Created Date: Monday, March 9th 2026, 4:13:08 pm
 * Author: Christopher A. Kufis
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2026 Christopher A. Kufis
 * 
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type CalendarView = "month" | "week" | "day";

export type CalendarEvent<T = unknown> = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  calendars?: Array<Calendar> | Calendar;
  data?: T;
};

export interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  view: CalendarView;
  events: Array<CalendarEvent>;
}

export interface Calendar {
  title: string;
  id: string;
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
