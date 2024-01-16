//@ts-nocheck
import { Button } from "./stories/Button"
import { PAGE_LIST } from "./utils/PAGE_LIST";
import { useEffect, useState } from "react";

function App() {




  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {PAGE_LIST.map((item) => {
        return <a href={item.url} key={item.label}> {item.label}</a>
      })}
    </div >
  )
}

export default App
