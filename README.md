# Putting this on GitHub Pages

## One-time setup (5 minutes)

1. Go to github.com, sign in, click **New repository**.
2. Name it something like `ap-bio-scavenger-hunt`. Set it to **Public** — Pages needs that on a free account. Click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in `index.html`, `terms.js`, and the `images` folder. Click **Commit changes**.
5. Go to **Settings** → **Pages** (left sidebar).
6. Under "Build and deployment", set Source to **Deploy from a branch**, branch to **main**, folder to **/ (root)**. Click **Save**.
7. Wait about a minute, then refresh. Your link appears at the top:
   `https://YOURUSERNAME.github.io/ap-bio-scavenger-hunt/`

That link is what you submit to Schoology.

## Adding your photos

1. In your repo, click the **images** folder → **Add file** → **Upload files**.
2. Drag your photos in. Commit.
3. Open `terms.js`, click the pencil icon, and put each filename in the matching `image:` slot.

Keep filenames simple and lowercase — `cohesion.jpg`, not `IMG_4821 (1).JPG`. Rename before uploading.

Photos straight off a phone are often 4–8 MB. If the site loads slowly, resize them to about 1600px on the long edge first.

## Adding your captions

Open `terms.js`, click the pencil, and fill in each `caption:` between the quotes.

If your caption contains a double quote, use a single quote instead — a stray `"` will break the file.

Every commit redeploys automatically. Give it a minute.

## Swapping a term

Change the `term:` text and the `hint:` text on that line. Nothing else needs to change — numbering and unit counts update themselves.

## Before you submit

- Open the link in a private/incognito window to confirm it's actually public.
- Check the counter reads 50 of 50.
- Fill in `student` and `identifier` at the top of `terms.js`.
- Confirm your identifier is visible in every photo.
- Confirm no specimen is used for two terms.
