package aistandards

// Implementation represents a software implementation of one or more standards.
type Implementation struct {
	// Name is the display name of the implementation.
	Name string `json:"name" jsonschema:"required,minLength=1"`

	// Description provides a brief overview of the implementation.
	Description string `json:"description" jsonschema:"required,minLength=10"`

	// Standards lists the standard slugs this implementation supports.
	Standards []string `json:"standards" jsonschema:"required,minItems=1"`

	// Languages lists the programming languages used.
	Languages []LanguageID `json:"languages" jsonschema:"required,minItems=1"`

	// Categories for Awesome list organization (e.g., ["Libraries", "Authentication"]).
	Categories []string `json:"categories,omitempty"`

	// Maintainers lists GitHub usernames of maintainers.
	Maintainers []string `json:"maintainers,omitempty"`

	// Official indicates if this is an official implementation by the standard authors.
	Official bool `json:"official,omitempty"`

	// Archived indicates if this implementation is no longer maintained.
	Archived bool `json:"archived,omitempty"`

	// Website is an optional URL to the project website (if different from repo).
	Website string `json:"website,omitempty" jsonschema:"format=uri"`

	// Levels describes the implementation architecture (for multi-level projects).
	Levels *ImplementationLevels `json:"levels,omitempty"`
}

// ImplementationLevels describes a three-level implementation architecture.
type ImplementationLevels struct {
	// Base indicates if base/core packages are available.
	Base bool `json:"base,omitempty"`

	// Adapters lists ecosystem adapters (e.g., ["zitadel", "keycloak"]).
	Adapters []string `json:"adapters,omitempty"`

	// Examples indicates if end-to-end examples are available.
	Examples bool `json:"examples,omitempty"`
}

// Implementations is a collection of Implementation entries keyed by GitHub repo.
type Implementations struct {
	// Implementations maps GitHub repo paths (owner/repo) to implementation metadata.
	Implementations map[string]Implementation `json:"implementations" jsonschema:"required"`
}

// Repos returns all repository keys.
func (i *Implementations) Repos() []string {
	repos := make([]string, 0, len(i.Implementations))
	for repo := range i.Implementations {
		repos = append(repos, repo)
	}
	return repos
}

// GitHubURL returns the full GitHub URL for a repo key.
func GitHubURL(repo string) string {
	return "https://github.com/" + repo
}
