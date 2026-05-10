package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"

	"github.com/aistandardsio/aistandardsio.github.io/pkg/aistandards"
)

func main() {
	if len(os.Args) < 2 {
		printUsage()
		os.Exit(1)
	}

	switch os.Args[1] {
	case "validate":
		cmdValidate(os.Args[2:])
	case "schema":
		cmdSchema(os.Args[2:])
	case "awesome":
		cmdAwesome(os.Args[2:])
	case "init":
		cmdInit(os.Args[2:])
	case "export":
		cmdExport(os.Args[2:])
	default:
		printUsage()
		os.Exit(1)
	}
}

func printUsage() {
	fmt.Println(`aistandardsio - AI Standards data management tool

Usage:
  aistandardsio <command> [options]

Commands:
  validate    Validate JSON data files
  schema      Generate JSON schemas
  awesome     Export to Awesome list Markdown
  init        Initialize data files with defaults
  export      Export data for web consumption

Use "aistandardsio <command> -h" for more information about a command.`)
}

func cmdValidate(args []string) {
	fs := flag.NewFlagSet("validate", flag.ExitOnError)
	dataDir := fs.String("data", "apps/web/src/data", "Data directory")
	fs.Parse(args)

	standards, err := aistandards.ReadStandards(filepath.Join(*dataDir, "standards.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading standards: %v\n", err)
		os.Exit(1)
	}

	languages := aistandards.DefaultLanguages()

	impls, err := aistandards.ReadImplementations(filepath.Join(*dataDir, "implementations.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading implementations: %v\n", err)
		os.Exit(1)
	}

	validator := aistandards.NewValidator(standards, &languages)

	// Validate standards
	if errs := validator.ValidateStandards(); errs.HasErrors() {
		fmt.Fprintf(os.Stderr, "Standards validation errors:\n")
		for _, e := range errs {
			fmt.Fprintf(os.Stderr, "  - %s\n", e.Error())
		}
	}

	// Validate implementations
	if errs := validator.ValidateImplementations(impls); errs.HasErrors() {
		fmt.Fprintf(os.Stderr, "Implementations validation errors:\n")
		for _, e := range errs {
			fmt.Fprintf(os.Stderr, "  - %s\n", e.Error())
		}
		os.Exit(1)
	}

	fmt.Println("Validation passed!")
}

func cmdSchema(args []string) {
	fs := flag.NewFlagSet("schema", flag.ExitOnError)
	outputDir := fs.String("output", "apps/web/src/data/schema", "Output directory for schemas")
	typeFlag := fs.String("type", "all", "Type to generate: standards, languages, implementations, all")
	fs.Parse(args)

	if err := os.MkdirAll(*outputDir, 0755); err != nil {
		fmt.Fprintf(os.Stderr, "Error creating output directory: %v\n", err)
		os.Exit(1)
	}

	switch *typeFlag {
	case "standards":
		writeSchema(*outputDir, "standards.schema.json", &aistandards.Standards{})
	case "languages":
		writeSchema(*outputDir, "languages.schema.json", &aistandards.Languages{})
	case "implementations":
		writeSchema(*outputDir, "implementations.schema.json", &aistandards.Implementations{})
	case "all":
		writeSchema(*outputDir, "standards.schema.json", &aistandards.Standards{})
		writeSchema(*outputDir, "languages.schema.json", &aistandards.Languages{})
		writeSchema(*outputDir, "implementations.schema.json", &aistandards.Implementations{})
	default:
		fmt.Fprintf(os.Stderr, "Unknown type: %s\n", *typeFlag)
		os.Exit(1)
	}

	fmt.Printf("Schemas written to %s\n", *outputDir)
}

func writeSchema(dir, filename string, v any) {
	schema, err := aistandards.GenerateJSONSchema(v)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error generating schema for %s: %v\n", filename, err)
		os.Exit(1)
	}

	path := filepath.Join(dir, filename)
	if err := os.WriteFile(path, schema, 0644); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing %s: %v\n", path, err)
		os.Exit(1)
	}
	fmt.Printf("  Written: %s\n", path)
}

func cmdAwesome(args []string) {
	fs := flag.NewFlagSet("awesome", flag.ExitOnError)
	dataDir := fs.String("data", "apps/web/src/data", "Data directory")
	output := fs.String("output", "AWESOME.md", "Output markdown file")
	organize := fs.String("organize", "category", "Organization: category, standard, language")
	fs.Parse(args)

	standards, err := aistandards.ReadStandards(filepath.Join(*dataDir, "standards.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading standards: %v\n", err)
		os.Exit(1)
	}

	languages := aistandards.DefaultLanguages()

	impls, err := aistandards.ReadImplementations(filepath.Join(*dataDir, "implementations.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading implementations: %v\n", err)
		os.Exit(1)
	}

	var awesome interface{ Markdown() (string, error) }
	switch *organize {
	case "category":
		awesome = impls.ToAwesome(standards, &languages)
	case "standard":
		awesome = impls.ToAwesomeByStandard(standards, &languages)
	case "language":
		awesome = impls.ToAwesomeByLanguage(standards, &languages)
	default:
		fmt.Fprintf(os.Stderr, "Unknown organization: %s\n", *organize)
		os.Exit(1)
	}

	md, err := awesome.Markdown()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error generating markdown: %v\n", err)
		os.Exit(1)
	}

	header := `# Awesome AI Standards Implementations

A curated list of implementations for AI standards and protocols.

`
	content := header + md

	if err := aistandards.WriteMarkdown(*output, content); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing markdown: %v\n", err)
		os.Exit(1)
	}

	fmt.Printf("Awesome list written to %s\n", *output)
}

func cmdInit(args []string) {
	fs := flag.NewFlagSet("init", flag.ExitOnError)
	dataDir := fs.String("data", "apps/web/src/data", "Data directory")
	fs.Parse(args)

	// Write default languages
	languages := aistandards.DefaultLanguages()
	langPath := filepath.Join(*dataDir, "languages.json")
	if err := aistandards.WriteLanguages(langPath, &languages); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing languages: %v\n", err)
		os.Exit(1)
	}
	fmt.Printf("Written: %s\n", langPath)

	fmt.Println("Initialization complete!")
}

func cmdExport(args []string) {
	fs := flag.NewFlagSet("export", flag.ExitOnError)
	dataDir := fs.String("data", "apps/web/src/data", "Data directory")
	output := fs.String("output", "apps/web/src/data/combined.json", "Output combined JSON file")
	fs.Parse(args)

	standards, err := aistandards.ReadStandards(filepath.Join(*dataDir, "standards.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading standards: %v\n", err)
		os.Exit(1)
	}

	languages := aistandards.DefaultLanguages()

	impls, err := aistandards.ReadImplementations(filepath.Join(*dataDir, "implementations.json"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading implementations: %v\n", err)
		os.Exit(1)
	}

	combined := struct {
		Standards       *aistandards.Standards       `json:"standards"`
		Languages       *aistandards.Languages       `json:"languages"`
		Implementations *aistandards.Implementations `json:"implementations"`
	}{
		Standards:       standards,
		Languages:       &languages,
		Implementations: impls,
	}

	data, err := json.MarshalIndent(combined, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error marshaling combined data: %v\n", err)
		os.Exit(1)
	}

	if err := os.WriteFile(*output, data, 0644); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing %s: %v\n", *output, err)
		os.Exit(1)
	}

	fmt.Printf("Combined data written to %s\n", *output)
}
