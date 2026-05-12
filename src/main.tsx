import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "@/app/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClickSpark sparkColor="#AFFF00" sparkSize={12} sparkRadius={20} sparkCount={8} duration={400} easing="ease-out">
      <LenisProvider>
        <App />
      </LenisProvider>
    </ClickSpark>
  </React.StrictMode>,
)
