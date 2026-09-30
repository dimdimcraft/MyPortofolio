# Rules

# PROJECT RULES — AJI PERSONAL PORTFOLIO

## 1. PROJECT PURPOSE

Build a personal portfolio website for Aji, a Visual & Digital Designer with experience across:

- Graphic / Visual Design
- 3D Event Visualization
- Web Development

The website itself must also demonstrate strong frontend development ability.

This is NOT a generic resume website and NOT a generic developer portfolio template.

The website should communicate:

"Visual & Digital Designer working across design, 3D visualization, and web."

The primary goal is to showcase professional work, creative thinking, technical ability, and project experience in a visually strong and professional way.

---

## 2. DESIGN DIRECTION

The visual direction must be:

- Minimal
- Editorial
- Creative-tech
- Modern
- Professional
- Image-focused
- Clean
- Spacious
- Strong typography
- Strong visual hierarchy
- Subtle interaction and animation

Avoid:

- Generic corporate layouts
- Generic SaaS landing page appearance
- Overly colorful UI
- Excessive gradients
- Excessive glassmorphism
- Excessive rounded cards
- Template-like designs
- Unnecessary decorative elements
- Excessive animations
- "AI-generated website" visual clichés

The website should feel like a designer's portfolio, not a software dashboard.

Use whitespace intentionally.

Large typography and visual composition should be important parts of the design.

---

## 3. GENERAL LAYOUT

The main homepage should follow this structure:

1. Navbar
2. Hero
3. Selected Works
4. About
5. Experience
6. Skills / Tools
7. Contact CTA
8. Footer

Project details should use separate project pages/routes.

Example structure:

/
 /work
 /work/[project-slug]
 /about
 /contact

Do not put every piece of information into the homepage.

Keep the homepage focused on introducing Aji and directing visitors toward selected work.

---

## 4. NAVBAR

Keep the navbar minimal.

Left:
AJI

Right:
- Work
- About
- Experience
- Contact

Requirements:

- Sticky or intelligently persistent navigation
- Clean typography
- No oversized navigation
- No unnecessary dropdown menus
- Mobile navigation must be responsive
- Navigation should remain easy to understand

---

## 5. HERO SECTION

The hero must immediately communicate who Aji is and what he does.

Primary heading:

"VISUAL & DIGITAL DESIGNER"

Supporting statement should communicate experience across:

- Visual design
- 3D visualization
- Web

Example direction:

"I create visual experiences across design, 3D visualization, and web."

Do not make the hero sound like a generic developer introduction.

The hero should include:

- Strong headline
- Short supporting description
- Primary CTA: "View My Work"
- Visual composition showing selected design / 3D / web work

The visual should feel like a curated creative collage rather than a generic stock image.

---

## 6. SELECTED WORKS

This is one of the most important sections of the website.

Heading:

"Selected Works"

Supporting text should briefly explain that the projects cover visual design, 3D visualization, and web.

Provide categories/filters:

- All
- Design
- 3D
- Web

The project layout should NOT look like a standard equal-sized card grid.

Prefer:

- Editorial grid
- Masonry-inspired composition
- Variable image sizes
- Strong visual hierarchy
- Intentional asymmetry where appropriate

Each project card should contain:

- Project image
- Project title
- Category
- Year
- Optional short descriptor
- Clear interaction / "View Project"

Hover interactions should be subtle:

- Slight image zoom
- Text movement
- Arrow/icon transition
- Minimal opacity or transform effects

Avoid excessive hover effects.

---

## 7. PROJECT DETAIL PAGE

Every major portfolio project should have a dedicated case-study page.

Recommended structure:

1. Back to Work
2. Project title
3. Category
4. Hero image
5. Project information
6. Project overview
7. Aji's contribution
8. Process
9. Final visuals / gallery
10. Previous / Next project navigation

Project metadata can include:

- Client
- Role
- Tools
- Year

Example:

Client:
QUPRO Indonesia

Role:
Designer

Tools:
SketchUp / Enscape / Canva

Year:
2026

The case study should focus on the work and contribution rather than unnecessary long text.

Use large visuals.

Images should have enough space to be appreciated.

Do NOT invent project information that has not been provided.

Use placeholders when content is not yet available.

---

## 8. ABOUT SECTION

The About section should be concise and personal.

It should explain that Aji works across:

- Visual design
- 3D event visualization
- Web

Recommended layout:

Two-column composition:

Left:
About text

Right:
Personal / professional visual

Do not turn the About section into a long biography.

The tone should be professional but human.

Avoid overly corporate language.

---

## 9. EXPERIENCE SECTION

Use a clean timeline or editorial list.

Potential experience includes:

- QUPRO Indonesia
- Beewhite
- Startup Campus
- STT Terpadu Nurul Fikri

Only display verified information.

Each experience entry should have:

- Date
- Organization
- Role
- Short description

Keep descriptions concise.

Do not turn this section into a traditional CV page.

---

## 10. SKILLS / TOOLS

Do NOT use percentage/progress bars.

Never display things like:

"Canva — 95%"
"SketchUp — 90%"

Instead group skills by category.

DESIGN
- Canva
- Affinity
- Inkscape

3D
- SketchUp
- Enscape

WEB
- WordPress
- Elementor
- HTML
- CSS
- PHP
- React

TOOLS
- Git
- GitHub
- VS Code

The exact list can evolve as the portfolio develops.

---

## 11. CONTACT SECTION

The contact section should be visually strong and simple.

Main message:

