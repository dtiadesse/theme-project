import { Component } from '@angular/core';

interface ColorThemes {
  [name: string]: ColorTheme;
}

interface ColorTheme {
  'color-primary': string;
  'color-secondary': string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  readonly themeProps = [
    'color-primary',
    'color-secondary',
  ];

  readonly themes: ColorThemes = {
    'classic': {
      'color-primary': '#3D9D46',
      'color-secondary': '#338942',
    },
    'marine': {
      'color-primary': '#208FBC',
      'color-secondary': '#377681',
    },
  };

  colorThemes = ['classic', 'marine'];

  customTheme = this.themes.classic;

  selectedThemes = {
    marine: this.themes.marine,
    classic: this.themes.classic,
  };

  setTheme(colortheme: string, themeIndex: string) {
    this.selectedThemes[colortheme] = this.themes[themeIndex];
  }

  getCustomTheme() {
    return {...this.customTheme};
  }
}