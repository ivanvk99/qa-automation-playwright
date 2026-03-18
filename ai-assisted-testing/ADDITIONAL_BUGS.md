## [AI-assisted] Search with empty input shows loading animation after "no results" message

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
When submitting a search query containing only empty spaces, the application displays a "no results" message but continues to show a loading animation, which creates inconsistent feedback.

**Steps to reproduce:**
1. Open the application
2. Enter only empty spaces in the search field
3. Press Enter

**Expected result:**  
The application should either:
- prevent submission of empty input, or  
- display a "no results" message without any loading indicator

**Actual result:**  
The message "There are no photos that matches search term." is shown, but a loading animation continues to appear below it.

---

## [AI-assisted] Search with leading or trailing spaces does not return valid matches

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
When a valid keyword is entered with leading or trailing spaces, the application appears to treat the value literally instead of normalizing it. This may cause valid content not to be found.

**Steps to reproduce:**
1. Open the application
2. Activate the gallery if needed
3. Enter a valid keyword with leading or trailing spaces (e.g. `"   photo   "`)
4. Submit the search

**Expected result:**  
The application should trim unnecessary spaces and return the same results as for the clean keyword.

**Actual result:**  
No results or inconsistent results are returned for an otherwise valid keyword.

---

## [AI-assisted] Uploading large image results in misleading validation error

**Severity:** Medium  
**Priority:** Medium  

**Description:**  
After attempting to upload a large image, the application displays a misleading validation error message unrelated to the actual issue.

**Steps to reproduce:**
1. Log in
2. Navigate to image upload
3. Upload a large image file
4. Wait for the upload process to complete or fail

**Expected result:**  
The application should:
- successfully upload the image, or  
- display an appropriate error message (e.g. file size limit exceeded)

**Actual result:**  
The application displays the message:  
"Name taken, please choose another."

---

## [AI-assisted] Navigating away from album creation provides no warning about unsaved changes

**Severity:** Medium  
**Priority:** Low  

**Description:**  
If a user enters album details or uploads content and then leaves the page before saving, the application does not warn about unsaved progress.

**Steps to reproduce:**
1. Log in
2. Start creating a new album
3. Enter album details or upload content
4. Navigate to another page or refresh the browser before saving

**Expected result:**  
The user should receive a warning that unsaved changes will be lost.

**Actual result:**  
The page is left immediately and all progress is lost without any warning.