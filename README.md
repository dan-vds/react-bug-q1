# React Bug Challenge - User Management Dashboard

This is a Next.js application with intentional bugs for testing coding skills. The app contains a user management dashboard with filtering, statistics, and user status management.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure

```
src/
  app/
    layout.js          # App layout
    page.js           # Main page component
  components/
    FilterButtons.js   # 🐛 Filter buttons (bug #1)
    Statistics.js      # 🐛 Statistics display (bug #2) 
    UserCard.js       # 🐛 Individual user cards (bugs #3,#4)
    UserList.js       # User list with filtering
    Header.js         # Page header
    LoadingSpinner.js # Loading component
    ErrorMessage.js   # Error display
  services/
    apiService.js     # Mock API service
  styles/
    globals.css       # Global styles
```

## Challenge Instructions

1. **Test the website** - Use the app normally to discover the bugs
2. **Fix the bugs** - Edit the code to resolve each issue
3. **Verify fixes** - Run `npm run test:bugs` to confirm all bugs are resolved

The goal is to achieve ✅ ALL BUGS FIXED status from the test script.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
