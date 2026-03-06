/**
 * 🔄 Auto-Generate LITE Promotional Data Package (v2)
 * 
 * Generates the complete /github/indiatoeu/ package
 * from source data, ready for GitHub and npm publishing.
 * 
 * Usage: bun run github/generate.ts
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const PROMO_DIR = path.join(ROOT, "github", "indiatoeu");
const DATA_DIR = path.join(PROMO_DIR, "data");

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const METADATA_PATH = path.join(ROOT, "data", "metadata.json");

interface PageMeta {
    page_name: string;
    slug: string;
    title: string;
    description: string;
    keywords: string;
    is_default?: boolean;
}

interface Metadata {
    site_name: string;
    pages: PageMeta[];
}

const toolIcons: Record<string, string> = {
    "Visa Checker": "🛂",
    "Salary Calculator": "💰",
    "Duty Finder": "📦",
    "Agreement Tracker": "📊"
};

function main() {
    console.log("🚀 Generating IndiaToEU Data Lite Package v2.0...\n");

    if (!fs.existsSync(METADATA_PATH)) {
        console.error("❌ Source metadata.json not found!");
        process.exit(1);
    }

    const meta: Metadata = JSON.parse(fs.readFileSync(METADATA_PATH, "utf-8"));
    const site = meta.site_name;
    const tools = meta.pages.filter(p => [
        "/india-to-eu-visa-checker",
        "/eu-salary-to-inr-calculator",
        "/india-eu-fta-duty-finder",
        "/india-eu-agreement-tracker"
    ].includes(p.slug));

    // ─── 1. Enhanced Metadata with extra fields ─────────────────────

    const categoryMap: Record<string, string> = {
        "/": "landing",
        "/india-to-eu-visa-checker": "tool",
        "/eu-salary-to-inr-calculator": "tool",
        "/india-eu-fta-duty-finder": "tool",
        "/india-eu-agreement-tracker": "tool",
        "/about": "info",
        "/disclaimer": "legal",
        "/terms-and-conditions": "legal",
        "/privacy-policy": "legal",
        "/contact": "info",
        "/404": "system"
    };

    const priorityMap: Record<string, number> = {
        "landing": 1.0,
        "tool": 0.9,
        "info": 0.5,
        "legal": 0.3,
        "system": 0.0
    };

    const enhancedPages = meta.pages.map(p => {
        const category = categoryMap[p.slug] || "info";
        return {
            ...p,
            category,
            priority: priorityMap[category] ?? 0.5
        };
    });

    const enhancedMetadata = {
        site_name: site,
        version: "2.0.0",
        last_updated: new Date().toISOString().split("T")[0],
        description: "Structured metadata for IndiaToEU.com — the definitive 2026 India-EU bilateral agreements platform.",
        pages: enhancedPages
    };

    fs.writeFileSync(
        path.join(DATA_DIR, "metadata.json"),
        JSON.stringify(enhancedMetadata, null, 4)
    );
    console.log("✅ Enhanced metadata.json created");

    // ─── 2. README.md ───────────────────────────────────────────────

    const toolRows = tools.map(t => {
        const icon = toolIcons[t.page_name] || "🔧";
        const shortDesc = t.description.split(".")[0];
        return `| ${icon} **${t.page_name}** | ${shortDesc} | [Launch →](https://${site}${t.slug}) |`;
    }).join("\n");

    const readmeContent = `# 🇮🇳🇪🇺 IndiaToEU — 2026 India-EU Bilateral Data Toolkit

[![NPM Version](https://img.shields.io/npm/v/indiatoeu?color=cb3837&style=flat-square&logo=npm)](https://www.npmjs.com/package/indiatoeu)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript&logoColor=white)](types.d.ts)
[![Website](https://img.shields.io/badge/🌐_Website-indiatoeu.com-1e3a5f?style=flat-square)](https://${site})

**Structured reference dataset for the 2026 India-EU bilateral agreements.** This lightweight npm package provides verified data on the India-EU Free Trade Agreement, Schengen visa cascade tiers, EU country economic profiles, salary benchmarks, and agreement tracking — ready to integrate into your own applications.

---

## 📦 Installation

\`\`\`bash
npm install indiatoeu
\`\`\`

## 🚀 Quick Start

\`\`\`javascript
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
console.log(\`\${schengenStates.length} Schengen member states\`);

// Find zero-tariff sectors
const zeroTariff = ftaSectors.sectors.filter(s => s.post_fta_avg_duty_pct === 0);
console.log(\`\${zeroTariff.length} sectors with zero tariff under FTA\`);

// Get visa cascade tiers
visaCategories.cascade_tiers.forEach(tier => {
    console.log(\`Tier \${tier.tier}: \${tier.name} — \${tier.validity}\`);
});
\`\`\`

## 📁 Available Data Modules

| Module | Description | Records |
|:---|:---|:---|
| **\`metadata\`** | SEO metadata for all IndiaToEU pages | ${enhancedPages.length} pages |
| **\`euCountries\`** | All 27 EU member states with salary, tax & Blue Card data | 27 countries |
| **\`visaCategories\`** | Schengen Cascade Visa tiers, special categories & document checklists | 3 tiers + 3 special |
| **\`ftaSectors\`** | India's top export sectors to EU with tariff reduction details | 10 sectors |
| **\`agreements\`** | All 2026 bilateral agreements with ratification status | 4 agreements |
| **\`salaryBenchmarks\`** | Tech salary benchmarks across EU countries (net pay, rent, savings) | 10 benchmarks |

## 💡 Usage Examples

### Find Blue Card salary threshold for a specific country

\`\`\`javascript
import { euCountries } from 'indiatoeu';

const germany = euCountries.countries.find(c => c.code === 'DE');
console.log(\`Blue Card min salary in Germany: €\${germany.blue_card_min_salary_eur}\`);
// Output: Blue Card min salary in Germany: €43992
\`\`\`

### Calculate savings for an Indian dev in Netherlands

\`\`\`javascript
import { salaryBenchmarks } from 'indiatoeu';

const nlDev = salaryBenchmarks.benchmarks.find(
    b => b.country_code === 'NL' && b.role === 'Software Engineer'
);

const annualSavingsINR = nlDev.estimated_monthly_savings_eur * 12 * salaryBenchmarks.exchange_rate.eur_to_inr;
console.log(\`Estimated annual savings: ₹\${Math.round(annualSavingsINR).toLocaleString('en-IN')}\`);
\`\`\`

### Check which FTA sectors have immediate zero tariff

\`\`\`javascript
import { ftaSectors } from 'indiatoeu';

const immediateZero = ftaSectors.sectors.filter(
    s => s.post_fta_avg_duty_pct === 0 && s.phase_out_years === 0
);

immediateZero.forEach(s => {
    console.log(\`✅ \${s.sector}: €\${s.annual_export_value_eur_million}M annual exports\`);
});
\`\`\`

## 🔗 TypeScript Support

This package ships with full TypeScript definitions. Import types directly:

\`\`\`typescript
import type { EUCountry, CascadeTier, FTASector, SalaryBenchmark } from 'indiatoeu';

function getSchengenCountries(countries: EUCountry[]): EUCountry[] {
    return countries.filter(c => c.schengen);
}
\`\`\`

## 🧰 Live Tools (Powered by this data)

These interactive tools on [IndiaToEU.com](https://${site}) use the same underlying dataset:

| Tool | What It Does | Try It |
|:---|:---|:---|
${toolRows}

## 🏗️ Related Projects & Links

- 📊 **[IndiaToEU.com](https://${site})** — The definitive 2026 India-EU bilateral agreements platform
- 🚀 **[Wireframes.online](https://wireframes.online)** — Premium UX/UI wireframing suite for digital designers
- 💻 **[IndiaToEU on GitHub](https://github.com/indiatoeu/indiatoeu)** — Main project source code
- 📦 **[IndiaToEU on NPM](https://www.npmjs.com/package/indiatoeu)** — Main project npm package

## 📄 About & Legal

- 🏢 [About IndiaToEU](https://${site}/about) — Our mission & vision
- 📧 [Contact Us](https://${site}/contact) — info@${site}
- ⚖️ [Disclaimer](https://${site}/disclaimer) — Important usage notice
- 📜 [Terms & Conditions](https://${site}/terms-and-conditions) — Usage policy
- 🔒 [Privacy Policy](https://${site}/privacy-policy) — Data handling practices

## 📋 Data Sources

This dataset is compiled from publicly available sources including:
- Official EU Commission publications on the India-EU FTA
- Schengen visa code regulations and the 2026 cascade mechanism
- Eurostat employment and salary statistics
- European Central Bank exchange rates
- National immigration authority guidelines

> ⚠️ **Disclaimer**: This data is for informational and development purposes. Always verify with official government sources before making decisions. See [indiatoeu.com/disclaimer](https://${site}/disclaimer).

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide first.

## 📄 License

MIT © [IndiaToEU](https://${site}) — See [LICENSE](LICENSE) for details.
`;

    fs.writeFileSync(path.join(PROMO_DIR, "README.md"), readmeContent);
    console.log("✅ README.md created");

    // ─── 3. package.json ────────────────────────────────────────────

    const promoPkg = {
        name: "indiatoeu",
        version: "2.0.0",
        description: "Structured reference dataset for the 2026 India-EU bilateral agreements — visa cascade tiers, FTA tariff sectors, EU country profiles, salary benchmarks, and agreement tracking data.",
        main: "index.js",
        types: "types.d.ts",
        type: "module",
        exports: {
            ".": {
                import: "./index.js",
                types: "./types.d.ts"
            },
            "./data/*": "./data/*"
        },
        keywords: [
            "india-eu", "india-eu-fta", "schengen-visa", "eu-trade-data",
            "india-europe", "fta-tariff-data", "eu-salary-data", "cascade-visa",
            "eu-blue-card", "india-eu-agreement", "trade-agreement",
            "eu-country-data", "mobility-pact", "bilateral-agreements"
        ],
        homepage: `https://${site}`,
        repository: {
            type: "git",
            url: "git+https://github.com/indiatoeu/indiatoeu.git"
        },
        bugs: {
            url: "https://github.com/indiatoeu/indiatoeu/issues"
        },
        author: {
            name: "IndiaToEU",
            email: `info@${site}`,
            url: `https://${site}`
        },
        license: "MIT",
        files: [
            "index.js", "types.d.ts", "data/",
            "README.md", "LICENSE", "CHANGELOG.md"
        ]
    };

    fs.writeFileSync(
        path.join(PROMO_DIR, "package.json"),
        JSON.stringify(promoPkg, null, 2)
    );
    console.log("✅ package.json created");

    // ─── 4. index.js Exporter ───────────────────────────────────────

    const indexJs = `import metadata from './data/metadata.json' assert { type: 'json' };
import euCountries from './data/eu-countries.json' assert { type: 'json' };
import visaCategories from './data/visa-categories.json' assert { type: 'json' };
import ftaSectors from './data/fta-sectors.json' assert { type: 'json' };
import agreements from './data/agreements.json' assert { type: 'json' };
import salaryBenchmarks from './data/salary-benchmarks.json' assert { type: 'json' };

export { metadata, euCountries, visaCategories, ftaSectors, agreements, salaryBenchmarks };

export default {
    metadata,
    euCountries,
    visaCategories,
    ftaSectors,
    agreements,
    salaryBenchmarks,
};
`;
    fs.writeFileSync(path.join(PROMO_DIR, "index.js"), indexJs);
    console.log("✅ index.js exporter created");

    // ─── 5. Static files ──────────────────────────────────────────

    // Copy data files that are maintained manually (non-metadata)
    const manualDataFiles = [
        "eu-countries.json",
        "visa-categories.json",
        "fta-sectors.json",
        "agreements.json",
        "salary-benchmarks.json"
    ];

    for (const file of manualDataFiles) {
        const filePath = path.join(DATA_DIR, file);
        if (fs.existsSync(filePath)) {
            console.log(`✅ ${file} — already exists, skipping`);
        }
    }

    // .npmignore
    fs.writeFileSync(
        path.join(PROMO_DIR, ".npmignore"),
        "node_modules/\n.git/\n.DS_Store\n*.ts\n!types.d.ts\n"
    );

    // ─── Summary ─────────────────────────────────────────────────

    const dataFiles = fs.readdirSync(DATA_DIR);
    console.log(`\n✨ DONE: IndiaToEU Data Lite v2.0 package ready!`);
    console.log(`📂 Output: /github/indiatoeu/`);
    console.log(`📊 Data files: ${dataFiles.length} (${dataFiles.join(", ")})`);
    console.log(`📦 Ready for: npm publish & git push`);
}

main();
