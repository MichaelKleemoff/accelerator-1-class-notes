# CSS Display Property Reference

## `display: block;`
- **Characteristics:**
  - Takes up the full width available.
  - Starts on a new line.
- **Common Examples:** `<div>`, `<p>`, `<h1>`-`<h6>`, `<li>`.

## `display: inline;`
- **Characteristics:**
  - Takes up only as much width as needed.
  - Does not start on a new line; elements sit next to each other.
- **Common Examples:** `<span>`, `<a>`, `<img>`.

## `display: inline-block;`
- **Characteristics:**
  - Sits next to other elements (like `inline`).
  - Respects width and height properties (like `block`).
- **Common Examples:** `<button>`, custom-styled inline elements.

## `display: flex;`
- **Characteristics:**
  - Provides a flexible layout structure.
  - Allows alignment, distribution, and ordering of items.
- **Commonly Used Properties:**
  - `flex-direction`: Defines the direction of the flex items (`row`, `column`).
  - `justify-content`: Aligns items along the main axis (`flex-start`, `center`, `space-between`).
  - `align-items`: Aligns items along the cross axis (`flex-start`, `center`, `stretch`).

## `display: grid;`
- **Characteristics:**
  - Provides a grid-based layout system.
  - Allows precise placement of items in rows and columns.
- **Commonly Used Properties:**
  - `grid-template-columns`: Defines the columns of the grid (`1fr`, `auto`, `repeat(3, 1fr)`).
  - `grid-template-rows`: Defines the rows of the grid.
  - `gap`: Sets the space between grid items (`gap: 10px`).
