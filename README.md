# Vue.js notifications

Dialogs components for Vue3 using TailwindCSS. <br>
Easy to use and customize. <br>
3 types of dialogs are availaible:
- Modals
- Headups
- Toasts

## Installation

## Usage

## Component props
### Modals
| Name                  | Type          | Default            | Description                                                              |
| --------------------- | ------------- | ------------------ | ------------------------------------------------------------------------ |
| title *(optional)*    | String        | `'' `              | Text on the top section of Modal                                         |
| content *(optional)*  | String        | `''`               | Text in the main section (middle) of Modal, can also use slot content    |
| width *(optional)*    | String        | `'40%'`            | Css width attribute of Modal (100px, 50%, ...)                           |
| height *(optional)*   | String        | `'auto'`           | Css height attribute of Modal (100px, 50%, ...)                          |
| buttons *(optional)*        | Array          | `[]`        | List action buttons in the bottom section of Moda                        |
| has-backprop *(optional)*   | Boolean        | `true`      | Modal has backprop                                                       |
| backprop-close *(optional)* | Boolean        | `false`     | Close when click on Modal backprop                                       |
| draggable *(optional)*      | Boolean        | `true`      | Modal can be dragged                                                     |
| resizable *(optional)*      | Boolean        | `false`     | Modal can be resized                                                     |

### Toasts
| Name                    | Type          | Default            | Description                                                              |
| ----------------------- | ------------- | ------------------ | ------------------------------------------------------------------------ |
| position *(required)*   | String        | `''`               | Position toast display. Must be in `top-left`, `top-right`, `bottom-left`, `bottom-right`    |
| duration *(optional)*   | String        | `3000`            | Headup display time before disapear                                      |
| type *(optional)*       | String        | `default`          | Toast different CSS styles. Must be in `default`, `info`, `success`, `warning`, `error`  |
| width *(optional)*      | String        | `300px`            | Toast width in pixed                                                     |
| height *(optional)*     | String        | `auto`             | Toast width in pixed                                                     |

### Headup
| Name                    | Type          | Default            | Description                                                              |
| ----------------------- | ------------- | ------------------ | ------------------------------------------------------------------------ |
| duration *(optional)*   | String        | `3000`            | Headup display time before disapear                                      |
| type *(optional)*       | String        | `default`          | Toast different CSS styles. Must be in `default`, `info`, `success`, `warning`, `error`  |
| height *(optional)*     | String        | `auto`             | Toast width in pixed                                                     |