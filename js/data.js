/* ------------------------------------------------------------
   EDIT THIS FILE to change the business details, menu and packages.
   Prices are placeholders (Gambian dalasi) — replace with real ones.
   ------------------------------------------------------------ */

const SITE = {
  name: "Bella's Kitchen & Events",
  tagline: "Party food and snacks, cooked fresh and delivered on time",
  // WhatsApp number in international format, digits only (no + or spaces)
  whatsapp: "2200000000",
  phoneDisplay: "+220 000 0000",
  email: "hello@bellaskitchen.example",
  instagram: "https://tiktok.com/bellaskitchen",
  location: "The Gambia",
  currency: "D",
  hours: "Daily, 8am to 8pm",
  leadTime: "Orders for 50 guests or more need at least 3 days' notice."
};

/* Menu categories */
const CATEGORIES = ["Small chops", "Pastries", "Rice and mains", "Grills", "Drinks", "Desserts"];

/* Menu items. `art` is a background colour for the placeholder tile.
   To use a photo, add  image: "images/your-photo.jpg"  to the item. */
const MENU = [
  { id: "sc-platter", name: "Small chops platter", cart: "Small chops", price: 850, unit: "tray of 30",
    desc: "Spring rolls, samosas, chicken wings and fish balls with pepper dip.", art: "#b3174f" },
  { id: "sc-fataya", name: "Fataya", cart: "Small chops", price: 600, unit: "25 pieces",
    desc: "Crisp pastry parcels filled with spiced fish and onion.", art: "#8f1140" },
  { id: "sc-puff", name: "Puff puff", cart: "Small chops", price: 400, unit: "30 pieces",
    desc: "Soft, golden fried dough balls, lightly sweet.", art: "#c2603a" },
  { id: "sc-wings", name: "Peppered chicken wings", cart: "Small chops", price: 950, unit: "30 pieces",
    desc: "Wings fried then tossed in a hot pepper glaze.", art: "#a1281f" },

  { id: "pa-meatpie", name: "Meat pie", cart: "Pastries", price: 700, unit: "12 pieces",
    desc: "Flaky pastry with minced beef, potato and carrot.", art: "#9a6a1f" },
  { id: "pa-sausage", name: "Sausage rolls", cart: "Pastries", price: 650, unit: "15 pieces",
    desc: "Seasoned sausage meat baked in buttery pastry.", art: "#7b5418" },
  { id: "pa-doughnut", name: "Doughnuts", cart: "Pastries", price: 500, unit: "12 pieces",
    desc: "Fluffy ring doughnuts rolled in sugar.", art: "#d08a2b" },
  { id: "pa-chinchin", name: "Chin chin", cart: "Pastries", price: 350, unit: "party bag",
    desc: "Crunchy fried dough bites, made fresh in small batches.", art: "#b8791f" },

  { id: "rm-benachin", name: "Benachin (Gambian jollof)", cart: "Rice and mains", price: 1800, unit: "tray, serves 10",
    desc: "One-pot rice cooked in tomato, onion and fish stock with vegetables.", art: "#c2441f" },
  { id: "rm-domoda", name: "Domoda", cart: "Rice and mains", price: 2000, unit: "tray, serves 10",
    desc: "Groundnut stew with beef and sweet potato, served over rice.", art: "#8a4b1d" },
  { id: "rm-yassa", name: "Chicken yassa", cart: "Rice and mains", price: 2200, unit: "tray, serves 10",
    desc: "Grilled chicken in a tangy onion and lemon sauce with rice.", art: "#9aa11f" },
  { id: "rm-fried", name: "Fried rice and chicken", cart: "Rice and mains", price: 2300, unit: "tray, serves 10",
    desc: "Rice stir-fried with mixed vegetables and served with fried chicken.", art: "#2d6a45" },

  { id: "gr-suya", name: "Beef suya skewers", cart: "Grills", price: 900, unit: "20 skewers",
    desc: "Thin-sliced beef rubbed with groundnut spice and grilled.", art: "#7a2418" },
  { id: "gr-chicken", name: "Grilled chicken", cart: "Grills", price: 1500, unit: "10 pieces",
    desc: "Marinated overnight and grilled over charcoal.", art: "#a1521f" },
  { id: "gr-fish", name: "Grilled fish", cart: "Grills", price: 1700, unit: "5 whole fish",
    desc: "Fresh fish with herb and pepper stuffing.", art: "#1f5f7a" },

  { id: "dr-bissap", name: "Bissap", cart: "Drinks", price: 450, unit: "2 litres",
    desc: "Chilled hibiscus drink with mint and a little orange blossom.", art: "#b3174f" },
  { id: "dr-baobab", name: "Baobab juice (Buy)", cart: "Drinks", price: 500, unit: "2 litres",
    desc: "Creamy baobab fruit drink, sweet and slightly tart.", art: "#6b7a4a" },
  { id: "dr-ginger", name: "Ginger juice", cart: "Drinks", price: 450, unit: "2 litres",
    desc: "Fresh ginger, lemon and a touch of pineapple.", art: "#c99a1f" },
  { id: "dr-water", name: "Bottled water", cart: "Drinks", price: 300, unit: "pack of 12",
    desc: "Chilled still water for your guests.", art: "#1d2457" },

  { id: "de-cake", name: "Celebration cake", cart: "Desserts", price: 3500, unit: "1 cake, serves 20",
    desc: "Vanilla or chocolate sponge, iced and decorated to your theme.", art: "#d1668e" },
  { id: "de-cupcake", name: "Cupcakes", cart: "Desserts", price: 800, unit: "12 pieces",
    desc: "Soft vanilla cupcakes with buttercream swirls.", art: "#cc8ab0" },
  { id: "de-fruit", name: "Fruit platter", cart: "Desserts", price: 1200, unit: "serves 15",
    desc: "Seasonal fruit, cut and arranged on a large platter.", art: "#2d6a45" }
];

