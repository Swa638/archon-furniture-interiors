# Archon Furniture & Interiors

A responsive, dependency-free business website built with HTML, CSS, and JavaScript.

The homepage hero cycles through five illustrative kitchen and furniture images with a 4.5-second crossfade, optional previous/next and indicator controls, hover pause, and reduced-motion support.

## Preview in VS Code

1. Open this project folder in VS Code.
2. Open `index.html`.
3. Start a local preview with the **Live Server** extension: right-click `index.html` and choose **Open with Live Server**. If Live Server is not installed, install it from the VS Code Extensions view.
4. Alternatively, open `index.html` directly in a browser. A local server is recommended for the best preview experience.

## Publish this existing website free with GitHub Pages

Publishing is a manual step; this project has not been uploaded or deployed.

1. Sign in to GitHub and create a **public** repository for the website. Choose a repository name; the final Pages URL depends on your GitHub username and that name.
2. Install/open GitHub Desktop and sign in. Choose **File → Add Local Repository**, select this existing project folder, and choose the option to create a repository there if GitHub Desktop says it is not a repository yet. Keep the site's `index.html`, `styles.css`, `script.js`, `README.md`, and `assets` folder at the repository root.
3. In GitHub Desktop, commit the initial files, choose **Publish repository**, select the repository you created, and make sure it is published as **public**.
4. On GitHub, open that repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to finish building. Copy the exact public URL shown in the Pages settings and open it to test the live site before sharing it with customers.

The site already has a page title, mobile viewport and theme metadata, a descriptive meta description, Open Graph title/description/type, and LocalBusiness structured data. No canonical URL, `og:url`, absolute share-image URL, `robots.txt`, or `sitemap.xml` is included because the actual public Pages URL is not yet known. After GitHub displays that URL, use it to set the canonical and `og:url`, make `og:image` an absolute URL ending in `/assets/images/archon-profile.jpe`, and only then create a sitemap or robots file with the real site URL. Google indexing can take time and is not guaranteed to be immediate.

## Updating the inspiration gallery

The gallery cards are generated from the `inspirationImages` list near the top of `script.js`. Each entry has its own category and photo reference; the category filters show only matching images. To add an image, use `inspiration(category, title, photoId, alt, position)` with a unique Unsplash image ID and descriptive alt text. Gallery references are illustrative inspiration, not completed Archon work. Each card opens the existing lightbox and includes design-customisation and WhatsApp enquiry actions.

Confirmed business projects remain separate from inspiration images. Place Archon project photographs in `assets/images/projects/`, then add each photo to the `confirmedProjectImages` list in `script.js` with a title, category, relative `src` (for example, `assets/images/projects/kitchen-01.jpg`), descriptive alt text, and optional `position` (for example, `"center 35%"`) to adjust its crop. Project photos use the same click-to-open lightbox, zoom, and previous/next controls, and are clearly labelled as confirmed Archon project references. The project gallery stays empty until real photos are added to both the folder and data list; never add illustrative stock images to that list.

The provided Archon profile graphic is saved as `assets/images/archon-profile.jpe` for social previews. The matching site-colour SVG mark in `assets/images/archon-mark.svg` is used in the header, footer, and as the favicon. Mr. Manoj Bhambre's provided portrait is saved as `assets/images/manoj-bhambre.jpe` and displayed in the owner section.

## Contact features

The enquiry form validates the required fields and opens WhatsApp with a prefilled message. Service enquiry buttons, the floating WhatsApp link, tap-to-call contact, social links, and the Atgaon map search are included.

The custom furniture quote form collects the customer's requirements and opens WhatsApp with a message draft for review; it does not send the message automatically. If a customer selects a reference image, they must attach it manually in WhatsApp because the browser form cannot transfer attachments into a WhatsApp message.
