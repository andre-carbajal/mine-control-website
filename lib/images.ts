export const LOADER_IMAGES = {
    vanilla: {
        src: "/images/loaders/vanilla.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/vanilla.webp",
        alt: "Vanilla Minecraft",
    },
    snapshots: {
        src: "/images/loaders/snapshots.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/snapshots.webp",
        alt: "Minecraft Snapshots",
    },
    paper: {
        src: "/images/loaders/paper.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/paper.webp",
        alt: "PaperMC",
    },
    fabric: {
        src: "/images/loaders/fabric.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/fabric.webp",
        alt: "Fabric",
    },
    neoforge: {
        src: "/images/loaders/neoforge.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/neoforge.webp",
        alt: "NeoForge",
    },
    forge: {
        src: "/images/loaders/forge.webp",
        fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/loaders/forge.webp",
        alt: "Forge",
    },
} as const;

export const APP_ICON = {
    src: "/images/mine-control-cli.webp",
    fallback: "https://7mxtc6awuknyzgz3.public.blob.vercel-storage.com/mine-control-cli.webp",
    alt: "Mine Control CLI",
} as const;

export type LoaderType = keyof typeof LOADER_IMAGES;
