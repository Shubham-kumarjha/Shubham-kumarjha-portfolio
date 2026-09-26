# Shubham Kumar Jha — Portfolio

Welcome to your new portfolio website! This site is built using **vanilla HTML, CSS, and JavaScript**. 
It is lightning fast, easy to maintain, and requires absolutely **zero framework knowledge** (no React, no TypeScript, no build process required to edit the content).

## 📁 File Structure

Here are the important files you need to know about:

- `index.html` - The main structure of the website. You rarely need to edit this unless you want to add entirely new sections.
- `src/styles.css` - All the visual styling, colors, fonts, and responsive design.
- `src/main.js` - The interactive logic (scroll animations, form handling).
- **`src/data.js` - 🌟 The only file you need to edit to update your content!**
- `public/assets/` - The folder containing your images, resume, and certificates.

## 📝 How to Update Your Content

You do not need to touch the HTML to add a project, update your bio, or add a skill. 
Everything is controlled via `src/data.js`.

### Adding a Project
1. Open `src/data.js`
2. Scroll to the `projects` array.
3. Copy an existing project block `{ ... },` and paste it.
4. Update the text, URLs, and image path.

### Updating Skills
1. Open `src/data.js`
2. Scroll to the `skills` object.
3. Add or remove items from the arrays next to each category.

## 🖼️ How to Add Your Assets

Currently, the site uses placeholders. Here is how to add your real files:

1. **Profile Photo:** 
   Drop your profile image into `public/assets/images/` and name it `profile.jpg`. (If you use a different name, update the `index.html` or `data.js` accordingly).
   
2. **Project Images:**
   Add images to `public/assets/images/projects/` and update the `imageUrl` paths in `src/data.js`.
   
3. **Resume:**
   Drop your PDF resume into `public/assets/resume/` and name it `resume.pdf`. Update `data.js` if needed.
   
4. **Certificates:**
   Drop your certificate PDFs into `public/assets/certificates/` and update the paths in `data.js`.

## 🚀 How to Preview Locally

If you are using Replit, the site runs automatically. 
If you are running this locally on your own machine:

1. Install Node.js (if not already installed).
2. Open your terminal in this project folder.
3. Run `npm install` (only needed once).
4. Run `npm run dev`.
5. Open your browser to the local address provided (usually `http://localhost:5173`).

## 📱 Responsive Testing

Your site is built to look great on mobile. To test it:
1. Open the site in Google Chrome.
2. Right-click and select "Inspect" (or press F12).
3. Click the "Device Toggle" icon (looks like a phone/tablet) in the top left of the DevTools panel.

## 🌐 GitHub Deployment

To deploy this site for free using GitHub Pages:

1. Create a new repository on GitHub (suggested name: `shubham-kumar-jha-portfolio`).
2. Push this code to the repository.
3. Since this uses Vite, you need to set up a GitHub Actions workflow to build and deploy to GitHub Pages. (Alternatively, run `npm run build` locally, and push the `dist/public` folder to a `gh-pages` branch).
4. Go to your repository **Settings > Pages** and set the source to deploy from the gh-pages branch or GitHub Actions.

## 🛠️ Troubleshooting

- **"My new project isn't showing up!"**
  Make sure you didn't accidentally delete a comma `,` between project blocks in `data.js`.
- **"Images are broken / not loading"**
  Double-check the file paths. Paths should start with a forward slash: `/assets/images/...`. Ensure filenames match exactly (case-sensitive).