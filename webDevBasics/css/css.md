# Basics of CSS Selectors and the Box Model

## Objective
By the end of this lesson, students will understand the basics of CSS selectors and the CSS box model, including their components and how to use them effectively for layout and styling.

## Lecture Outline (30 minutes)

### 1. Introduction to CSS Selectors (15 minutes)

#### What are CSS Selectors?
- CSS selectors are patterns used to select the elements you want to style.

#### Types of Selectors
- **Universal Selector (`*`)**
  - Selects all elements.
- **Type Selector (`element`)**
  - Selects all elements of a given type (e.g., `p`, `div`).
- **Class Selector (`.classname`)**
  - Selects all elements with a specific class.
- **ID Selector (`#idname`)**
  - Selects the element with a specific ID.
- **Attribute Selector (`[attribute=value]`)**
  - Selects elements with a specific attribute value.

#### Example Selectors
- `* { color: red; }`: Selects all elements and sets their text color to red.
- `p { font-size: 16px; }`: Selects all `<p>` elements and sets their font size.
- `.container { width: 100%; }`: Selects all elements with the class "container".
- `#header { background-color: blue; }`: Selects the element with the ID "header".

#### Native CSS Nesting
CSS nesting is a new feature that allows you to write CSS in a more structured and readable way, similar to how you would nest rules in pre-processors like SCSS or LESS. With native CSS nesting, you can nest selectors within each other, making it easier to manage and maintain styles, especially for complex components.

#### How to Use CSS Nesting
To use CSS nesting, you simply place the nested rules inside a parent rule, using the & symbol to represent the parent selector.


### 2. Introduction to the CSS Box Model 

#### What is the CSS Box Model?
- The CSS box model is a fundamental concept that determines how elements are sized and spaced in web design.
- It is crucial for understanding layout and design.

#### Components of the CSS Box Model

##### Content
- The actual content inside the box (text, images, etc.)

##### Padding
- Space between the content and the border.
- How to set padding using CSS:
  - `padding`: Shorthand for setting all four sides.
  - `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Individual sides.

##### Border
- Surrounds the padding and content.
- How to set borders using CSS:
  - `border`: Shorthand for setting width, style, and color.
  - `border-width`, `border-style`, `border-color`: Individual properties.

##### Margin
- Space outside the border.
- How to set margins using CSS:
  - `margin`: Shorthand for setting all four sides.
  - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Individual sides.

#### Box Sizing
- The `box-sizing` property:
  - `content-box`: Default. Padding and border are added to the width and height.
  - `border-box`: Padding and border are included in the width and height.
