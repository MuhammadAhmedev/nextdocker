"use client"
import React, { useEffect, useState } from "react";

export default function Hellow() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setData(result.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      hellow form client component
      <div>Result from route handler:{data}</div>
    </div>
  );
}
