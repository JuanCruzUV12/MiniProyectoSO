"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [stats, setStats] = useState<any>();

  async function loadStats() {

    const res =
      await fetch("/api/stats");

    const data =
      await res.json();

    setStats(data);
  }

  useEffect(() => {

    loadStats();

    const timer =
      setInterval(loadStats, 2000);

    return () =>
      clearInterval(timer);

  }, []);

  async function startTest() {

    for (let i = 0; i < 100; i++) {

      fetch("/api/load/start", {
        method: "POST",
      });
    }
  }

  async function extremeTest() {

    fetch("/api/load/extreme", {
      method: "POST",
    });
  }

  return (

    <main
      style={{
        padding: 40,
      }}
    >

      <h1>
        Dashboard Stress Test
      </h1>

      <hr />

      <h2>
        Total registros:
        {" "}
        {stats?.totalRequests}
      </h2>

      <h2>
        Tiempo promedio:
        {" "}
        {stats?.averageExecutionTime}
      </h2>

      <button
        onClick={startTest}
      >
        Iniciar Prueba
      </button>

      <br />
      <br />

      <button
        onClick={extremeTest}
      >
        Generar Carga Extrema
      </button>

    </main>
  );
}
