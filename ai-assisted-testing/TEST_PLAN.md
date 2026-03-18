TEST_PLAN.md
Objective
Validate the end-to-end quality of the photo gallery application across public and authenticated user journeys, with emphasis on functional correctness, usability, navigation, validation, and resilience. The plan is intentionally weighted toward areas already showing instability during exploratory testing.
Scope
The plan covers:
	•	Homepage and gallery entry behavior
	•	Photo gallery browsing and image viewer behavior
	•	Search
	•	Login
	•	Registration
	•	Account activation
	•	Password reset
	•	Social login
	•	User profile
	•	Album creation and management
	•	Image upload and thumbnail handling
	•	Naming and validation rules
	•	Navigation and static links
	•	State persistence, refresh handling, and interruption resilience
Assumptions
	•	Testing is executed manually in Mozilla Firefox.
	•	Some authenticated flows depend on email delivery for activation and password reset.
	•	The application supports both guest and logged-in usage depending on feature area.

Test Scenarios by Feature
A. Homepage, Landing Flow, and Gallery Entry
ID
Test Scenario
Coverage
Priority
HP-01
Verify the homepage loads successfully with expected key elements visible (hero area, scroll icon, branding, footer).
Functional / UI
High
HP-02
Verify the homepage loads without console-facing user errors, broken placeholders, or visibly missing assets.
UI / Stability
Medium
HP-03
Verify clicking the scroll icon loads the gallery content.
Functional
High
HP-04
Verify clicking the scroll icon also moves the user to the gallery section or provides a clear visual transition.
Navigation / UX
High
HP-05
Verify manual page scrolling without using the icon either loads the gallery or clearly indicates that a user action is required.
Navigation / UX / Negative
High
HP-06
Verify repeated clicks on the scroll icon do not duplicate gallery content, reload the section incorrectly, or break layout.
Functional / Resilience
Medium
HP-07
Verify gallery entry behavior remains consistent after page refresh.
Resilience
Medium
HP-08
Verify browser back/forward navigation does not reset the landing page and gallery state unexpectedly.
Navigation / Resilience
Medium
HP-09
Verify the footer remains reachable and visually stable after gallery content is loaded.
UI / Navigation
Low


B. Gallery Browsing and Image Viewer
ID
Test Scenario
Coverage
Priority
GB-01
Verify gallery items are displayed with thumbnail, author, and name information where available.
Functional / UI
High
GB-02
Verify clicking a gallery image opens the image viewer successfully.
Functional
High
GB-03
Verify closing the image viewer returns the user to the same gallery position and context.
Navigation / UX
High
GB-04
Verify opening and closing multiple different images in sequence does not reset the gallery or force re-entry from the homepage.
Functional / Resilience
High
GB-05
Verify images with missing names display a consistent fallback value and do not show contradictory naming across screens.
Functional / UI
Medium
GB-06
Verify broken or unavailable images are handled gracefully with an error state instead of redirecting to a generic 404 page.
Functional / Error handling
High
GB-07
Verify gallery content remains visible and usable after closing a viewer opened from deep within the list.
Navigation / Resilience
High
GB-08
Verify image viewer controls, close action, and overlay behavior are visually clear and responsive.
UI / UX
Medium
GB-09
Verify rapid repeated image opening/closing does not create overlapping layers, frozen overlay, or inconsistent page scroll behavior.
Resilience
Medium


C. Search
ID
Test Scenario
Coverage
Priority
SR-01
Verify search works when a valid keyword is entered and submitted with Enter.
Functional
High
SR-02
Verify search works when a valid keyword is entered and submitted via the search icon.
Functional / Regression
High
SR-03
Verify search suggestions are relevant, contextual, and not populated with unrelated values when the field is focused.
Functional / UX
High
SR-04
Verify empty search submission is handled gracefully and does not trigger confusing results or no-op behavior.
Validation / Negative
Medium
SR-05
Verify leading and trailing spaces in search input are trimmed or handled consistently.
Validation / Edge case
Medium
SR-06
Verify search supports partial and case-insensitive matches where expected for user-facing content.
Functional / Edge case
Medium
SR-07
Verify a clear no-results state is shown when no matches exist.
Functional / UX
Medium
SR-08
Verify clearing the search restores the default gallery state.
Functional / Navigation
High
SR-09
Verify search does not break gallery loading, image opening, or browser navigation after results are displayed.
Functional / Resilience
Medium


