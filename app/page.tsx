import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Terminal,
  Server,
  List,
  Trash2,
  Play,
  Download,
  Github,
  Apple,
  LaptopIcon as Linux,
  ComputerIcon as Windows,
  Coffee,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { LOADER_IMAGES, type LoaderType } from "@/lib/images"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`flex flex-col items-center text-center p-4 border border-border rounded-lg bg-card ${className}`}>
      {icon}
      <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

interface LoaderCardProps {
  loaderType: LoaderType;
  name: string;
}

function LoaderCard({ loaderType, name }: LoaderCardProps) {
  const imageConfig = LOADER_IMAGES[loaderType];
  
  return (
    <div className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-card">
      <div className="relative w-16 h-16">
        <OptimizedImage
          src={imageConfig.src}
          fallback={imageConfig.fallback}
          alt={imageConfig.alt}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
    </div>
  )
}

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Server className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Mine Control CLI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#loaders">Loaders</Link>
              <Link href="#features">Features</Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-purple-100 dark:bg-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                  Manage Minecraft Servers with Mine Control CLI
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl font-medium">
                  A powerful CLI tool to create, manage, and run Minecraft servers effortlessly.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-base text-foreground/80 font-medium">Available on all your favorite platforms</p>
                <div className="flex justify-center items-center space-x-8">
                  <Apple className="h-8 w-8 hover:text-foreground transition-colors" />
                  <Linux className="h-8 w-8 hover:text-foreground transition-colors" />
                  <Windows className="h-8 w-8 hover:text-foreground transition-colors" />
                  <Coffee className="h-8 w-8 hover:text-foreground transition-colors" />
                </div>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" asChild>
                  <Link href="https://github.com/andre-carbajal/mine-control-cli/releases">Download Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://github.com/andre-carbajal/mine-control-cli">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="loaders" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-foreground">
              Supported Loaders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <LoaderCard loaderType="vanilla" name="Vanilla" />
              <LoaderCard loaderType="snapshots" name="Snapshots" />
              <LoaderCard loaderType="paper" name="Paper" />
              <LoaderCard loaderType="fabric" name="Fabric" />
              <LoaderCard loaderType="neoforge" name="NeoForge" />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-foreground">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Terminal className="h-10 w-10 text-purple-500" />}
                title="Create"
                description="Easily create new Minecraft servers with a single command."
              />
              <FeatureCard
                icon={<List className="h-10 w-10 text-purple-500" />}
                title="List"
                description="View all your Minecraft servers at a glance."
              />
              <FeatureCard
                icon={<Trash2 className="h-10 w-10 text-purple-500" />}
                title="Delete"
                description="Remove servers you no longer need quickly and safely."
              />
              <FeatureCard
                icon={<Play className="h-10 w-10 text-purple-500" />}
                title="Start"
                description="Launch your Minecraft servers with ease."
              />
              <FeatureCard
                icon={<Download className="h-10 w-10 text-purple-500" />}
                title="Loaders"
                description="Check out different Minecraft server loaders effortlessly."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-purple-500" />}
                title="Backups"
                description="Create backups of your Minecraft servers."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-6 flex justify-center items-center">
          <p className="text-xs text-muted-foreground">© {currentYear} Mine Control CLI</p>
        </div>
      </footer>
    </div>
  )
}

