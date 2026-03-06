import metadata from './data/metadata.json' assert { type: 'json' };
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
