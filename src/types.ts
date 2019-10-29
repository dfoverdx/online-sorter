import Context from './context';

export {};

declare global {
  type CT = React.ContextType<typeof Context>;
}

export interface Prompt {
  resolve: (option: Option) => void;
  option1: Option;
  option2: Option;
  option3?: Option;
}

export interface Option {
  name: string;
}