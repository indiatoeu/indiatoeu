# Changelog

All notable changes to the **indiatoeu** package will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [2.0.0] — 2026-03-06

### Added
- **EU Countries dataset** (`eu-countries.json`): All 27 EU member states with Schengen status, salary data, tax rates, Blue Card thresholds, Indian diaspora estimates, and top trade sectors.
- **Visa Categories dataset** (`visa-categories.json`): Complete Schengen Cascade Visa regime with 3 tiers, special categories (Blue Card dependents, BTIA business track, academic visas), and document checklist.
- **FTA Sectors dataset** (`fta-sectors.json`): Top 10 Indian export sectors to EU with pre/post-FTA tariff rates, annual export values, phase-out timelines, and key product breakdowns.
- **Agreements dataset** (`agreements.json`): All 4 bilateral agreements (FTA, Mobility Pact, Security Partnership, Green Alliance) with ratification status and 12-event detailed timeline from 2007 to 2026.
- **Salary Benchmarks dataset** (`salary-benchmarks.json`): Tech salary benchmarks across 8 EU countries including net pay, rent, expenses, and estimated monthly savings with EUR-INR exchange rate and PPP data.
- **TypeScript type definitions** (`types.d.ts`): Full type coverage for all data modules.
- **ESM exports map**: Support for `import { module } from 'indiatoeu'` and `import data from 'indiatoeu/data/file.json'`.
- `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for open-source governance.

### Changed
- `metadata.json` enhanced with `version`, `last_updated`, `category`, and `priority` fields per page.
- `package.json` updated with richer keywords, TypeScript types entry, proper exports map, and bug tracker URL.

### Removed
- Removed promotional-only content from v1.x README — replaced with developer-focused documentation with code examples.

---

## [1.0.1] — 2025-12-15

### Fixed
- Corrected metadata page count in README example.

---

## [1.0.0] — 2025-12-01

### Added
- Initial release with `metadata.json` containing page-level SEO data for [IndiaToEU.com](https://indiatoeu.com).
- Basic `index.js` module exporter.
- MIT License.
