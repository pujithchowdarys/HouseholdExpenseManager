# Business & Chits Multi-Page Web App (Prototype)

This prototype is a functional starter for:
- Login / Signup (Firebase Authentication)
- Dashboard with buttons: Business, Chits, Household Expenses, Loans, Summary, Settings
- Basic pages for Business, Chits, Household, Loans, Summary, Settings
- Firestore integration (CRUD) skeleton for customers, chits, transactions
- Instructions to deploy on GitHub Pages and configure Firebase

> IMPORTANT: This project contains placeholders for Firebase configuration. You must create a Firebase project and replace the config in `assets/js/firebase-config.js`.

## Files
- index.html — Login / Signup page
- dashboard.html — Main dashboard (welcome + buttons)
- business.html, chit.html, household.html, loans.html, summary.html, settings.html — feature pages
- assets/css/style.css — basic styling
- assets/js/auth.js — auth helpers (signup/login/logout)
- assets/js/firestore.js — Firestore CRUD examples
- assets/js/firebase-config.js — PLACEHOLDER: add your Firebase config
- assets/js/main.js — page initialization and navigation helpers

## How to use (quick)
1. Create a Firebase project: https://console.firebase.google.com/
2. Enable **Authentication** (Email/Password) and **Firestore Database** (start in test mode for development).
3. Copy your Firebase config and paste into `assets/js/firebase-config.js`.
4. Open `index.html` in the browser (or serve with a static server). For real multi-page routing, host on GitHub Pages.
5. To deploy on GitHub Pages:
   - Push repository to GitHub.
   - In repo settings -> Pages, set source to `main` branch `/ (root)`.
   - Ensure `index.html` is at root or use a docs/ folder.

## Google Sheets alternative
If you strongly prefer Google Sheets as the backend, use Google Apps Script to build a REST endpoint that your frontend can call. This prototype uses Firebase for simplicity and real-time features.

## What's included
This is a prototype scaffold — many UI features and validations will need to be expanded per your full spec (random wheel picker, OTP, email/SMS, advanced reporting). Use this as a working starting point.

