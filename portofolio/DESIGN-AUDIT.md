# Portfolio design and usability audit

Reviewed against `reference/AGENTS.md`, the supplied visual reference, and the frontend-design skill.

## Changes

- Preserved the oversized wordmark, asymmetric introduction, project index, and generous whitespace from the reference.
- Replaced generic project slogans with descriptive titles and clear project links.
- Removed oversized decorative symbols competing with content.
- Retained readable 16–17px body copy and 14px minimum secondary text.
- Added self-hosted Noto Sans JP and adjusted Japanese wrapping; retained the corrected name セアン.
- Enlarged project-title links and the first project-index row to meet the 44px target-height requirement.
- Connected the menu button to its navigation with `aria-controls`; added Escape dismissal with focus return, outside-pointer dismissal, and reset when switching to desktop.
- Made skip-link and navigation destinations programmatically focusable.
- Explicitly selected the custom site icon in metadata.

## Verification

- Production build and TypeScript passed.
- Chromium checks at 320, 375, 768, 1024, and 1440px, in English and Japanese: no horizontal overflow.
- Project titles checked for clipping at all four required widths; no visible link targets below 44px height.
- axe WCAG 2 A/AA and WCAG 2.1 AA scans: no violations detected at the five tested widths in either language.
- Desktop, tablet, and mobile screenshots reviewed, including both supplied photos.
- Verified language persistence, language changes with browser storage blocked, Japanese name, mobile navigation, Escape/focus return, outside-pointer dismissal, resize reset, section focus, keyboard skip link, and reduced motion.
- No browser runtime errors observed.

Automated accessibility scans do not replace assistive-technology testing. This review used Chromium; Safari, Firefox, real-device testing, and availability of external project/certificate destinations were not verified.