D. Login
ID
Test Scenario
Coverage
Priority
LG-01
Verify a user with valid active credentials can log in successfully.
Functional
High
LG-02
Verify invalid credentials show a clear and accurate error message.
Functional / Negative
High
LG-03
Verify inactive accounts show a dedicated activation-required message instead of a generic credential failure.
Validation / UX
High
LG-04
Verify required field validation prevents blank submission.
Validation
High
LG-05
Verify whitespace-only values are not accepted in login fields.
Validation / Edge case
Medium
LG-06
Verify field focus is visually clear when a user clicks or tabs into login inputs.
UI / Accessibility
Medium
LG-07
Verify keyboard navigation between login fields and actions is usable in Firefox.
UI / Accessibility
Low
LG-08
Verify login errors do not erase the user’s input unnecessarily unless there is a security reason to do so.
UX
Low


E. Registration and Account Activation
ID
Test Scenario
Coverage
Priority
RG-01
Verify a new user can register successfully with valid mandatory data.
Functional
High
RG-02
Verify duplicate email or username is rejected with a clear validation message.
Validation
High
RG-03
Verify invalid email formats are rejected.
Validation
High
RG-04
Verify weak, mismatched, or empty passwords are handled correctly if applicable in the form.
Validation / Negative
High
RG-05
Verify leading/trailing spaces in registration fields do not create unusable accounts.
Validation / Edge case
Medium
RG-06
Verify successful registration clearly communicates that email activation is required.
Functional / UX
High
RG-07
Verify the activation link from email opens a valid activation flow.
Functional
High
RG-08
Verify already-used, invalid, or expired activation links are handled with a controlled message.
Functional / Negative
Medium
RG-09
Verify an activated account can log in successfully afterwards.
End-to-end
High


F. Password Reset
ID
Test Scenario
Coverage
Priority
PR-01
Verify a password reset can be requested for a registered account.
Functional
High
PR-02
Verify requesting reset for a non-existent account is handled safely and clearly.
Functional / Negative
Medium
PR-03
Verify the password reset email contains a valid and reachable reset link.
Functional / Regression
High
PR-04
Verify the reset link opens the correct reset page rather than a generic error or 404 page.
Functional
High
PR-05
Verify a user can set a new valid password and log in with it successfully.
End-to-end
High
PR-06
Verify expired, reused, or invalid reset links are handled gracefully.
Functional / Negative
Medium
PR-07
Verify reset form validation prevents weak, blank, or mismatched passwords where applicable.
Validation
Medium


G. Social Login
ID
Test Scenario
Coverage
Priority
SL-01
Verify available social login options are displayed consistently on the login page.
Functional / UI
Medium
SL-02
Verify clicking each social login option starts the expected provider flow when configured.
Functional
High
SL-03
Verify unavailable or misconfigured providers display a controlled, user-friendly error message.
Functional / Error handling
High
SL-04
Verify canceling out of a social provider flow returns the user safely to the application.
Navigation / Negative
Medium


H. User Profile
ID
Test Scenario
Coverage
Priority
PF-01
Verify the user profile page loads correctly after login.
Functional
High
PF-02
Verify the user profile correctly displays the user’s albums and associated content.
Functional
High
PF-03
Verify opening album images from the profile consistently opens valid content.
Functional / Regression
High
PF-04
Verify profile data refreshes correctly after creating a new album or uploading new content.
Functional / Resilience
High
PF-05
Verify the empty-state view is clear and accurate when the user has no albums.
UX
Low
PF-06
Verify profile navigation does not produce stale counts, hidden content, or contradictory states between profile and gallery.
Functional / Resilience
High


I. Album Creation and Management
ID
Test Scenario
Coverage
Priority
AL-01
Verify a logged-in user can create a new album with valid data.
Functional
High
AL-02
Verify mandatory album fields are enforced.
Validation
High
AL-03
Verify album name validation handles empty, whitespace-only, duplicate, and unusually long values correctly.
Validation / Edge case
High
AL-04
Verify album creation communicates success clearly and places the user in a predictable post-save state.
Functional / UX
High
AL-05
Verify refreshing during album creation does not leave the application in an inconsistent or orphaned state.
Resilience / Regression
High
AL-06
Verify canceling or leaving album creation before completion is handled safely and predictably.
Navigation / Resilience
Medium
AL-07
Verify repeated clicks on save/create do not create duplicate albums.
Functional / Edge case
Medium
AL-08
Verify album details shown in profile and gallery remain consistent after creation.
Functional / Data consistency
High


