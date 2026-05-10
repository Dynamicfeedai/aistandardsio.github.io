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

	// SpecURL is the URL to the specification document.
	SpecURL string `json:"specUrl" jsonschema:"required,format=uri"`

	// Description provides a brief overview of the standard.
	Description string `json:"description" jsonschema:"required,minLength=10"`
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
