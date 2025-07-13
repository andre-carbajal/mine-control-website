'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useGitHubRelease } from "@/hooks/use-github-release"

interface GitHubButtonProps {
  owner: string
  repo: string
  className?: string
}

export function GitHubButton({ owner, repo, className }: GitHubButtonProps) {
  const { release, isLoading, error } = useGitHubRelease(owner, repo)

  const getButtonText = () => {
    if (isLoading) return "GitHub"
    if (error || !release) return "GitHub"
    return `GitHub ${release.tag_name}`
  }

  return (
    <Button size="sm" variant="outline" asChild className={className}>
      <Link href={`https://github.com/${owner}/${repo}`}>
        <Github className="mr-2 h-4 w-4" />
        {getButtonText()}
      </Link>
    </Button>
  )
}
