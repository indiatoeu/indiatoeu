# Contributing to IndiaToEU Data Lite

Thank you for your interest in contributing to the IndiaToEU Data Lite project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Data Issues

If you notice incorrect or outdated data:

1. Open an [issue](https://github.com/indiatoeu/indiatoeu/issues) with the label `data-correction`.
2. Include the specific file, field, and the correct value with a source reference.
3. Provide a link to an official or verifiable source.

### Suggesting New Data

We welcome suggestions for additional datasets that align with the India-EU bilateral theme:

1. Open an issue with the label `data-request`.
2. Describe the data and its potential use case.
3. Suggest a file structure if possible.

### Submitting Changes

1. **Fork** this repository.
2. Create a **feature branch**: `git checkout -b feature/your-feature-name`
3. Make your changes.
4. Ensure JSON files are valid: `cat your-file.json | python3 -m json.tool`
5. Update `CHANGELOG.md` with your changes.
6. **Commit** with a clear message: `git commit -m "data: add XYZ dataset"`
7. **Push** and create a Pull Request.

### Commit Message Convention

We use a simple prefix convention:

- `data:` — Changes to data files
- `docs:` — Documentation updates
- `fix:` — Bug fixes or data corrections
- `feat:` — New features or datasets
- `chore:` — Maintenance tasks

### Data Quality Standards

All contributed data must:

- Be sourced from official or reputable publications
- Include proper attribution in the `source` field
- Follow the existing JSON structure and naming conventions
- Use ISO country codes (ISO 3166-1 alpha-2) where applicable
- Use ISO date format (YYYY-MM-DD)
- Be formatted with 4-space indentation

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions?

Reach out at [info@indiatoeu.com](mailto:info@indiatoeu.com) or open a discussion on GitHub.
