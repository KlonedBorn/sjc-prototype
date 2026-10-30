# St. John's Cathedral: clickable prototype

Static HTML/CSS/JS mockup for the 30 Oct 2026 showcase. Sample data only: nothing is booked or sent.
Open `index.html` in a browser. No server or build step needed.

## Pages
Website: `index.html` (home), `history.html`, `worship.html`, `news.html`, `outreach.html`, `restore.html`,
`weddings.html`, `visit.html`, `book.html`, `contact.html`, `gallery.html`
Staff: `admin.html` (bookings, tours & prices, content, reports), `scanner.html` (guide check-in at the Front Gate)

## Shared files
- `styles.css`: design tokens (white theme) and layout for every page
- `app.js`: sample data and the behaviour for every page; each page says which it is with `<body data-page="...">`

Bookings, check-ins, prices, slots and blocked dates made while clicking around are kept in this browser
(localStorage), so a booking made on `book.html` shows up on `admin.html` and `scanner.html`.
"Reset sample data" in the top bar clears them.

## Editing sample values
Prices, slots, capacity, tours and content are the `S`, `NEWS`, `SERVICES`, `OUTREACH`, `ERAS`, `FAQ` constants at the top of `app.js`.
Items marked TBD are listed in `QUESTIONS` (the "Open questions" drawer).
