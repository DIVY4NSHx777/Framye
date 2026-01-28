import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
export default function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center mt-10 gap-4">

      <Link
        to="/login"
        className="group font-orbit text-md tracking-wider text-muted-foreground border-2 px-6 py-2 rounded-full inline-flex items-center gap-2
             transition-all duration-300 ease-in-out
             hover:text-foreground hover:border-foreground"
      >
        Introducing Interstellar
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
        />
      </Link>
      <h1 className="text-6xl font-orbit mt-6">
        From Thought to Reality
      </h1>
      <p className="text-muted-foreground font-space text-lg w-1/2 text-center">
        Transform your ideas into stunning visuals with Framye, the AI-powered design tool that brings your imagination to life.
      </p>



    </div>
  )
}