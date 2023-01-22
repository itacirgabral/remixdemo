import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";

export default function GetParamId () {
  const loaderData = useLoaderData()
  return <main>
    <p>alou alou {loaderData}</p>
  </main>
}

export function loader (loaderArgs: LoaderArgs) {
  const { id } = loaderArgs.params
  return `loader ${id}`
}