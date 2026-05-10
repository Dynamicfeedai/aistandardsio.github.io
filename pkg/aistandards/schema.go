package aistandards

import (
	"encoding/json"

	"github.com/invopop/jsonschema"
)

// GenerateJSONSchema generates JSON Schema for the given type.
func GenerateJSONSchema(v any) ([]byte, error) {
	r := jsonschema.Reflector{
		DoNotReference:             true,
		ExpandedStruct:             true,
		AllowAdditionalProperties:  false,
		RequiredFromJSONSchemaTags: true,
	}
	schema := r.Reflect(v)
	return json.MarshalIndent(schema, "", "  ")
}

// GenerateStandardsSchema generates JSON Schema for Standards.
func GenerateStandardsSchema() ([]byte, error) {
	return GenerateJSONSchema(&Standards{})
}

// GenerateLanguagesSchema generates JSON Schema for Languages.
func GenerateLanguagesSchema() ([]byte, error) {
	return GenerateJSONSchema(&Languages{})
}

// GenerateImplementationsSchema generates JSON Schema for Implementations.
func GenerateImplementationsSchema() ([]byte, error) {
	return GenerateJSONSchema(&Implementations{})
}

// AllSchemas contains all schemas for export.
type AllSchemas struct {
	Standards       json.RawMessage `json:"standards"`
	Languages       json.RawMessage `json:"languages"`
	Implementations json.RawMessage `json:"implementations"`
}

// GenerateAllSchemas generates all JSON schemas.
func GenerateAllSchemas() (*AllSchemas, error) {
	standards, err := GenerateStandardsSchema()
	if err != nil {
		return nil, err
	}

	languages, err := GenerateLanguagesSchema()
	if err != nil {
		return nil, err
	}

	implementations, err := GenerateImplementationsSchema()
	if err != nil {
		return nil, err
	}

	return &AllSchemas{
		Standards:       standards,
		Languages:       languages,
		Implementations: implementations,
	}, nil
}
