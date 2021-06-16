import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Previous approach:
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

// Previous approach:
//const csvFileReader = new CsvFileReader('football.csv');
//const matchReader = new MatchReader(csvFileReader);
//const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