"HAVE A PROJECT IN MIND?"

Supporting line:

"Let's make something."

Primary CTA:

"Get in Touch"

Include:

- Email
- LinkedIn
- GitHub

The contact section should feel like a strong ending to the portfolio, not a standard form-heavy contact page.

---

## 12. FOOTER

Keep the footer minimal.

Include:

AJI

Visual & Digital Designer

Social links:
- LinkedIn
- GitHub
- Email

Copyright/year.

---

## 13. RESPONSIVE DESIGN

Responsive design is mandatory.

Design for:

- Desktop
- Tablet
- Mobile

Do NOT simply shrink the desktop layout.

Mobile should have its own intentional composition.

On mobile:

- Use a hamburger menu
- Reduce typography scale appropriately
- Stack editorial grids intelligently
- Preserve visual hierarchy
- Keep CTAs accessible
- Avoid horizontal overflow

Every section must be usable on small screens.

---

## 14. TYPOGRAPHY

Typography is a major part of the visual identity.

Use a modern clean sans-serif typeface.

Suggested direction:

- Inter
- Plus Jakarta Sans
- Manrope
- Similar modern sans-serif

Use clear hierarchy:

- Large display heading
- Strong section heading
- Readable body text
- Small metadata/captions

Do not use too many font families.

Prefer one primary font family with different weights.

---

## 15. COLOR SYSTEM

Start with a restrained neutral palette.

Preferred direction:

- White / off-white background
- Black / near-black typography
- Neutral gray
- Subtle secondary tones

Do not introduce strong accent colors unless they serve a clear design purpose.

The projects themselves should provide most of the visual color.

The interface should remain neutral so the portfolio work becomes the visual focus.

---

## 16. ANIMATION

Animation should be subtle and purposeful.

Use animation for:

- Page transitions
- Section entrance
- Image hover
- Button interaction
- Navigation
- Project transitions

Preferred animation characteristics:

- Fast
- Smooth
- Minimal
- Professional

Avoid:

- Excessive parallax
- Constant moving elements
- Large bouncing animations
- Distracting background animations
- Animation that reduces usability

If using Framer Motion, keep animations consistent throughout the site.

---

## 17. TECH STACK

Preferred stack:

- React
- Vite
- Tailwind CSS
- Framer Motion (optional)
- Git
- GitHub
- Vercel for deployment

The codebase should be component-based and maintainable.

Avoid putting the entire website into one component.

Use reusable components for:

- Navbar
- Buttons
- Project Cards
- Section Headers
- Project Metadata
- Footer
- Gallery
- Timeline items

---

## 18. CODE QUALITY

Write clean and maintainable code.

Requirements:

- Reusable components
- Clear naming
- Logical folder structure
- Avoid unnecessary duplication
- Avoid giant components
- Keep data separate from presentation when practical
- Use semantic HTML
- Keep styling consistent
- Do not introduce unnecessary dependencies

Do not install a library just to solve a simple problem.

---

## 19. CONTENT RULE

Never invent portfolio facts.

If information is missing:

- Use a clear placeholder
- Ask for the information when necessary
- Do not fabricate clients, project results, responsibilities, dates, statistics, or achievements

The portfolio should accurately represent Aji's real experience.

---

## 20. IMAGE RULE

Portfolio images are extremely important.

Prioritize:

- Large images
- High-quality visuals
- Proper aspect ratios
- Consistent image treatment
- Lazy loading where appropriate
- Responsive image sizing

Do not distort images.

Do not crop important project details unnecessarily.

Use image placeholders until final portfolio assets are available.

---

## 21. ACCESSIBILITY

The website must remain accessible.

Use:

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Accessible buttons and links

Animations should respect reduced-motion preferences where possible.

---

## 22. PERFORMANCE

The website should be visually rich without becoming unnecessarily heavy.

Prioritize:

- Optimized images
- Lazy loading
- Efficient components
- Minimal dependencies
- Avoid unnecessary large libraries
- Avoid autoplaying heavy videos

The portfolio should load quickly.

---

## 23. SEO

Use basic SEO best practices.

Include:

- Meaningful page titles
- Meta descriptions
- Semantic HTML
- Descriptive URLs
- Proper heading hierarchy
- Image alt text
- Open Graph metadata where appropriate

Example project URL:

/work/sabana-fun-run-2026

Avoid meaningless URLs.

---

## 24. DESIGN PRINCIPLE

The website should always prioritize:

CONTENT → VISUALS → HIERARCHY → INTERACTION

Do not add visual elements simply because they look impressive.

Every design decision should support:

1. Understanding who Aji is
2. Showing the quality of his work
3. Showing his range across design, 3D, and web
4. Making the portfolio easy to navigate
5. Making the website itself demonstrate frontend skill

---

## 25. IMPORTANT DEVELOPMENT RULE

Do not immediately generate the entire website blindly.

Before implementing a major section:

1. Understand the intended layout
2. Follow the established wireframe
3. Build the section
4. Check responsiveness
5. Check visual consistency
6. Then continue to the next section

Do not redesign the overall visual direction without explicit instruction.

The established design system and wireframe should be treated as the source of truth.

---

## 26. OVERALL DESIGN GOAL

The final result should feel like:

A modern independent designer's portfolio combining editorial design, creative technology, 3D visualization, and frontend development.

It should feel personal, intentional, premium, and visually memorable.

It should NOT feel like:

- A generic developer template
- A generic agency website
- A resume converted into HTML
- A SaaS landing page
- An AI-generated portfolio template
