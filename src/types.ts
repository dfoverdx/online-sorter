import Context from './context';

export {};

declare global {
  type CT = React.ContextType<typeof Context>;
}