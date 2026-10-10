export interface Environment {
  readonly name: 'development' | 'production';
  readonly production: boolean;
}
