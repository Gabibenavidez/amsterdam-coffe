
# ☕ Amsterdam Coffee – Responsive Coffee Shop Website

Welcome to **Amsterdam Coffee**, a fully responsive and visually rich landing page for a modern coffee shop. This project demonstrates advanced use of HTML5 and CSS3 to build an interactive, mobile-friendly user experience with subtle animations and support for high-DPI (retina) displays.

---

## 🚀 Features

### 🌐 Responsive Layout
- Built with **mobile-first** principles
- Fluid containers and **media queries** for smooth adaptation across devices
- Flexible navigation bar with hamburger toggle for small screens

### 🎨 CSS3 Animations and Transitions
- Smooth **hover effects** on cards, links, and buttons
- Entry animations using `@keyframes` (e.g., `fadeInUp`, `scaleIn`) for dynamic page loading
- Transition effects on grayscale and color filters for product previews

### 📱 Retina Display Support
- Uses media queries to detect high-DPI displays:
  ```css
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    /* High-resolution image support */
  }
  ```
- Optimized image assets (e.g., `.jpg`, `.png`) for crisp visuals on retina devices

### 🛠 Utility-First Styling
- Utility classes for quick spacing (`.px-4`, `.mt-5`), font styles (`.text-uppercase`), and layout
- Component-based styling for navigation, headers, buttons, and more

### 🎯 Custom Font Integration
- Embedded custom fonts via `@font-face`
- High-performance rendering with `font-display: swap` behavior

---

## 📂 Project Structure

```
amsterdam-coffee/
├── index.html
├── css/
│   └── style.css
├── fonts/
│   └── (custom fonts)
├── img/
│   └── (images and retina-ready assets)
└── README.md
```

---

## 🧰 Setup Instructions

To run this project locally:

1. **Download or Clone the Repository**
   ```bash
   git clone https://github.com/gabibenavidez/amsterdam-coffee.git
   ```

2. **Unzip the Project (if downloaded as ZIP)**
   - Unzip `amsterdam-coffee.zip` into your desired directory.

3. **Open in Browser**
   - Navigate into the folder and open `index.html` using any modern browser (Chrome, Firefox, Safari).
   - Recommended: Use **Live Server** (e.g., via VS Code extension) for hot-reloading and local testing.

4. **Optional: Run a Local Server**
   ```bash
   npx serve .
   ```
   Then open `http://localhost:5000` in your browser.

---

## 💡 Bonus Implementation Details

### 🔄 CSS3 Hover Transitions

```css
.course-box img {
  transition: all 0.4s ease-in-out;
}
.course-box:hover img {
  transform: scale(1.03);
  filter: grayscale(0%);
}
```

These transitions enhance interactivity, providing subtle feedback when a user hovers over product elements.

---

### 🖼 Retina Image Support

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-image {
    background-image: url('../img/hero-retina.jpg');
  }
}
```

Images are automatically upgraded on retina/high-DPI screens to deliver sharper visuals.

---

## 📸 Screenshots

![Amsterdam Coffee Homepage](./index.jpg)

---

## 🙌 Credits

Developed by Gabriel Benavidez  
Inspired by Amsterdam’s rich café culture and minimalist design principles.
