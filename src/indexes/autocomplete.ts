import { List } from '..';

export enum AutoCompleteMode {
  oneTerm = 'oneTerm',
  twoTerms = 'twoTerms',
  oneTermWithContent = 'oneTermWithContext',
}

export interface AutoCompleteQuery {
  search: string;
  suggester: string;
  autocompleteMode?: AutoCompleteMode;
  highlightPreTag?: string;
  highlightPostTag?: string;
  fuzzy?: boolean;
  searchFields?: string;
  top?: number;
  minimumCoverage?: number;
}

export interface AutoCompleteResult {
  text: string;
  queryPlusText: string;
}

export interface AutoCompleteResults extends List<AutoCompleteResult> {
  '@search.coverage'?: number;
}
