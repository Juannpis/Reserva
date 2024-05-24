"use client";
import { useRouter } from "next/navigation";
import React from "react";
import SectionTitle from "../components/atoms/texts/SectionTitle";
import SitasAppBar from "../components/molecules/SitasAppBar";
import ReservationsTable from "../components/organisms/ReservationsTables";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="App">
      <SitasAppBar onBackClick={handleClick} />
      <br></br>
      <br></br>
      <SectionTitle text="Historial de Reservas" />

      <ReservationsTable />
    </div>
  );
}
