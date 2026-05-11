package aistandards

// StandardCategory represents the category of a standard.
type StandardCategory string

const (
	CategoryAgent    StandardCategory = "agent"
	CategoryIdentity StandardCategory = "identity"
	CategoryGeneral  StandardCategory = "general"
)

// StandardStatus represents the adoption status of a standard.
type StandardStatus string

const (
	StatusDraft    StandardStatus = "draft"
	StatusProposed StandardStatus = "proposed"
	StatusAdopted  StandardStatus = "adopted"
)

// LinkType categorizes a link related to a standard.
type LinkType string

const (
	LinkTypeSpec    LinkType = "spec"    // Specification document
	LinkTypeSDK     LinkType = "sdk"     // SDK/library implementation
	LinkTypeDemo    LinkType = "demo"    // Demo or example
	LinkTypeDocs    LinkType = "docs"    // Documentation
	LinkTypeWebsite LinkType = "website" // Project website
)

// StandardLink represents a related URL for a standard.
type StandardLink struct {
	// Label is the display text for the link.
	Label string `json:"label" jsonschema:"required,minLength=1"`

	// URL is the link destination.
	URL string `json:"url" jsonschema:"required,format=uri"`

	// Type categorizes the link.
	Type LinkType `json:"type" jsonschema:"required,enum=spec,enum=sdk,enum=demo,enum=docs,enum=website"`

	// Language is the programming language for SDK/demo links (optional).
	Language LanguageID `json:"language,omitempty"`
}

// Standard represents an AI standard or protocol specification.
type Standard struct {
	// Slug is the unique identifier for the standard (e.g., "mcp", "id-jag").
	Slug string `json:"slug" jsonschema:"required,minLength=1,pattern=^[a-z0-9-]+$"`

	// Name is the full name of the standard.
	Name string `json:"name" jsonschema:"required,minLength=1"`

	// ShortName is the abbreviated name (e.g., "MCP", "ID-JAG").
	ShortName string `json:"shortName" jsonschema:"required,minLength=1"`

	// Category classifies the standard type.
	Category StandardCategory `json:"category" jsonschema:"required,enum=agent,enum=identity,enum=general"`

	// Status indicates the adoption level.
	Status StandardStatus `json:"status" jsonschema:"required,enum=draft,enum=proposed,enum=adopted"`

	// SpecURL is the URL to the primary specification document.
	SpecURL string `json:"specUrl" jsonschema:"required,format=uri"`

	// Description provides a brief overview of the standard.
	Description string `json:"description" jsonschema:"required,minLength=10"`

	// WebsiteURL is the optional project website.
	WebsiteURL string `json:"websiteUrl,omitempty" jsonschema:"format=uri"`

	// Links contains additional related URLs (SDKs, demos, docs, etc.).
	Links []StandardLink `json:"links,omitempty"`
}

// Standards is a collection of Standard entries.
type Standards struct {
	// Standards is the list of all standards.
	Standards []Standard `json:"standards" jsonschema:"required"`
}

// StandardsMap returns a map of standards keyed by slug.
func (s *Standards) StandardsMap() map[string]Standard {
	m := make(map[string]Standard, len(s.Standards))
	for _, std := range s.Standards {
		m[std.Slug] = std
	}
	return m
}

// Slugs returns all standard slugs.
func (s *Standards) Slugs() []string {
	slugs := make([]string, len(s.Standards))
	for i, std := range s.Standards {
		slugs[i] = std.Slug
	}
	return slugs
}
