import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    linkColor: string;
    accentColor: string;
  }
}