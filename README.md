# Bella's Kitchen & Events

Static catering website. No build step and no backend.

## Pages
- `index.html` home, party planner, packages, FAQ
- `menu.html` menu with category filter and search
- `packages.html` per-guest packages and add-ons
- `book.html` event booking form (sends to WhatsApp)
- `cart.html` cart (saved in the browser with localStorage)
- `checkout.html` checkout (sends the order to WhatsApp)

## Before you publish
Edit `js/data.js`:
1. Set `SITE.whatsapp` to the caterer's number (international format, digits only).
2. Update phone, email, Instagram, hours and lead time.
3. Replace the placeholder prices, menu items and packages.
4. Add photos: put them in an `images/` folder and add `image: "images/name.jpg"` to a menu item.
5. Add real customer reviews to `TESTIMONIALS` (the reviews section stays hidden until you do).

## Deploy
Push the folder to GitHub, then import the repository in Vercel. No settings are needed.
