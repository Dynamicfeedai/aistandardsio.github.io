package aistandards

import (
	"encoding/json"
	"os"
)

// ReadStandards reads standards from a JSON file.
func ReadStandards(path string) (*Standards, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	// Handle both array format and object format
	var standards Standards

	// Try array format first (current format)
	var arr []Standard
	if err := json.Unmarshal(data, &arr); err == nil {
		standards.Standards = arr
		return &standards, nil
	}

	// Try object format
	if err := json.Unmarshal(data, &standards); err != nil {
		return nil, err
	}

	return &standards, nil
}

// WriteStandards writes standards to a JSON file.
func WriteStandards(path string, standards *Standards) error {
	data, err := json.MarshalIndent(standards, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

// ReadLanguages reads languages from a JSON file.
func ReadLanguages(path string) (*Languages, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	var languages Languages
	if err := json.Unmarshal(data, &languages); err != nil {
		// Try flat map format
		var flat map[LanguageID]Language
		if err := json.Unmarshal(data, &flat); err != nil {
			return nil, err
		}
		languages.Languages = flat
	}

	return &languages, nil
}

// WriteLanguages writes languages to a JSON file.
func WriteLanguages(path string, languages *Languages) error {
	data, err := json.MarshalIndent(languages, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

// ReadImplementations reads implementations from a JSON file.
func ReadImplementations(path string) (*Implementations, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	// Try flat map format first (repo -> implementation)
	var flat map[string]Implementation
	if err := json.Unmarshal(data, &flat); err == nil && len(flat) > 0 {
		// Check if this looks like a flat map (first value has required fields)
		for _, impl := range flat {
			if impl.Name != "" {
				return &Implementations{Implementations: flat}, nil
			}
			break
		}
	}

	// Try wrapped format
	var impls Implementations
	if err := json.Unmarshal(data, &impls); err != nil {
		return nil, err
	}

	return &impls, nil
}

// WriteImplementations writes implementations to a JSON file.
func WriteImplementations(path string, impls *Implementations) error {
	data, err := json.MarshalIndent(impls, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

// WriteJSON writes any value to a JSON file.
func WriteJSON(path string, v any) error {
	data, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

// WriteMarkdown writes markdown content to a file.
func WriteMarkdown(path string, content string) error {
	return os.WriteFile(path, []byte(content), 0644)
}
