# Vue-Printer

Vue-Printer is a simple vue component for partial printing on the browser

## Installation

**NPM**

Install the npm package, register the component

```
import Vue from 'vue'
import Printer from '@eyelly/vue-printer'

Vue.component('Printer',Printer)
```
**CDN**

Include the source file
```javascript
<script src="https://unpkg.com/@eyelly/vue-printer/dist"></script>
```
Register the component
```
Vue.component('Printer',Printer)
```

## Usage & Example

In single-file components
```javascript
<template>
  <div>
    <div ref="printContent"> this is content to print </div>
    <div> this is normal content </div>
    <Printer :content="content">
      <button>print</button>
    </Printer>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    computed: {
      content() {
        return {
          refs: this.$refs,
          refName: 'printContent'
        }
      }
    }
  }
</script>

<style>
</style>
```
In HTML
```html
<!doctype html>
<html>

  <head>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/@eyelly/vue-printer/dist"></script>
  </head>

  <body>
    <div id="app">
      <div ref='printContent'> this is content to print </div>
      <div> this is normal content </div>
      <Printer :content="content">
        <button>print</button>
      </Printer>
    </div>
    <script>
      Vue.component('Printer', Printer)
      new Vue({
        el: '#app',
        computed: {
          content() {
            return {
              refs: this.$refs,
              refName: 'printContent'
            }
          }
        }
      })
    </script>
  </body>

</html>
```
## API

| Property  | Description                          | Type                         | Default |
| :-------- | :----------------------------------- | :--------------------------- | :------ |
| content   | content to be printed                | {refs:object,refName:string} | -       |
| shotcut   | enable browser printing shortcut     | boolean                      | true    |
| newWindow | open a new window to print           | boolean                      | false   |
| title     | the title of the newly opened window | boolean                      | -       |

## License

[MIT]()
