declare module '@kennethormandy/react-fittext' {
  import { FC } from 'react';
  const ReactFitText: FC<{
    compressor?: number;
    defaultFontSize?: number | string;
    vertical?: boolean;
    minFontSize?: number | string;
    maxFontSize?: number | string;
  }>;
  export default ReactFitText;
}