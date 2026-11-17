# Research notes — LA Fitness facts used on the site

Reviewed: November 2026. Every figure lives in `src/data/site.ts` (`facts`).

LA Fitness publishes **no national rate card**, and lafitness.com refused direct connections during research, so prices are third-party reported ranges and the site says so.

| Fact | Value on site | Source |
| --- | --- | --- |
| Monthly dues | $29.99–$49.99; single club $34.99–$39.99; multi-club $39.99–$49.99 | gymmembershippricing.com, thegymprices.com |
| Initiation fee | $0–$99 | thegymprices.com, lafitnesscost.com |
| Annual fee | $49–$59, higher at some clubs | lafitnesscost.com, thegymprices.com |
| Club count | 624 LA Fitness clubs in 25 states (March 2026) | Wikipedia |
| Company | Fitness International, LLC, Irvine CA, founded 1984; Club Studio premium brand; XSport acquired 2024; Esporta brand retired 2025 | Wikipedia; clubsolutionsmagazine.com |
| FTC lawsuit | Filed August 2025 over hard-to-cancel memberships | consumer.ftc.gov alert, 2025-08-22 |
| Cancel methods | In person or mailed form historically; some report online | ConsumerAffairs, third-party guides (unverified) |
| Freeze | Fee-based, varies by club | livestrong.com (unverified) |
| Guest pass | Free short-term pass for locals; some multi-club plans include guests | thegymprices.com (unverified) |

## Open decisions

- Real contact email (placeholder `contact@lafitnessmembership.org`)
- Analytics: no GTM container added
- Confirm cancellation process after the FTC case before writing a cancel guide
- Content must stay original: lafitnessmembership.com is only a layout reference
