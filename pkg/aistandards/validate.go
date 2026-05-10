package aistandards

import (
	"errors"
	"fmt"
	"strings"
)

// ValidationError contains details about validation failures.
type ValidationError struct {
	Field   string
	Message string
}

func (e ValidationError) Error() string {
	return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

// ValidationErrors is a collection of validation errors.
type ValidationErrors []ValidationError

func (e ValidationErrors) Error() string {
	if len(e) == 0 {
		return ""
	}
	msgs := make([]string, len(e))
	for i, err := range e {
		msgs[i] = err.Error()
	}
	return strings.Join(msgs, "; ")
}

// HasErrors returns true if there are validation errors.
func (e ValidationErrors) HasErrors() bool {
	return len(e) > 0
}

// Validator validates implementations against standards and languages.
type Validator struct {
	Standards *Standards
	Languages *Languages
}

// NewValidator creates a new validator with the given standards and languages.
func NewValidator(standards *Standards, languages *Languages) *Validator {
	return &Validator{
		Standards: standards,
		Languages: languages,
	}
}

// ValidateImplementations validates all implementations.
func (v *Validator) ValidateImplementations(impls *Implementations) ValidationErrors {
	var errs ValidationErrors
	standardSlugs := make(map[string]bool)
	for _, s := range v.Standards.Slugs() {
		standardSlugs[s] = true
	}

	for repo, impl := range impls.Implementations {
		// Validate repo format
		if !isValidRepoFormat(repo) {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("implementations[%s]", repo),
				Message: "invalid repo format, expected 'owner/repo'",
			})
		}

		// Validate standards references
		for _, stdSlug := range impl.Standards {
			if !standardSlugs[stdSlug] {
				errs = append(errs, ValidationError{
					Field:   fmt.Sprintf("implementations[%s].standards", repo),
					Message: fmt.Sprintf("unknown standard slug: %s", stdSlug),
				})
			}
		}

		// Validate language references
		for _, langID := range impl.Languages {
			if !v.Languages.Has(langID) {
				errs = append(errs, ValidationError{
					Field:   fmt.Sprintf("implementations[%s].languages", repo),
					Message: fmt.Sprintf("unknown language: %s", langID),
				})
			}
		}

		// Validate required fields
		if strings.TrimSpace(impl.Name) == "" {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("implementations[%s].name", repo),
				Message: "name is required",
			})
		}

		if strings.TrimSpace(impl.Description) == "" {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("implementations[%s].description", repo),
				Message: "description is required",
			})
		}

		if len(impl.Standards) == 0 {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("implementations[%s].standards", repo),
				Message: "at least one standard is required",
			})
		}

		if len(impl.Languages) == 0 {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("implementations[%s].languages", repo),
				Message: "at least one language is required",
			})
		}
	}

	return errs
}

// ValidateStandards validates the standards list.
func (v *Validator) ValidateStandards() ValidationErrors {
	var errs ValidationErrors
	slugsSeen := make(map[string]bool)

	for i, std := range v.Standards.Standards {
		// Check for duplicate slugs
		if slugsSeen[std.Slug] {
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("standards[%d].slug", i),
				Message: fmt.Sprintf("duplicate slug: %s", std.Slug),
			})
		}
		slugsSeen[std.Slug] = true

		// Validate category
		switch std.Category {
		case CategoryAgent, CategoryIdentity, CategoryGeneral:
			// valid
		default:
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("standards[%d].category", i),
				Message: fmt.Sprintf("invalid category: %s", std.Category),
			})
		}

		// Validate status
		switch std.Status {
		case StatusDraft, StatusProposed, StatusAdopted:
			// valid
		default:
			errs = append(errs, ValidationError{
				Field:   fmt.Sprintf("standards[%d].status", i),
				Message: fmt.Sprintf("invalid status: %s", std.Status),
			})
		}
	}

	return errs
}

// isValidRepoFormat checks if the repo string is in "owner/repo" format.
func isValidRepoFormat(repo string) bool {
	parts := strings.Split(repo, "/")
	if len(parts) != 2 {
		return false
	}
	return len(parts[0]) > 0 && len(parts[1]) > 0
}

// ErrValidation is returned when validation fails.
var ErrValidation = errors.New("validation failed")
