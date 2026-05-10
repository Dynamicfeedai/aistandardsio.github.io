package aistandards

import (
	"sort"

	"github.com/grokify/awesomely/schema"
)

// ToAwesome converts implementations to an Awesomely schema for Markdown export.
func (i *Implementations) ToAwesome(standards *Standards, languages *Languages) *schema.Awesome {
	awesome := &schema.Awesome{
		BulletOrdered: false,
		Categories:    buildCategories(i),
		Entries:       buildEntries(i, standards, languages),
	}
	return awesome
}

// buildCategories extracts unique categories from implementations.
func buildCategories(impls *Implementations) schema.Categories {
	catSet := make(map[string]bool)
	for _, impl := range impls.Implementations {
		if len(impl.Categories) > 0 {
			catPath := impl.Categories[0] // Use first category as primary
			catSet[catPath] = true
		}
	}

	cats := make(schema.Categories, 0, len(catSet))
	for catPath := range catSet {
		cats = append(cats, schema.Category{
			Path: []string{catPath},
			Name: catPath,
		})
	}

	// Sort categories alphabetically
	sort.Slice(cats, func(i, j int) bool {
		return cats[i].Name < cats[j].Name
	})

	return cats
}

// buildEntries converts implementations to Awesomely entries.
func buildEntries(impls *Implementations, standards *Standards, languages *Languages) schema.Entries {
	entries := make(schema.Entries, 0, len(impls.Implementations))

	// Get repos sorted for consistent output
	repos := impls.Repos()
	sort.Strings(repos)

	stdMap := standards.StandardsMap()

	for _, repo := range repos {
		impl := impls.Implementations[repo]

		// Build badges
		badges := buildBadges(repo, impl, languages)

		// Build description with standards info
		desc := impl.Description
		if len(impl.Standards) > 0 {
			stdNames := make([]string, 0, len(impl.Standards))
			for _, slug := range impl.Standards {
				if std, ok := stdMap[slug]; ok {
					stdNames = append(stdNames, std.ShortName)
				}
			}
			if len(stdNames) > 0 {
				desc += " [" + joinStrings(stdNames, ", ") + "]"
			}
		}

		// Determine category
		var category schema.Category
		if len(impl.Categories) > 0 {
			category = schema.Category{
				Path: []string{impl.Categories[0]},
				Name: impl.Categories[0],
			}
		} else {
			category = schema.Category{
				Path: []string{"Uncategorized"},
				Name: "Uncategorized",
			}
		}

		entry := schema.Entry{
			URL:         GitHubURL(repo),
			Name:        impl.Name,
			Description: desc,
			Category:    category,
			Badges:      badges,
		}

		entries = append(entries, entry)
	}

	return entries
}

// buildBadges creates shields.io badges for an implementation.
func buildBadges(repo string, impl Implementation, languages *Languages) []schema.Badge {
	var badges []schema.Badge

	// Language badges
	for _, langID := range impl.Languages {
		if lang, ok := languages.Languages[langID]; ok {
			badges = append(badges, schema.Badge{
				ImageURL: "https://img.shields.io/badge/" + lang.Name + "-" + lang.Color[1:] + "?style=flat-square&logo=" + string(langID),
				AltText:  lang.Name,
			})
		}
	}

	// GitHub stars badge
	badges = append(badges, schema.Badge{
		ImageURL: "https://img.shields.io/github/stars/" + repo + "?style=flat-square",
		LinkURL:  GitHubURL(repo),
		AltText:  "GitHub stars",
	})

	// Official badge
	if impl.Official {
		badges = append(badges, schema.Badge{
			ImageURL: "https://img.shields.io/badge/official-blue?style=flat-square",
			AltText:  "Official",
		})
	}

	return badges
}

// ToAwesomeByStandard creates an Awesome list organized by standard.
func (i *Implementations) ToAwesomeByStandard(standards *Standards, languages *Languages) *schema.Awesome {
	awesome := &schema.Awesome{
		BulletOrdered: false,
		Categories:    buildCategoriesByStandard(standards),
		Entries:       buildEntriesByStandard(i, standards, languages),
	}
	return awesome
}

