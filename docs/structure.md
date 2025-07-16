# 📁 File Structure — To-Do Soft

This project follows a clear separation of concerns between HTML, CSS, and JS. Each file has a defined purpose:

| File | Purpose |
|------|---------|
| `index.html` | Semantic layout + ARIA-ready structure |
| `styles/theme.css` | CSS Modules with BEM and `data-theme` toggling |
| `scripts/app.js` | Task logic, mascot behavior, streak handling |
| `manifest.json` | PWA support with screenshots, icons, and theme config |

Assets are stored in `/assets/`, including:
- `icons/` for PWA icons
- `screenshots/` for README and manifest previews
