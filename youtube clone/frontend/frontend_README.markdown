# YouTube Clone Frontend

## Setup

1. **Firebase Configuration**:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
   - Enable Authentication (Google provider), Firestore, and Storage.
   - Update `index.html` with your Firebase config.

2. **Test Locally**:
   - Open `index.html` in a browser.

3. **Host on GitHub Pages**:
   - The frontend is hosted at `https://your-username.github.io/youtube-clone/`.
   - Ensure the repository’s GitHub Pages settings point to the `frontend/` folder.

## Notes

- Uses CDN for React, Tailwind CSS, Firebase, and hls.js.
- For a production React app, use `create-react-app` and deploy the `build/` folder.