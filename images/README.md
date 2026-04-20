# Image Placement Guide

Drop your images at the paths listed below. The filenames **must match exactly** (or edit the paths in `index.html` / `scripts/main.js` to match your names).

If an image is missing, the site shows a subtle gothic ornament placeholder — so it never looks broken.

---

## 1. Hero background (optional)

Atmospheric image behind your name on the opening screen. Heavily darkened by CSS.

```
images/hero/hero-bg.jpg
```

Recommended: wide landscape, dark/moody. Leave missing for pure black.

---

## 2. Portrait (About section)

```
images/about/portrait.jpg
```

Recommended: 4:5 portrait orientation, desaturated tones work best with the theme.

---

## 3. Project images

Each project needs **5 images**: 1 cover + 4 gallery.

### Project I
```
images/projects/project-01/cover.jpg   ← shown on the scroll panel
images/projects/project-01/01.jpg      ← large featured (16:10)
images/projects/project-01/02.jpg      ← small (4:5)
images/projects/project-01/03.jpg      ← small (4:5)
images/projects/project-01/04.jpg      ← large featured (16:10)
```

### Project II
```
images/projects/project-02/cover.jpg
images/projects/project-02/01.jpg
images/projects/project-02/02.jpg
images/projects/project-02/03.jpg
images/projects/project-02/04.jpg
```

### Project III
```
images/projects/project-03/cover.jpg
images/projects/project-03/01.jpg
images/projects/project-03/02.jpg
images/projects/project-03/03.jpg
images/projects/project-03/04.jpg
```

### Project IV
```
images/projects/project-04/cover.jpg
images/projects/project-04/01.jpg
images/projects/project-04/02.jpg
images/projects/project-04/03.jpg
images/projects/project-04/04.jpg
```

### Project V
```
images/projects/project-05/cover.jpg
images/projects/project-05/01.jpg
images/projects/project-05/02.jpg
images/projects/project-05/03.jpg
images/projects/project-05/04.jpg
```

### Project VI
```
images/projects/project-06/cover.jpg
images/projects/project-06/01.jpg
images/projects/project-06/02.jpg
images/projects/project-06/03.jpg
images/projects/project-06/04.jpg
```

---

## Image size recommendations

- **Covers & gallery**: 2000px on the long edge, JPG, ~80% quality
- **Portrait**: 1200×1500 (4:5)
- **Hero background**: 2400×1600, darker/moodier works best

---

## Adding, removing, or renaming projects

Everything keys off the `<article class="project">` blocks in `index.html`.

**To add a project (VII, VIII, …):**
1. Copy one of the existing `<article class="project">` blocks.
2. Update `data-project="07"`, `data-title`, `data-year`, `data-tag`.
3. Change the `<span class="project__num">VII</span>`.
4. Create `images/projects/project-07/` with `cover.jpg`, `01.jpg`…`04.jpg`.

The side rail (Roman numerals) and the modal gallery populate automatically.

**To change a title or tag**, just edit the `data-title` / `data-tag` / `data-year` attributes and the visible `<h2>` / `<p>` text.
