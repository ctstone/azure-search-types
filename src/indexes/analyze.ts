import { AnalyzerName, CharFilterName, TokenFilterName, TokenizerName } from "./schema";

export interface AnalyzeQuery {
  text: string;
  analyzer: AnalyzerName;
  tokenizer?: TokenizerName;
  tokenFilter?: TokenFilterName[];
  charFilter?: CharFilterName[];
}

export interface AnalyzeToken {
  token: string;
  startOffset: number;
  endOffset: number;
  position: number;
}

export interface AnalyzeResults {
  tokens: AnalyzeToken[];
}
