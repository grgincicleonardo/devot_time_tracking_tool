"use client";
import Image from "next/image";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { collection, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { FilterMatchMode } from "primereact/api";

const data = [
  {
    id: 1,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 2,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "dsadasdda 123 Jira lorem ipsum dolor sit amet ",
    date: "13.12.2023",
  },
];

export default function Home() {
  const [startingDate, setStartingDate] = useState<
    string | Date | Date[] | null
  >(null);

  const [endingDate, setEndingDate] = useState<string | Date | Date[] | null>(
    null
  );

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  return (
    <main className="">
      <div className="container mx-auto bg-lilac mt-40">
        <div className="w-full flex justify-between gap-4 lg:gap-20">
          <Calendar
            value={startingDate}
            onChange={(e: CalendarChangeEvent) => setStartingDate(e.value)}
            showIcon
            className="w-full"
          />

          <Calendar
            value={endingDate}
            onChange={(e: CalendarChangeEvent) => setEndingDate(e.value)}
            showIcon
            className="w-full"
          />
          <span className="p-input-icon-right">
            <i className="pi pi-spin pi-close" />
            <InputText
              className="w-full"
              onInput={(e) =>
                setFilters({
                  global: {
                    value: e.target.value,
                    matchMode: FilterMatchMode.CONTAINS,
                  },
                })
              }
            />
          </span>
        </div>

        <div className="mt-10">
          <DataTable
            showGridlines
            paginator
            rows={5}
            value={data}
            sortMode="multiple"
            filters={filters}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="date" header="Name"></Column>
            <Column field="description" header="Name"></Column>
            <Column field="time" header="Code"></Column>
          </DataTable>
        </div>
      </div>
    </main>
  );
}
