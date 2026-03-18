# Manual Bug Report

**Application tested:**  
http://demo.baasic.com/angular/starterkit-photo-gallery/main  

**Testing type:**  
Manual exploratory testing  

**Browser used:**  
Mozilla Firefox  

---

## Bug 1 — Search suggestions show unrelated history

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
Clicking on search empty field, suggestions appear that were not previously entered by the user.  

**Steps to reproduce:**
1. Click on the search field  
2. Click again inside the search field  

**Expected result:**  
Suggestions should only contain relevant or user-entered data.  

**Actual result:**  
Suggestions appear that were never typed by the user.  

---

## Bug 2 — Search icon does not trigger search

**Severity:** High  
**Priority:** Medium  

**Description:**  
Clicking the search icon does not trigger search.  

**Steps to reproduce:**
1. Enter a keyword in the search field  
2. Click the search icon  

**Expected result:**  
Search results should appear.  

**Actual result:**  
Nothing happens. Search only works when pressing Enter.  

---

## Bug 3 — Copyright blog link is not clickable

**Severity:** Low  
**Priority:** Low  

**Description:**  
The "Blog name" in the copyright section shows a hover animation but cannot be clicked.  

**Steps to reproduce:**
1. Scroll to the bottom of the page  
2. Hover over the Blog name  
3. Click the Blog name  

**Expected result:**  
The blog link should redirect to the blog page.  

**Actual result:**  
Nothing happens when clicking the link.  

---

## Bug 4 — Gallery is not visible on scroll

**Severity:** Medium  
**Priority:** Low  

**Description:**  
The gallery is not loaded by scrolling. Users must click the scroll icon to make the gallery available.  

**Steps to reproduce:**
1. Open the main page  
2. Scroll down without clicking the scroll icon  

**Expected result:**  
The gallery should load automatically or clearly indicate that clicking the scroll icon is required.  

**Actual result:**  
The gallery does not appear unless the scroll icon is clicked first.  

---

## Bug 5 — Scroll icon loads gallery but does not navigate user

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
After clicking the scroll icon, the gallery loads, but the page does not scroll to the gallery section.  

**Steps to reproduce:**
1. Open the main page  
2. Click the scroll icon  

**Expected result:**  
The page should automatically scroll to the gallery section.  

**Actual result:**  
The user remains in place and must scroll manually.  

---

## Bug 6 — Closing image resets gallery position

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
After closing an image, the user is returned to the top of the page and must re-enter the gallery.  

**Steps to reproduce:**
1. Open the main page  
2. Click the scroll icon  
3. Scroll to gallery  
4. Open an image  
5. Close the image  

**Expected result:**  
The user should return to the previous gallery position.  

**Actual result:**  
The gallery view is lost and must be accessed again.  

---

## Bug 7 — Login input fields lack focus indication

**Severity:** Low  
**Priority:** Low  

**Description:**  
Clicking on input fields does not clearly indicate focus.  

**Steps to reproduce:**
1. Open the login page  
2. Click on the username field  

**Expected result:**  
A visible focus indicator should appear.  

**Actual result:**  
No clear focus indication appears.  

---

## Bug 8 — Social login returns configuration error

**Severity:** High  
**Priority:** High  

**Description:**  
Using social login returns a configuration error.  

**Steps to reproduce:**
1. Open login page  
2. Click any social login option  

**Expected result:**  
User should be redirected to provider.  

**Actual result:**  
Error appears:  
"undefined: Social login configuration not found."  

---

## Bug 9 — Inactive account shows misleading error

**Severity:** Medium  
**Priority:** Low  

**Description:**  
Inactive users see a generic invalid credentials message.  

**Steps to reproduce:**
1. Register account  
2. Do not activate via email  
3. Attempt login  

**Expected result:**  
User should be informed account needs activation.  

**Actual result:**  
"Invalid email, username or password."  

---

## Bug 10 — Password reset leads to 404

**Severity:** High  
**Priority:** High  

**Description:**  
Password reset link leads to 404 error page.  

**Steps to reproduce:**
1. Open login page  
2. Request password reset  
3. Open email link  

**Expected result:**  
Valid reset page should open.  

**Actual result:**  
HTTP Error 404.0  

---

## Bug 11 — Uploaded image lost after refresh

**Severity:** High  
**Priority:** Medium  

**Description:**  
Refreshing during upload removes image and data.  

**Expected result:**  
Data should persist or rollback properly.  

**Actual result:**  
Image and data are lost.  

---

## Bug 12 — Misleading “Name taken” validation

**Severity:** Medium  
**Priority:** Low  

**Description:**  
Invalid names trigger incorrect validation message.  

**Expected result:**  
Proper validation message for invalid input.  

**Actual result:**  
"Name taken, please choose another."  

---

## Bug 13 — Some profile images lead to 404

**Severity:** High  
**Priority:** High  

**Description:**  
Some images open, others lead to 404.  

**Actual result:**  
Every second image may fail.  

---

## Bug 14 — Inconsistent image naming

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
Some images show "No name available", others show names.  

---

## Bug 15 — No album name validation

**Severity:** Low  
**Priority:** Low  

**Description:**  
Album name accepts any value without validation.  

---

## Bug 16 — Upload affects thumbnail instead of content

**Severity:** High  
**Priority:** Medium  

**Description:**  
Uploading image changes album thumbnail instead of adding content.  

---

## Bug 17 — Spaces removed from image name

**Severity:** Low  
**Priority:** Low  

**Description:**  
Spaces are automatically removed from image names.  

---

## Bug 18 — Refresh causes data inconsistency

**Severity:** High  
**Priority:** High  

**Description:**  
Refreshing during album creation causes inconsistent state between profile and gallery.  