/* Party packages — priced per guest */
const PACKAGES = [
  { id: "intimate", name: "Intimate", min: 10, max: 30, perHead: 350,
    blurb: "For birthdays, naming ceremonies and small family gatherings.",
    includes: ["One rice dish and one protein", "Small chops for every guest", "Two drinks, chilled", "Disposable plates, cutlery and napkins", "Delivery within your town"] },
  { id: "celebration", name: "Celebration", min: 31, max: 100, perHead: 300, featured: true,
    blurb: "For weddings, graduations and office parties.",
    includes: ["Two rice dishes and two proteins", "Small chops and pastries", "Three drinks, chilled", "Serving staff for up to 5 hours", "Table setup and food warmers", "Delivery and collection of serving ware"] },
  { id: "grand", name: "Grand", min: 101, max: 500, perHead: 260,
    blurb: "For large weddings, funerals, conferences and community events.",
    includes: ["Full buffet: three mains, grills and sides", "Small chops, pastries and a dessert table", "Drinks station with servers", "Event coordinator on the day", "Tents, tables and chairs can be added", "Free tasting for up to four people"] }
];

const ADDONS = [
  "Serving staff", "Table setup and decor", "Tents, tables and chairs",
  "Celebration cake", "Extra drinks", "Live grill station"
];

const FAQS = [
  ["How far ahead should I book?", "Book at least 3 days ahead for 50 guests or more, and a week for large events. Smaller orders are often possible with 24 hours' notice. Send us a message and we will confirm."],
  ["Do you deliver?", "Yes. We deliver and set up at your venue. The delivery fee depends on your location, and we confirm it before you pay."],
  ["Can I taste the food first?", "Yes. Grand package bookings include a free tasting for up to four people. For other events, a tasting box is available for a small fee."],
  ["How do I pay?", "We confirm your order on WhatsApp and share payment details there. A deposit secures your date, and the balance is due before delivery."],
  ["Can you cater for dietary needs?", "Yes. Tell us about vegetarian, halal or allergy needs when you order and we will plan the menu around them."],
  ["Can I change my order after I send it?", "You can change it up to 48 hours before your event. Message us on WhatsApp with the changes."]
];

/* Add REAL customer reviews here (with their permission). The reviews section
   on the home page stays hidden until this list has entries.
   Format: { q: "What they said", who: "Name, event" } */
const TESTIMONIALS = [];

/* Attach photos by item id. File names must match the images folder exactly. */
const IMAGES = {
  "sc-platter": "Small chops.jpg",
  "sc-fataya": "fataya.jpg",
  "sc-puff": "puff puff.jpg",
  "sc-wings": "peppered wings.jpg",
  "pa-meatpie": "meat pie.jpg",
  "pa-sausage": "Sausage.jpg",
  "pa-doughnut": "Doughnuts.jpg",
  "pa-chinchin": "Chin chin.jpg",
  "rm-benachin": "Benachin.jpg",
  "rm-domoda": "Domoda.jpg",
  "rm-yassa": "yassa.jpg",
  "rm-fried": "Fried rice.jpg",
  "gr-suya": "Beef suya.jpg",
  "gr-chicken": "Grilled chicken.jpg",
  "gr-fish": "Grilled fish.jpg",
  "dr-bissap": "Bissap.jpg",
  "dr-baobab": "Baobab.jpg",
  "dr-ginger": "Ginger juice.jpg",
  "dr-water": "Bottled water.jpg",
  "de-cake": "Celebration cake.jpg",
  "de-cupcake": "cupcake.jpg",
  "de-fruit": "Fruit platter.jpg"
};
MENU.forEach((m) => {
  if (IMAGES[m.id]) m.image = "images/" + encodeURI(IMAGES[m.id]);
});