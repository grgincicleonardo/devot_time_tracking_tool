"use client";
import Image from "next/image";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { collection, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto mt-40">
        <div className="w-full flex justify-end">
          <div className="flex gap-4">
            <Button label="Start new timer" icon="pi pi-clock" />
            <Button label="Stop all" icon="pi pi-stop-circle" />
          </div>
        </div>
        <div className="mt-10">
          <DataTable
            showGridlines
            paginator
            rows={10}
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            sortField="id"
            sortOrder={-1}
            editMode="cell"
          >
            <Column field="time" header="Code"></Column>
            <Column field="description" header="Name"></Column>
          </DataTable>
        </div>
      </div>
    </main>
  );
}
const data = [
  {
    id: 0,
    time: "1:33:24",
    description: "This is the oldest task ",
  },
  {
    id: 999,
    time: "1:33:24",
    description: "This is the newest task ",
  },
  {
    id: 1,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 2,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "Task 123 Jira lorem ipsum dolor sit amet ",
  },
  {
    id: 3,
    time: "1:33:24",
    description: "dsadasdda 123 Jira lorem ipsum dolor sit amet ",
  },
];
