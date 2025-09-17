# OAuth Integration for Signup/Login

## Completed Steps
- [x] Add OAuth dependencies (passport, passport-google-oauth20, express-session) to backend/package.json
- [x] Install new dependencies with npm install
- [x] Configure passport middleware in backend/server.js
- [x] Create backend/config/passport.js with Google OAuth strategy
- [x] Add OAuth routes (/auth/google, /auth/google/callback) in backend/routes/userRoute.js
- [x] Implement OAuth controller functions (googleAuth, googleAuthCallback) in backend/controllers/userController.js
- [x] Update backend/models/userModel.js to include googleId field and make password optional for OAuth users
- [x] Update frontend/src/components/Login.jsx to include Google sign-in button and handle OAuth token from URL

## Next Steps
- [ ] Set up Google OAuth credentials in .env file (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET)
- [ ] Test OAuth login flow end-to-end
- [ ] Handle OAuth signup similarly to regular signup (e.g., welcome message)
- [ ] Add OAuth option to signup page as well
- [ ] Deploy and test on production
