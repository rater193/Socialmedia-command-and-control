class ThemeManager {
  constructor(options = {}) {
    this.linkId = options.linkId || 'theme-stylesheet';
    this.storageKey = options.storageKey || 'socialmedia-c3-theme';
    this.defaultTheme = options.defaultTheme || 'default';
    this.themeBasePath = options.themeBasePath || '/css/themes';
  }

  getThemePath(themeName) {
    return `${this.themeBasePath}/${themeName}/style.css`;
  }

  getActiveTheme() {
    return localStorage.getItem(this.storageKey) || this.defaultTheme;
  }

  setTheme(themeName) {
    const safeThemeName = String(themeName || this.defaultTheme).replace(/[^a-zA-Z0-9_-]/g, '');
    const theme = safeThemeName || this.defaultTheme;
    const stylesheet = document.getElementById(this.linkId);

    if (!stylesheet) {
      throw new Error(`Theme stylesheet link with id "${this.linkId}" was not found.`);
    }

    stylesheet.setAttribute('href', this.getThemePath(theme));
    localStorage.setItem(this.storageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  }

  loadSavedTheme() {
    return this.setTheme(this.getActiveTheme());
  }

  bindSelector(selectorId = 'themeSelector') {
    const selector = document.getElementById(selectorId);
    if (!selector) return;

    selector.value = this.getActiveTheme();
    selector.addEventListener('change', () => {
      this.setTheme(selector.value);
    });
  }
}

window.ThemeManager = ThemeManager;
window.themeManager = new ThemeManager();

document.addEventListener('DOMContentLoaded', () => {
  window.themeManager.loadSavedTheme();
  window.themeManager.bindSelector();
});
