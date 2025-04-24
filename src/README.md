
# ⚖️ Lawyer Appointment Booking Web App

Welcome to the **Lawyer Appointment Booking Web App** – a modern React + DaisyUI-powered Single Page Application (SPA) where users can browse lawyers and book appointments with ease. Built with routing, state management, local storage persistence, animated counters, and beautiful UI components.

---

## 🚀 Features Overview

### ✅ Core Features

- 🧭 **Navbar (DaisyUI)**
  - Logo + Site Name
  - 4 navigation menu items (as per Figma)
  - Right-aligned action button
  - Consistent on all pages including 404

- 🦶 **Footer (DaisyUI)**
  - Centered logo
  - Navigation menu
  - 3 social media icons (linked)
  - Hidden on error pages

- 🏠 **Homepage**
  - 🎯 Banner Section: Background image + center-aligned heading
  - ⚖️ Lawyers Grid (3x2 view, "Show All" to reveal 12)
    - DaisyUI `card`, `badge`, `button`
  - 🏆 Success Metrics: 4 cards with icon, number (with `react-countup`), and title

- 👨‍⚖️ **Lawyer Details Page**
  - Profile section with details (image, fee, availability, etc.)
  - Appointment card: Book button + availability badge

- 📅 **Bookings Page**
  - Lists all appointments in DaisyUI `card`s
  - Includes lawyer name, fee, speciality, and cancel button
  - Data persists via `localStorage`

- 🧾 **Booking Logic**
  - Prevents duplicate bookings
  - Shows success/error toasts
  - Redirects to Bookings page

- 📚 **Blogs Page**
  - Styled using DaisyUI components
  - Articles:
    - `useState` in React
    - `useEffect`
    - Custom hooks
    - Controlled vs uncontrolled components
    - `useFormStatus()` in React

- ❌ **404 Error Page**
  - Custom-designed
  - Includes Navbar
  - Button: "বাড়ি ফিরে যান"
  - Footer is hidden

---

## ✨ Advanced Features

- 📊 **Appointment Fee Chart (Recharts)**
  - Dynamic bar chart based on booked fees
  - Real-time updates on cancel
  - Hidden if no bookings exist

- 🔢 **Counting Animation**
  - Done via `react-countup`

- ➤ **Dynamic Page Titles**
  - Uses `useLocation()` to dynamically update `document.title`

- ➤ **Invalid Dynamic Routes**
  - `/lawyer/invalid-id` shows an error message

- ➤ **Lawyer Availability Logic**
  - Shows "Unavailable Today" if not available on current date
  - DaisyUI `badge` for status

- ➤ **Loading States**
  - Show loading animation (DaisyUI spinner)
  - Fallback UI on fetch/reload

---

## 🛠️ Technologies Used

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI** 🌼
- **Recharts**
- **React CountUp**
- `localStorage` for persistence

---

## 📂 Folder Structure

```
src/
├── assets/        # Images & static content
├── components/    # Navbar, Footer, LawyerCard, etc.
├── pages/         # Home, Bookings, Blogs, Details, Error
├── context/       # Booking context
├── utils/         # Utility functions (e.g., check availability)
├── App.jsx        # Root component
```

---

## 🧪 Getting Started

1. Clone this repo  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run dev server:  
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173/`

---

## ✅ Dev Checklist

- ✅ Minimum 10 GitHub commits
- ✅ No Lorem Ipsum
- ✅ All images, video, and content are relevant
- ✅ Responsive design using Tailwind + DaisyUI
- ✅ Booking system fully functional
- ✅ Chart updates on appointment changes

---

## 🙌 Credits

Built with 💻 by [Md kawsar hussain]  
Design inspiration from [Figma design link]

---

## 📎 License

MIT License
