import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
    Apple,
    Coffee,
    ComputerIcon as Windows,
    Download,
    LaptopIcon as Linux,
    List,
    Play,
    Server,
    Terminal,
    Trash2,
} from "lucide-react"
import {OptimizedImage} from "@/components/ui/optimized-image"
import {GitHubButton} from "@/components/github-button"
import {LOADER_IMAGES, type LoaderType, APP_ICON} from "@/lib/images"
import {ReactNode} from "react"

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

function FeatureCard({icon, title, description, className = ""}: FeatureCardProps) {
    return (
        <div
            className={`flex flex-col items-center text-center p-4 border border-border rounded-lg bg-card ${className}`}>
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

function LoaderCard({loaderType, name}: LoaderCardProps) {
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
            <header
                className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 max-w-screen-xl items-center justify-between">
                    <div className="flex items-center">
                        <Link className="mr-6 flex items-center space-x-2" href="/">
                            <div className="relative w-8 h-8">
                                <OptimizedImage
                                    src={APP_ICON.src}
                                    fallback={APP_ICON.fallback}
                                    alt={APP_ICON.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold">Mine Control CLI</span>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                            <Link href="#loaders">Loaders</Link>
                            <Link href="#features">Features</Link>
                        </nav>
                    </div>
                    <GitHubButton owner="andre-carbajal" repo="mine-control-cli"/>
                </div>
            </header>
            <main className="flex-1 pt-14">
                <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-purple-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-2">
                                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none font-bold tracking-tighter text-foreground">
                                    Manage Minecraft Servers with Mine Control CLI
                                </h1>
                                <p className="mx-auto max-w-[90vw] sm:max-w-[700px] text-foreground/80 md:text-xl font-medium px-2">
                                    A powerful CLI tool to create, manage, and run Minecraft servers effortlessly.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-base text-foreground/80 font-medium">Available on all your favorite
                                    platforms</p>
                                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                                    <div className="flex flex-col items-center space-y-2">
                                        <Apple className="h-8 w-8 hover:text-foreground transition-colors"/>
                                        <span className="text-xs text-foreground/70">macOS</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Linux className="h-8 w-8 hover:text-foreground transition-colors"/>
                                        <span className="text-xs text-foreground/70">Linux</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Windows className="h-8 w-8 hover:text-foreground transition-colors"/>
                                        <span className="text-xs text-foreground/70">Windows</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <Coffee className="h-8 w-8 hover:text-foreground transition-colors"/>
                                        <span className="text-xs text-foreground/70">Java</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto justify-center items-center">
                                <Button size="lg" asChild className="w-full sm:w-auto">
                                    <Link href="https://github.com/andre-carbajal/mine-control-cli/releases">Download
                                        Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="loaders" className="w-full py-8 md:py-24 lg:py-32 bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-center mb-8 md:mb-12 text-foreground">
                            Supported Loaders
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                            <LoaderCard loaderType="vanilla" name="Vanilla"/>
                            <LoaderCard loaderType="snapshots" name="Snapshots"/>
                            <LoaderCard loaderType="paper" name="Paper"/>
                            <LoaderCard loaderType="fabric" name="Fabric"/>
                            <LoaderCard loaderType="neoforge" name="NeoForge"/>
                        </div>
                    </div>
                </section>

                <section id="features" className="w-full py-8 md:py-24 lg:py-32 bg-purple-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-center mb-8 md:mb-12 text-foreground">
                            Features
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <FeatureCard
                                icon={<Server className="h-10 w-10 text-purple-500"/>}
                                title="Server Management"
                                description="Create, list, delete, and start servers with commands like server create, server list, and server start."
                            />
                            <FeatureCard
                                icon={<Download className="h-10 w-10 text-purple-500"/>}
                                title="Backup System"
                                description="Create, list, delete, and restore server backups with backup create, backup list, and backup restore."
                            />
                            <FeatureCard
                                icon={<Terminal className="h-10 w-10 text-purple-500"/>}
                                title="Configuration"
                                description="Manage your CLI settings with config set, config get, config list, and config reset commands."
                            />
                            <FeatureCard
                                icon={<List className="h-10 w-10 text-purple-500"/>}
                                title="Loader Support"
                                description="Browse available server loaders with loader list command for different Minecraft versions."
                            />
                            <FeatureCard
                                icon={<Play className="h-10 w-10 text-purple-500"/>}
                                title="Update Check"
                                description="Check if a new version is available with the update check command - manual update required."
                            />
                            <FeatureCard
                                icon={<Trash2 className="h-10 w-10 text-purple-500"/>}
                                title="Easy Commands"
                                description="Use short aliases like sc (server create), sl (server list), ss (server start) for faster workflow."
                            />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t">
                <div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-6 flex justify-center items-center">
                    <p className="text-xs text-muted-foreground">© {currentYear} Mine Control CLI</p>
                </div>
            </footer>
        </div>
    )
}
