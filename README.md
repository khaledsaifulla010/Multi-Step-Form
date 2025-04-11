# Multi-Step Form with Validation

A clean, modern multi-step form built with **Next.js App Router**, **React Hook Form**, **Zod**, and **TailwindCSS**. The form collects user info across multiple steps and validates inputs with clear error messaging.

---

## 🚀 Features

- ✅ Multi-step form with clear navigation (Next/Back)
- 🔒 Field-level validation using **Zod**
- 🎨 Styled with **TailwindCSS**
- 🌙 Dark mode compatible
- 💾 Local state with `useState`
- 🔁 Form reset on final submission (via full page reload)

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **React Hook Form**
- **Zod**
- **TailwindCSS**
- **React icons**

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/khaledsaifulla010/Multi-Step-Form
cd multi-step-form
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

```bash
http://localhost:3000
```

---

## 📂 Folder Structure

```
app/
  form/
    components/
      Step1.tsx
      Step2.tsx
      Step3.tsx
      Summary.tsx
    page.tsx
    hooks/
      useMultiStepForm.ts
lib/
  validationSchemas.ts
tailwind.config.ts
global.css
README.md
```

> Made with ❤️ by [Khaled Saifulla]
