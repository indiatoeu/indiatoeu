# 🇮🇳🇪🇺 IndiaToEU — 2026 India-EU Bilateral Data Toolkit

[![NPM Version](https://img.shields.io/npm/v/indiatoeu?color=cb3837&style=flat-square&logo=npm)](https://www.npmjs.com/package/indiatoeu)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript&logoColor=white)](types.d.ts)
[![Website](https://img.shields.io/badge/🌐_Website-indiatoeu.com-1e3a5f?style=flat-square)](https://indiatoeu.com)

**Structured reference dataset for the 2026 India-EU bilateral agreements.** This lightweight npm package provides verified data on the India-EU Free Trade Agreement, Schengen visa cascade tiers, EU country economic profiles, salary benchmarks, and agreement tracking — ready to integrate into your own applications.

---

## 📦 Installation

```bash
npm install indiatoeu
```

## 🚀 Quick Start

```javascript
import {
    metadata,
    euCountries,
    visaCategories,
    ftaSectors,
    agreements,
    salaryBenchmarks,
} from 'indiatoeu';

// Get all Schengen countries
const schengenStates = euCountries.countries.filter(c => c.schengen);
console.log(`${schengenStates.length} Schengen member states`);

// Find zero-tariff sectors
const zeroTariff = ftaSectors.sectors.filter(s => s.post_fta_avg_duty_pct === 0);
console.log(`${zeroTariff.length} sectors with zero tariff under FTA`);

// Get visa cascade tiers
visaCategories.cascade_tiers.forEach(tier => {
    console.log(`Tier ${tier.tier}: ${tier.name} — ${tier.validity}`);
});
```

## 📁 Available Data Modules

| Module | Description | Records |
|:---|:---|:---|
| **`metadata`** | SEO metadata for all IndiaToEU pages | 11 pages |
| **`euCountries`** | All 27 EU member states with salary, tax & Blue Card data | 27 countries |
| **`visaCategories`** | Schengen Cascade Visa tiers, special categories & document checklists | 3 tiers + 3 special |
| **`ftaSectors`** | India's top export sectors to EU with tariff reduction details | 10 sectors |
| **`agreements`** | All 2026 bilateral agreements with ratification status | 4 agreements |
| **`salaryBenchmarks`** | Tech salary benchmarks across EU countries (net pay, rent, savings) | 10 benchmarks |

## 💡 Usage Examples

### Find Blue Card salary threshold for a specific country

```javascript
import { euCountries } from 'indiatoeu';

const germany = euCountries.countries.find(c => c.code === 'DE');
console.log(`Blue Card min salary in Germany: €${germany.blue_card_min_salary_eur}`);
// Output: Blue Card min salary in Germany: €43992
```

### Calculate savings for an Indian dev in Netherlands

```javascript
import { salaryBenchmarks } from 'indiatoeu';

const nlDev = salaryBenchmarks.benchmarks.find(
    b => b.country_code === 'NL' && b.role === 'Software Engineer'
);

const annualSavingsINR = nlDev.estimated_monthly_savings_eur * 12 * salaryBenchmarks.exchange_rate.eur_to_inr;
console.log(`Estimated annual savings: ₹${Math.round(annualSavingsINR).toLocaleString('en-IN')}`);
// Output: Estimated annual savings: ₹9,33,480
```

### Check which FTA sectors have immediate zero tariff

```javascript
import { ftaSectors } from 'indiatoeu';

const immediateZero = ftaSectors.sectors.filter(
    s => s.post_fta_avg_duty_pct === 0 && s.phase_out_years === 0
);

immediateZero.forEach(s => {
    console.log(`✅ ${s.sector}: €${s.annual_export_value_eur_million}M annual exports`);
});
```

### Get the India-EU agreement timeline

```javascript
import { agreements } from 'indiatoeu';

const criticalEvents = agreements.timeline.filter(e => e.significance === 'critical');
criticalEvents.forEach(e => console.log(`📌 ${e.date}: ${e.event}`));
```

## 🔗 TypeScript Support

This package ships with full TypeScript definitions. Import types directly:

```typescript
import type { EUCountry, CascadeTier, FTASector, SalaryBenchmark } from 'indiatoeu';

function getSchengenCountries(countries: EUCountry[]): EUCountry[] {
    return countries.filter(c => c.schengen);
}
```

## 🧰 Live Tools (Powered by this data)

These interactive tools on [IndiaToEU.com](https://indiatoeu.com) use the same underlying dataset:

| Tool | What It Does | Try It |
|:---|:---|:---|
| 🛂 **Visa Checker** | Check Schengen cascade visa eligibility | [Launch →](https://indiatoeu.com/india-to-eu-visa-checker) |
| 💰 **Salary Calculator** | Convert EU salary to INR with tax & PPP | [Launch →](https://indiatoeu.com/eu-salary-to-inr-calculator) |
| 📦 **Duty Finder** | Search FTA tariff rates by HS code | [Launch →](https://indiatoeu.com/india-eu-fta-duty-finder) |
| 📊 **Agreement Tracker** | Track bilateral agreement ratification progress | [Launch →](https://indiatoeu.com/india-eu-agreement-tracker) |

## 🏗️ Related Projects & Links

- 📊 **[IndiaToEU.com](https://indiatoeu.com)** — The definitive 2026 India-EU bilateral agreements platform
- 🚀 **[Wireframes.online](https://wireframes.online)** — Premium UX/UI wireframing suite for digital designers
- 💻 **[IndiaToEU on GitHub](https://github.com/indiatoeu/indiatoeu)** — Source code
- 📦 **[IndiaToEU on NPM](https://www.npmjs.com/package/indiatoeu)** — NPM package

## 📄 About & Legal

- 🏢 [About IndiaToEU](https://indiatoeu.com/about) — Our mission & vision
- 📧 [Contact Us](https://indiatoeu.com/contact) — info@indiatoeu.com
- ⚖️ [Disclaimer](https://indiatoeu.com/disclaimer) — Important usage notice
- 📜 [Terms & Conditions](https://indiatoeu.com/terms-and-conditions) — Usage policy
- 🔒 [Privacy Policy](https://indiatoeu.com/privacy-policy) — Data handling practices

## 📋 Data Sources

This dataset is compiled from publicly available sources including:
- Official EU Commission publications on the India-EU FTA
- Schengen visa code regulations and the 2026 cascade mechanism
- Eurostat employment and salary statistics
- European Central Bank exchange rates
- National immigration authority guidelines

> ⚠️ **Disclaimer**: This data is for informational and development purposes. Always verify with official government sources before making decisions. See [indiatoeu.com/disclaimer](https://indiatoeu.com/disclaimer).

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide first.

## 📄 License

MIT © [IndiaToEU](https://indiatoeu.com) — See [LICENSE](LICENSE) for details.
