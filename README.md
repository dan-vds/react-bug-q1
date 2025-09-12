# React Bug Challenge - User Management Dashboard

This is a Next.js application with intentional bugs for testing coding skills. The app contains a user management dashboard with filtering, statistics, and user status management.

## 🐛 About the Bugs

This application contains **4 intentional bugs** that can be discovered through normal website usage (no code inspection needed):

1. **Filter Buttons Don't Work** - Some filter buttons don't respond to clicks
2. **Statistics Don't Add Up** - The math in the statistics section is incorrect  
3. **Duplicate Emails** - All user cards show the same email address
4. **Toggle Button Labels** - Button text is backwards/confusing

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing for Bug Fixes

This project includes automated testing to verify if bugs have been fixed:

### Prerequisites
```bash
npm install puppeteer
```

### Run Tests

**Automated testing (headless):**
```bash
npm run test:bugs
```

**Debug mode (with browser visible):**
```bash
npm run test:bugs:debug
```

**Manual testing:**
```bash
# Make sure the dev server is running first
npm run dev

# Then in another terminal:
node test-bugs.js --url http://localhost:3000
```

### Test Output

The test script will output:
- ✅/❌ status for each of the 4 bugs
- Overall pass/fail status  
- Detailed logs of what was tested
- JSON summary for automated processing

Example output:
```
=== BUG FIX TEST RESULTS ===
Overall Status: ❌ BUGS REMAIN
Fixed: 1/4 bugs

Individual Bug Status:
1. Statistics Math: ❌ NOT FIXED
2. Duplicate Emails: ❌ NOT FIXED
3. Toggle Button Labels: ❌ NOT FIXED
4. Filter Buttons: ✅ FIXED
```

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
