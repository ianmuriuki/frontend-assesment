# Frontend Assessment


## What I built

### Responsive Navbar
A sticky top navigation bar with the MansaX logo on the left and nav link on the right. On tablet and mobile the links collapse behind a hamburger toggle, keeping the interface clean on smaller screens.

### Profile Section
A centered card showing the user's avatar, name (Michael), and a welcome message confirming they've joined their first investment knowledge club. On desktop this lives in the left column; on mobile it stacks at the top.

### Members Grid
A 2×2 grid of club members, each cell showing a circular avatar, the member's name, and their score. Each card has a distinct pastel background colour matching the original design: pink for Benard Makodingo, green for kigSmall Foot, and yellow for both Caroline Likhoi entries — with dark text to keep it readable against the light backgrounds.

### Recommendation Block
A text block with a gold-accented heading ("Now let's make you great!") and a short paragraph explaining that the recommended memberships were chosen based on the user's profile.

### Membership Toggles
Two clickable cards — Foundation Membership and Economy Membership — that reveal or hide their description text when clicked. The chevron icon rotates to indicate the open/closed state. Both are keyboard accessible (Enter and Space work) and keep their aria-expanded attribute in sync for screen readers.

### Membership Details Button
A gold button that opens a modal showing the full details of both membership types.



### Footer
A gold bar at the bottom with the Fourfront Management copyright text on the left and a WhatsApp contact button on the right, matching the original design.

---

## Responsive behaviour

On **desktop**  the page splits into two columns, the profile card and members grid sit on the left, while the recommendation text and membership cards fill the right. Spacing is generous and the membership cards lift slightly on hover.

On **tablet** the same two-column layout is used but with tighter padding. The navbar collapses to a hamburger toggle.

On **mobile**  everything stacks into a single column from top to bottom, matching the original PDF mockup exactly.

---

## Tech used

- HTML5 — semantic, accessible markup
- CSS3 — custom properties, flexbox, responsive media queries
- Bootstrap 5.3 — grid system, Collapse, Modal, Navbar, form validation classes
- Bootstrap Icons — chevron and WhatsApp icons
- Google Fonts — DM Sans
- Vanilla JavaScript ES6+ — membership toggle logic, keyboard events