export enum AlertLevels {
  INFO,
  WARN,
  ERROR,
  DEBUG,
}

interface AlertData {
  content: string;
  level: AlertLevels;
}

export class Alert implements AlertData {
  constructor(public content: string, public level: AlertLevels) {}
}
