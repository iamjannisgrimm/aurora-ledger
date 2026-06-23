# Meow asset provenance

These assets were extracted from the public HTML/assets referenced by `https://www.meow.com` and copied into this local concept repo for internal preview use.

## Copied assets

- Hero globe implementation
  - Source: original `region-globe` hero component behavior identified in Meow's public homepage HTML and JS chunk (`/_next/static/chunks/6147-53bffb7ec58a17b7.js`).
  - Original context: animated hero globe rendered from a `div.region-globe` canvas component, not a standalone image file.
  - Local usage: rendered in `src/main.jsx` as `RegionGlobe` using the `cobe` globe library with Meow-like dark globe styling and public city marker coordinates.

- `company-logo-1.svg` through `company-logo-10.svg`
  - Source: inline SVGs extracted from the public `https://www.meow.com` homepage HTML.
  - Original context: credibility/customer/company logo stack.

- `selfmade-story.svg`
  - Source: `https://cdn.sanity.io/images/644s806z/updated-prod/c3016065d1b7d673b23216922ee1fd48c5c21f79-1920x1080.svg`
  - Original context: customer story artwork for SelfMade.

- `daniel-singer-story.svg`
  - Source: `https://cdn.sanity.io/images/644s806z/updated-prod/164c1c54757b884cdd010e2554b1a136d7ae277f-1920x1080.svg`
  - Original context: customer story artwork for Daniel Singer.

- `optimism-story.svg`
  - Source: `https://cdn.sanity.io/images/644s806z/updated-prod/3cb57c9b8737646e362347cb913555fd8745ac41-1920x1080.svg`
  - Original context: customer story artwork for Optimism.

- `eli-wachs.png`
  - Source: `https://www.meow.com/_next/image?url=%2Fimages%2Ftestimonials%2FEliWachs.png&w=3840&q=90`
  - Original context: testimonial portrait for Eli Wachs.

## Usage in this repo

- Customer story cards are rendered from `src/main.jsx` in `storiesSection`.
- Eli Wachs portrait is rendered in `quoteSection`.

Local/internal concept only.
