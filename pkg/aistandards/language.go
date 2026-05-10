package aistandards

// LanguageID is a controlled vocabulary identifier for programming languages.
type LanguageID string

const (
	LangGo         LanguageID = "go"
	LangPython     LanguageID = "python"
	LangTypeScript LanguageID = "typescript"
	LangJavaScript LanguageID = "javascript"
	LangRust       LanguageID = "rust"
	LangJava       LanguageID = "java"
	LangCSharp     LanguageID = "csharp"
	LangRuby       LanguageID = "ruby"
	LangSwift      LanguageID = "swift"
	LangKotlin     LanguageID = "kotlin"
	LangCpp        LanguageID = "cpp"
	LangC          LanguageID = "c"
	LangPHP        LanguageID = "php"
	LangElixir     LanguageID = "elixir"
)

// Language represents a programming language with display metadata.
type Language struct {
	// ID is the unique identifier for the language.
	ID LanguageID `json:"id" jsonschema:"required"`

	// Name is the display name of the language.
	Name string `json:"name" jsonschema:"required"`

	// Color is the hex color associated with the language (for badges/UI).
	Color string `json:"color" jsonschema:"required,pattern=^#[0-9A-Fa-f]{6}$"`
}

// Languages is a collection of Language entries keyed by ID.
type Languages struct {
	// Languages maps language IDs to their metadata.
	Languages map[LanguageID]Language `json:"languages" jsonschema:"required"`
}

// DefaultLanguages returns the default set of supported languages.
func DefaultLanguages() Languages {
	return Languages{
		Languages: map[LanguageID]Language{
			LangGo:         {ID: LangGo, Name: "Go", Color: "#00ADD8"},
			LangPython:     {ID: LangPython, Name: "Python", Color: "#3776AB"},
			LangTypeScript: {ID: LangTypeScript, Name: "TypeScript", Color: "#3178C6"},
			LangJavaScript: {ID: LangJavaScript, Name: "JavaScript", Color: "#F7DF1E"},
			LangRust:       {ID: LangRust, Name: "Rust", Color: "#DEA584"},
			LangJava:       {ID: LangJava, Name: "Java", Color: "#ED8B00"},
			LangCSharp:     {ID: LangCSharp, Name: "C#", Color: "#512BD4"},
			LangRuby:       {ID: LangRuby, Name: "Ruby", Color: "#CC342D"},
			LangSwift:      {ID: LangSwift, Name: "Swift", Color: "#F05138"},
			LangKotlin:     {ID: LangKotlin, Name: "Kotlin", Color: "#7F52FF"},
			LangCpp:        {ID: LangCpp, Name: "C++", Color: "#00599C"},
			LangC:          {ID: LangC, Name: "C", Color: "#A8B9CC"},
			LangPHP:        {ID: LangPHP, Name: "PHP", Color: "#777BB4"},
			LangElixir:     {ID: LangElixir, Name: "Elixir", Color: "#4B275F"},
		},
	}
}

// IDs returns all valid language IDs.
func (l *Languages) IDs() []LanguageID {
	ids := make([]LanguageID, 0, len(l.Languages))
	for id := range l.Languages {
		ids = append(ids, id)
	}
	return ids
}

// Has checks if a language ID is valid.
func (l *Languages) Has(id LanguageID) bool {
	_, ok := l.Languages[id]
	return ok
}
