import Hero from "./components/hero"
import { Analytics } from "@vercel/analytics/next"


function App() {

  return (
    <>
      <div className="bg-blobs"></div>
      <Hero />

      <Analytics />
    </>
  )
}

export default App