// buildCategoriesByStandard creates categories from standards.
func buildCategoriesByStandard(standards *Standards) schema.Categories {
	cats := make(schema.Categories, 0, len(standards.Standards))
	for _, std := range standards.Standards {
		cats = append(cats, schema.Category{
			Path: []string{std.ShortName},
			Name: std.ShortName,
		})
	}
	return cats
}

// buildEntriesByStandard creates entries organized by standard.
func buildEntriesByStandard(impls *Implementations, standards *Standards, languages *Languages) schema.Entries {
	var entries schema.Entries

	repos := impls.Repos()
	sort.Strings(repos)

	for _, std := range standards.Standards {
		for _, repo := range repos {
			impl := impls.Implementations[repo]

			// Check if this implementation supports this standard
			if !containsString(impl.Standards, std.Slug) {
				continue
			}

			badges := buildBadges(repo, impl, languages)

			entry := schema.Entry{
				URL:         GitHubURL(repo),
				Name:        impl.Name,
				Description: impl.Description,
				Category: schema.Category{
					Path: []string{std.ShortName},
					Name: std.ShortName,
				},
				Badges: badges,
			}

			entries = append(entries, entry)
		}
	}

	return entries
}

// ToAwesomeByLanguage creates an Awesome list organized by language.
func (i *Implementations) ToAwesomeByLanguage(standards *Standards, languages *Languages) *schema.Awesome {
	awesome := &schema.Awesome{
		BulletOrdered: false,
		Categories:    buildCategoriesByLanguage(i, languages),
		Entries:       buildEntriesByLanguage(i, standards, languages),
	}
	return awesome
}

// buildCategoriesByLanguage creates categories from languages used in implementations.
func buildCategoriesByLanguage(impls *Implementations, languages *Languages) schema.Categories {
	langSet := make(map[LanguageID]bool)
	for _, impl := range impls.Implementations {
		for _, langID := range impl.Languages {
			langSet[langID] = true
		}
	}

	cats := make(schema.Categories, 0, len(langSet))
	for langID := range langSet {
		if lang, ok := languages.Languages[langID]; ok {
			cats = append(cats, schema.Category{
				Path: []string{lang.Name},
				Name: lang.Name,
			})
		}
	}

	sort.Slice(cats, func(i, j int) bool {
		return cats[i].Name < cats[j].Name
	})

	return cats
}

// buildEntriesByLanguage creates entries organized by language.
func buildEntriesByLanguage(impls *Implementations, standards *Standards, languages *Languages) schema.Entries {
	var entries schema.Entries

	repos := impls.Repos()
	sort.Strings(repos)

	stdMap := standards.StandardsMap()

	for _, lang := range languages.Languages {
		for _, repo := range repos {
			impl := impls.Implementations[repo]

			// Check if this implementation uses this language
			if !containsLang(impl.Languages, lang.ID) {
				continue
			}

			badges := buildBadges(repo, impl, languages)

			// Build description with standards
			desc := impl.Description
			if len(impl.Standards) > 0 {
				stdNames := make([]string, 0, len(impl.Standards))
				for _, slug := range impl.Standards {
					if std, ok := stdMap[slug]; ok {
						stdNames = append(stdNames, std.ShortName)
					}
				}
				if len(stdNames) > 0 {
					desc += " [" + joinStrings(stdNames, ", ") + "]"
				}
			}

			entry := schema.Entry{
				URL:         GitHubURL(repo),
				Name:        impl.Name,
				Description: desc,
				Category: schema.Category{
					Path: []string{lang.Name},
					Name: lang.Name,
				},
				Badges: badges,
			}

			entries = append(entries, entry)
		}
	}

	return entries
}

// Helper functions

func containsString(slice []string, s string) bool {
	for _, item := range slice {
		if item == s {
			return true
		}
	}
	return false
}

func containsLang(slice []LanguageID, id LanguageID) bool {
	for _, item := range slice {
		if item == id {
			return true
		}
	}
	return false
}

func joinStrings(slice []string, sep string) string {
	if len(slice) == 0 {
		return ""
	}
	result := slice[0]
	for i := 1; i < len(slice); i++ {
		result += sep + slice[i]
	}
	return result
}
