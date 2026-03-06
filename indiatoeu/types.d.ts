/**
 * IndiaToEU Data Lite — TypeScript Definitions
 * Structured reference data for the 2026 India-EU bilateral agreements.
 *
 * @see https://indiatoeu.com
 */

// ─── Metadata ────────────────────────────────────────────────────────────────

export interface PageMeta {
    page_name: string;
    slug: string;
    title: string;
    description: string;
    keywords: string;
    is_default?: boolean;
    category: 'landing' | 'tool' | 'info' | 'legal' | 'system';
    priority: number;
}

export interface Metadata {
    site_name: string;
    version: string;
    last_updated: string;
    description: string;
    pages: PageMeta[];
}

// ─── EU Countries ────────────────────────────────────────────────────────────

export interface EUCountry {
    name: string;
    code: string;
    capital: string;
    schengen: boolean;
    currency: string;
    avg_gross_salary_eur: number;
    income_tax_rate_pct: number;
    blue_card_min_salary_eur: number;
    indian_diaspora_estimate: number;
    top_trade_sectors: string[];
    embassy_city: string;
    timezone: string;
}

export interface EUCountriesData {
    description: string;
    last_updated: string;
    source: string;
    countries: EUCountry[];
}

// ─── Visa Categories ────────────────────────────────────────────────────────

export interface CascadeTier {
    tier: number;
    name: string;
    duration: string;
    validity: string;
    entry_type: string;
    eligibility_criteria: string[];
    processing_time_days: string;
    fee_eur: number;
    success_rate_indicator: string;
}

export interface SpecialVisaCategory {
    name: string;
    description: string;
    processing_time_days: string;
    validity: string;
}

export interface VisaCategoriesData {
    description: string;
    last_updated: string;
    source: string;
    cascade_tiers: CascadeTier[];
    special_categories: SpecialVisaCategory[];
    required_documents: string[];
}

// ─── FTA Sectors ────────────────────────────────────────────────────────────

export interface FTASummary {
    signed_date: string;
    effective_date: string;
    total_chapters: number;
    zero_tariff_items: number;
    phased_reduction_items: number;
    sensitive_list_items: number;
    total_bilateral_trade_2025_eur_billion: number;
}

export interface FTASector {
    sector: string;
    hs_chapter_range: string;
    pre_fta_avg_duty_pct: number;
    post_fta_avg_duty_pct: number;
    phase_out_years: number;
    annual_export_value_eur_million: number;
    key_products: string[];
    top_destination_countries: string[];
    notes: string;
}

export interface FTASectorsData {
    description: string;
    last_updated: string;
    source: string;
    fta_summary: FTASummary;
    sectors: FTASector[];
}

// ─── Agreements ────────────────────────────────────────────────────────────

export interface Agreement {
    name: string;
    formal_title: string;
    signed_date: string;
    ratification_status: 'ratified' | 'in_progress' | 'pending';
    chapters_total?: number;
    chapters_ratified?: number;
    key_provisions: string[];
}

export interface TimelineEvent {
    date: string;
    event: string;
    significance: 'low' | 'medium' | 'high' | 'critical';
}

export interface AgreementsData {
    description: string;
    last_updated: string;
    source: string;
    agreements: Agreement[];
    timeline: TimelineEvent[];
}

// ─── Salary Benchmarks ────────────────────────────────────────────────────

export interface ExchangeRate {
    eur_to_inr: number;
    as_of: string;
    source: string;
}

export interface PPPFactor {
    india_ppp_multiplier: number;
    description: string;
}

export interface SalaryBenchmark {
    country_code: string;
    country_name: string;
    role: string;
    experience_years: string;
    avg_gross_annual_eur: number;
    effective_tax_rate_pct: number;
    avg_net_monthly_eur: number;
    avg_rent_1br_city_eur: number;
    avg_monthly_expenses_eur: number;
    estimated_monthly_savings_eur: number;
}

export interface SalaryBenchmarksData {
    description: string;
    last_updated: string;
    source: string;
    exchange_rate: ExchangeRate;
    ppp_factor: PPPFactor;
    benchmarks: SalaryBenchmark[];
}

// ─── Default Export ────────────────────────────────────────────────────────

export declare const metadata: Metadata;
export declare const euCountries: EUCountriesData;
export declare const visaCategories: VisaCategoriesData;
export declare const ftaSectors: FTASectorsData;
export declare const agreements: AgreementsData;
export declare const salaryBenchmarks: SalaryBenchmarksData;

declare const _default: {
    metadata: Metadata;
    euCountries: EUCountriesData;
    visaCategories: VisaCategoriesData;
    ftaSectors: FTASectorsData;
    agreements: AgreementsData;
    salaryBenchmarks: SalaryBenchmarksData;
};

export default _default;
