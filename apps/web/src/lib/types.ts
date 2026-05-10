export interface Standard {
  slug: string
  name: string
  shortName: string
  category: 'agent' | 'identity' | 'general'
  status: 'draft' | 'proposed' | 'adopted'
  specUrl: string
  description: string
}

export interface Implementation {
  name: string
  description: string
  standards: string[]
  languages: LanguageID[]
  categories?: string[]
  maintainers?: string[]
  official?: boolean
  archived?: boolean
  website?: string
  levels?: {
    base?: boolean
    adapters?: string[]
    examples?: boolean
  }
}

export type LanguageID =
  | 'go'
  | 'python'
  | 'typescript'
  | 'javascript'
  | 'rust'
  | 'java'
  | 'csharp'
  | 'ruby'
  | 'swift'
  | 'kotlin'
  | 'cpp'
  | 'c'
  | 'php'
  | 'elixir'

export interface Language {
  id: LanguageID
  name: string
  color: string
}

export type ImplementationsMap = Record<string, Implementation>

export const categoryColors: Record<Standard['category'], string> = {
  agent: 'var(--color-category-agent)',
  identity: 'var(--color-category-identity)',
  general: 'var(--color-category-general)',
}

export const categoryLabels: Record<Standard['category'], string> = {
  agent: 'Agent Protocol',
  identity: 'Identity Standard',
  general: 'General AI Standard',
}

export const statusColors: Record<Standard['status'], string> = {
  draft: 'var(--color-status-draft)',
  proposed: 'var(--color-status-proposed)',
  adopted: 'var(--color-status-adopted)',
}
