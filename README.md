# Intro:

## _ts-calendar-store_ is a lightweight headless state management library built with Typescript and Zustand.

# Guide

## 1. Import createCalendarStore:

```ts
import { createCalendarStore } from "ts-calendar-store";
```

## 2. (optional) Define EventData type

```ts
type EventData = {
  meetingID: string;
  attendees: Array<string>;
};
```

## 3. Create the store

```ts
const useCalendarStore = createCalendarStore<EventData>();
```

## 4. Insert data into the store

```ts
let eventData: EventData = {
  meetingID: "uuid",
  attendees: ["Chris", "Robert", "etc"],
};

let newEvent = {
  id: "uuid",
  start: new Date(),
  end: new Date(),
  calendar: "My-super-cool-calendar",
  data: eventData,
};

useCalendarStore.getState().addEvent(newEvent);
```

## 5. Retrieve Data

```ts
console.log(useCalendarStore.getState().events);
```

# Complete example:

```ts
import { createCalendarStore } from "ts-calendar-store";

type EventData = {
  meetingID: string;
  attendees: Array<string>;
};

const useCalendarStore = createCalendarStore<EventData>();

let eventData: EventData = {
  meetingID: "uuid",
  attendees: ["Chris", "Robert", "etc"],
};

let newEvent = {
  id: "uuid",
  start: new Date(),
  end: new Date(),
  data: eventData,
};

useCalendarStore.getState().addEvent(newEvent);

console.log(useCalendarStore.getState().events);
```

# Notes:

This library is available under the **Apache 2.0 License**
