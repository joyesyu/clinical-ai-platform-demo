**Add your own guidelines here**

<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
## 1) Typography

### Font
- Use the project’s current font (keep consistent across the app).

### Font sizes (px)
- **Minimum font size: 12px (never below 12)**
- Prefer **14px+** whenever possible
- Most commonly used sizes: **16 / 18 / 24**

### Recommended usage
- **Page / major titles:** 24
- **Section titles:** 18
- **Body / default text:** 16
- **Secondary labels / helper text:** 14
- **Captions / meta:** 12

## 2) Text Colors

- **Title:** `#000000`
- **Primary text:** `#161616`
- **Secondary text:** `#525252`
- **Tertiary text:** `#6F6F6F`
- **Disabled text:** `#161616` at **25% opacity** (rgba(22, 22, 22, 0.25))

## 4) Corner Radius

- **Card radius:** `8`
- **Buttons / inputs radius:** `4`
- **Chips / badges radius:** `4`

## 5) Spacing System (4pt grid only)

### Rule
- **All spacing values must be multiples of 4**
- **No odd numbers**
- **No decimals**

### Allowed spacing values (examples)
- 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64

### Card spacing (required)
- **Card internal padding:** `24` (all sides)
- Recommended **card-to-card gap:** `16` (use 24 only when you intentionally want a more spacious layout)


For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->