export * from './entity-recognition';
export * from './key-phrase-extraction';
export * from './language-detection';
export * from './merge';
export * from './named-entity-recognition';
export * from './sentiment';
export * from './split';

export enum SkillTypeText {
  keyPhraseExtraction = '#Microsoft.Skills.Text.KeyPhraseExtractionSkill',
  languageDetection = '#Microsoft.Skills.Text.LanguageDetectionSkill',
  entityRecognition = '#Microsoft.Skills.Text.EntityRecognitionSkill',
  merge = '#Microsoft.Skills.Text.MergeSkill',
  split = '#Microsoft.Skills.Text.SplitSkill',
  sentiment = '#Microsoft.Skills.Text.SentimentSkill',

  /** @deprecated Use `SkillTypeText.entityRecognition` instead */
  namedEntityRecognition = '#Microsoft.Skills.Text.LanguageDetectionSkill',
}

export enum Language {
  danish = 'da',
  dutch = 'nl',
  english = 'en',
  finnish = 'fi',
  french = 'fr',
  german = 'de',
  greek = 'el',
  italian = 'it',
  japanese = 'ja',
  korean = 'ko',
  norwegian = 'no',
  polish = 'pl',
  portuguesePortual = 'pt-PT',
  portugueseBrazil = 'pt-BR',
  russian = 'ru',
  spanish = 'es',
  swedish = 'sv',
  turkish = 'tr',
}
