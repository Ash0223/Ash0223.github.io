# Ashish Prasad R — Software Engineer Portfolio

Static responsive portfolio built with HTML, CSS and vanilla JavaScript.

## Deploy on GitHub Pages
Create a repository, upload the contents, push to `main`, then GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Deploy on Netlify
Import the repository into Netlify. No build command is required; publish directory is `.`.

## Custom domain later
The site is a static HTML/CSS/JS site, so a custom domain can be connected later without changing the application architecture.

The transparent profile PNG is used only by the portfolio. The résumé intentionally does not use a photo so it remains ATS-friendly.


Portfolio direction: Java/Spring Boot remains the primary engineering focus, with AI exploration positioned as the next layer. The Outside Work section is ready for weekend travel photos.


## Live coding profiles
The Netlify deployment includes a serverless LeetCode stats endpoint at `/.netlify/functions/leetcode`. GitHub Pages can still host the static portfolio, but live LeetCode data requires the Netlify deployment because GitHub Pages does not run server-side functions.

The HackerRank card links to the public profile. HackerRank's public profile currently does not expose the latest completed course/star rating needed for a reliable live card, so that value is intentionally not guessed.
