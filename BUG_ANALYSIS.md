# Bug Report Summary - React User Management App

This document outlines the bugs that are **visually discoverable** through website testing, without needing to examine the code.

## Overview
The application contains **4 clear functional bugs** that candidates should find by using the website normally. These bugs focus on:
- UI elements not working as expected
- Incorrect data display
- Confusing button labels
- Visual/text errors

## Bugs - Discoverable Through Website Testing

### 1. **Filter Buttons Don't Work** ⭐ CRITICAL
**Location**: Top of the page - filter buttons
**How to find**: Click the "All Users" or "Active" filter buttons
**Expected behavior**: Should filter the user list
**Actual behavior**: Buttons don't respond to clicks, list doesn't change
**Bug severity**: High - core functionality broken

**Testing steps**:
1. Open the website
2. Click "All Users" button → Nothing happens
3. Click "Active" button → Nothing happens  
4. Click "Inactive" button → This one works correctly!

### 2. **Statistics Don't Add Up** ⭐ CRITICAL
**Location**: Statistics section at top of page
**How to find**: Look at the numbers and do basic math
**Expected behavior**: Active + Inactive should equal Total
**Actual behavior**: Numbers don't add up correctly
**Bug severity**: High - data integrity issue

**Testing steps**:
1. Look at the statistics: "6 Total, 4 Active, 3 Inactive" 
2. Calculate: 4 + 3 = 7, but Total shows 6
3. Count manually by looking at user cards to verify the real numbers

### 3. **Toggle Button Labels Are Backwards** ⭐ MODERATE
**Location**: Each user card has a toggle button
**How to find**: Look at active users and read their button text
**Expected behavior**: Button should say what it WILL DO when clicked
**Actual behavior**: Button text is backwards/confusing
**Bug severity**: Medium - usability issue

**Testing steps**:
1. Find an "Active" user (green badge)
2. Look at their button - it says "Activate" (should say "Deactivate")
3. Find an "Inactive" user (red badge)  
4. Look at their button - it says "Deactivate" (should say "Activate")

### 4. **All User Cards Show Same Email** ⭐ MODERATE
**Location**: User cards - email field under each name
**How to find**: Look at the email addresses across different user cards
**Expected behavior**: Each user should show their unique email address
**Actual behavior**: All user cards show "john.doe@example.com"
**Bug severity**: Medium - data display error

**Testing steps**:
1. Look at the first user card - shows "john.doe@example.com"
2. Look at other user cards (Jane Smith, Bob Johnson, etc.)
3. Notice they all show the same email "john.doe@example.com"
4. Names are correct, but emails are all the same

## Testing Order Recommendation

For candidates testing the site, they should discover bugs in roughly this order:

1. **Try basic functionality**: Click filter buttons → discover they don't work
2. **Look at data**: Notice statistics don't add up mathematically  
3. **Examine user details**: Notice all users have the same email address
4. **Use individual features**: Try to understand toggle buttons → realize labels are confusing

## Key Benefits of These Bugs

✅ **Immediately visible** - no code inspection needed
✅ **Functionally obvious** - users expect these things to work
✅ **Range of severity** - from critical functionality to minor cosmetic
✅ **Different bug types** - UI interaction, data accuracy, labeling, text
✅ **Easy to test** - candidates can verify each bug in under 30 seconds

## Expected User Testing Flow

A candidate testing this application should:

1. **Load the page** → Look at the user list
2. **Try to filter users** → Discover "All Users" and "Active" buttons broken
3. **Check the math** → Notice statistics don't add up  
4. **Examine user details** → Notice all users show the same email address
5. **Test toggle buttons** → Realize button text is backwards

All bugs should be discoverable within **5 minutes of normal website usage** without looking at any code.
