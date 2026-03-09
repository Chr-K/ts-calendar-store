/*
 * Filename:\src\store\calendar.store.ts
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