J. Image Upload and Album Thumbnail Handling
ID
Test Scenario
Coverage
Priority
UP-01
Verify a logged-in user can upload a valid image into an album successfully.
Functional
High
UP-02
Verify the UI clearly separates uploading an album thumbnail from uploading album content.
Functional / UX
High
UP-03
Verify uploading through the image upload area adds an image to album content rather than overwriting the thumbnail.
Functional / Regression
High
UP-04
Verify uploading through the thumbnail area updates only the album thumbnail.
Functional
Medium
UP-05
Verify unsupported file types are rejected with a clear validation message.
Validation / Negative
High
UP-06
Verify unusually large files or interrupted uploads are handled with an explicit error or retry path.
Resilience / Negative
Medium
UP-07
Verify refreshing during or after image upload does not silently discard content or corrupt album state.
Resilience
High
UP-08
Verify multiple images can be uploaded to the same album without overwriting one another unintentionally.
Functional
Medium


K. Image and Album Naming / Validation
ID
Test Scenario
Coverage
Priority
NM-01
Verify image names accept valid human-readable values and preserve expected spacing.
Functional / Validation
Medium
NM-02
Verify image name validation rejects blank, whitespace-only, or clearly invalid input with the correct message.
Validation
High
NM-03
Verify duplicate image names, if restricted, show an accurate and specific validation message.
Validation
Medium
NM-04
Verify album names and image names are displayed consistently across homepage, gallery, image viewer, and profile.
Functional / UI
High
NM-05
Verify long names do not break card layout, modal layout, or overlap adjacent elements.
UI / Edge case
Medium


L. Navigation, Routes, and Static Links
ID
Test Scenario
Coverage
Priority
NV-01
Verify all visible navigation options lead to the correct screens.
Navigation
High
NV-02
Verify footer links and copyright/blog links are clickable and route correctly.
Navigation / Regression
Medium
NV-03
Verify deep links to login, registration, reset, profile, and gallery-related routes open valid screens.
Navigation
High
NV-04
Verify browser back/forward navigation works predictably across homepage, gallery, login, and profile.
Navigation / Resilience
Medium
NV-05
Verify broken links are not exposed to users through visible UI elements.
Navigation / Quality
Medium


M. Loading, Error Handling, and Resilience
ID
Test Scenario
Coverage
Priority
RS-01
Verify loading indicators appear during long-running actions such as gallery load, registration, album creation, and upload.
Functional / UX
Medium
RS-02
Verify loading indicators disappear correctly after success or failure and do not remain stuck.
Functional / Resilience
High
RS-03
Verify refresh during asynchronous actions does not leave orphaned content or contradictory UI states.
Resilience / Regression
High
RS-04
Verify failed operations produce actionable error messages instead of silent failures, generic 404 pages, or misleading validation.
Error handling
High
RS-05
Verify session expiration during authenticated actions is handled with a clear login recovery path.
Resilience / Security UX
Medium
RS-06
Verify partial failures do not leave content visible in one area of the application while missing in another.
Data consistency / Resilience
High



Recommended Execution Order
	1	High-priority public smoke flows: homepage, gallery entry, search, login, registration, password reset.
	2	High-risk authenticated flows: profile, album creation, image upload, thumbnail handling.
	3	Cross-page consistency: naming, navigation, broken links, viewer return behavior.
	4	Resilience passes: refresh, interruption, repeated clicks, long-running actions.


Regression Focus Areas
The following areas should be treated as primary regression targets in future cycles:
	•	Search behavior and suggestion logic
	•	Gallery entry and return-state behavior
	•	Image viewer open/close flow
	•	Authentication messaging accuracy
	•	Password reset link integrity
	•	Social login error handling
	•	Album creation and upload interruption handling
	•	Data consistency between profile and public gallery
	•	Naming and validation accuracy across all content forms


Exit Criteria
Testing for this scope is considered sufficiently complete when:
	•	All High-priority scenarios have been executed
	•	No unresolved High-severity blockers remain in core user journeys
	•	High-risk regression areas have been re-tested after fixes
	•	Inconsistent state, 404 routing, and misleading validation issues are either resolved or clearly documented
