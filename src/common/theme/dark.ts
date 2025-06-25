import { AppTheme } from '../models/interfaces/theme.interfaces.ts';

export const darkTheme: AppTheme = {
  colors: {
    backgroundPrimary: '#1C1B33', // start of gradient
    backgroundSecondary: '#3D3C60', // start of gradient
    surface: '#2E2D52', // end of gradient
    primary: '#3D3C60', // your custom dark accent
    secondary: '#5E5CE6',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFFFFF',
    error: '#dc3545',
    success: '#1aff4d',
    success2: '#1aff4d',
    button: {
      background: '#3D3C60',
      text: '#FFFFFF',
    },
  },
};
