# Mother's Day Website Gift

A warm and interactive Mother's Day page built as a personal surprise gift.

## What’s Included

- Full-screen intro banner with a **Let's Start** button
- Soft navy gradient background with glowing center
- Animated falling sakura petals for a dreamy feel
- Responsive memories section with single photos and vertical message text
- Lightbox preview for photo clicks
- Slideshow of special moments with navigation dots
- Typing animation for a heartfelt letter
- Background music support

## How to Use

1. Open `index.html` in a web browser.
2. The intro banner appears first.
3. Tap **Let's Start** to reveal the page content.

## Customization

### Change the Intro Text

- Open `index.html`
- Find the `<div class="intro-card">` block
- Update the heading or paragraph text as needed

### Update the Personal Message

- Open `script.js`
- Locate the `messageText` variable
- Replace the placeholder text with your own message
- Keep the newline formatting if you want line breaks

### Replace the Photos

- Put your photos in the `M Day project` folder (or adjust the paths)
- Open `index.html`
- Replace the current `src` values for the `.single-photo` images
- Use square or portrait photos to match the layout nicely

### Replace Slideshow Photos

- Add your slideshow images to the folder
- In `index.html`, replace the `src` values in the `.slide` blocks
- Add or remove slide blocks as needed

### Use Your Own Background Music

- Place an MP3 file in the project folder
- Open `index.html`
- Update the `<source>` `src` attribute inside the `<audio>` element

> Note: Most browsers require a user interaction before audio can play automatically. The site attempts to start music on load, but if the browser blocks autoplay, tapping **Let's Start** will trigger it.

## Responsive Behavior

- Desktop: photos are arranged in columns with a centered vertical text block
- Mobile: the layout stacks cleanly and the photos wrap into rows
- The lightbox preview automatically fits photos to the available screen area

## Troubleshooting

- **No photo display**: verify the image file names and paths in `index.html`
- **Music not playing**: browser autoplay policies may block audio; click the start button once
- **Page remains hidden**: press **Let's Start** to reveal the content
- **Animations not visible**: use a modern browser with JavaScript enabled

## File Structure

```
M Day project/
├── index.html      # Main page and layout
├── style.css       # Visual design and responsive styles
├── script.js       # Intro banner, lightbox, animation, slideshow
├── README.md       # Documentation for the project
└── Images/         # Image files used on the page
```

Enjoy sharing the site with your mother and feel free to customize it further!
