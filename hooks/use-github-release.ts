import { useState, useEffect } from 'react'

interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  html_url: string
}

export function useGitHubRelease(owner: string, repo: string) {
  const [release, setRelease] = useState<GitHubRelease | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch release data')
        }
        
        const data: GitHubRelease = await response.json()
        setRelease(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        setRelease(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestRelease()
  }, [owner, repo])

  return { release, isLoading, error }
}
