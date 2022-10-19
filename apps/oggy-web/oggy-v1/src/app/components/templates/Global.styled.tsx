import { createGlobalStyle } from 'styled-components';
import media from 'app/hooks/styledMediaQuery.hook';

const GlobalStyles = createGlobalStyle`
//* Variables 
:root {
  //* Font Weight
  --font-EL: 200;
  --font-L: 400;
  --font-N: 500;
  --font-B: 600;
  --font-EB: 800;

  //* Font Types
  --font-size-H1: 3.052rem;
  --font-size-H2: 2.441rem;
  --font-size-H3: 1.953rem;
  --font-size-H4: 1.563rem;
  --font-size-H5: 1.25rem;
  --font-size-H6: 1rem;

  --font-size-sub-H1: 2.8rem;
  --font-size-sub-H2: 2.2rem;
  --font-size-sub-H3: 1.7rem;
  --font-size-sub-H4: 1.3rem;
  --font-size-sub-H5: 1rem;
  --font-size-sub-H6: 0.8rem;

  --font-size-D1: 11.642rem;
  --font-size-D2: 9.313rem;
  --font-size-D3: 7.451rem;
  --font-size-D4: 5.96rem;
  --font-size-D5: 4.768rem;
  --font-size-D6: 3.815rem;

  --font-size-S1: 3rem;
  --font-size-S2: 2rem;
  --font-size-S3: 1rem;
  --font-size-S4: 0.7rem;
  --font-size-S5: 1.25rem;
  --font-size-S6: 1rem;

  --font-size-lead: 4.8rem;
  --font-size-para: 4.8rem;

  //* Color Type For Text
  --primary-color: #ff9800;
  --secondary-color: #C21010;
  --white-color: white;
  --black-color: #141716;
  --light-grey-color: rgb(228, 228, 228);
  --grey-color: #393e46;


  //* Shadow Types

  //* Page Widths
  //* Search Page
  ${media.greaterThan('xss')`
    --search-page-width: calc(90 * var(--vw));
  `}
  ${media.greaterThan('xl')`
    --search-page-width: calc(80 * var(--vw));
  `}
  ${media.greaterThan('xxl')`
    --search-page-width: calc(60 * var(--vw));
  `}

  //* Restaurant Page
  ${media.greaterThan('xss')`
    --restaurant-page-width: calc(90 * var(--vw));
  `}
  ${media.greaterThan('xl')`
    --restaurant-page-width: calc(80 * var(--vw));
  `}
  ${media.greaterThan('xxl')`
    --restaurant-page-width: calc(70 * var(--vw));
  `}

}

//* Designs
.shine {

      will-change: background-position-x;
      /* --loading-grey: --background-color; */
      background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0) 60%
        )
        var(--background-color);
      background-size: 200% 100%;
      background-position-x: 180%;
      animation: 1.2s loading ease-in-out infinite;

      @keyframes loading {
        to {
          background-position-x: -20%;
        }
      }
}

//* Animations
.blurApply {
  transition: all 0.2s ease-in-out;
  filter: blur(6px);
}

/**
  * * Style Reset
 */

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html,
body,
#root {
  max-width: 100vw;
  min-height: 100%;
  box-sizing: border-box;
}

body {
  overflow: auto;
  overflow-x: clip;
}

.overflowHideY{
  overflow-y: hidden !important;
  ${media.greaterThan('md')`padding-right: 15px;`}
}

.willChange {
  will-change: transform, opacity;
}

html {
  font-family: Raleway;
  -webkit-font-feature-settings: "lnum";
  -moz-font-feature-settings: "lnum";
  font-feature-settings: "lnum";
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */

  font-size: 62.5%;

  ${media.greaterThan('xss')`
      font-size: 52%;
    `}
  ${media.greaterThan('xs')`
      font-size: 52%;
    `}
  ${media.greaterThan('sm')`
      font-size: 58%;
    `}
  ${media.greaterThan('md')`
      font-size: 62.5%;
   `}
  ${media.greaterThan('lg')`
      font-size: 62.5%;
   `}
  ${media.greaterThan('xl')`
      font-size: 62.5%;
   `}
  ${media.greaterThan('xxl')`
      font-size: 66%;
   `}
  ${media.greaterThan('xxxl')`
      font-size: 68%;
   `}
}

body {
  background-color: #ffffff;
  font-size: 1.6rem;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;

export default GlobalStyles;
