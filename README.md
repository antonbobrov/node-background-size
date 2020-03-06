# Imitate CSS background-size: cover|cover property in JavaScript.



## How to start
```sh
npm install node-background-size
```



## Example
```html
<div style="overflow: hidden">
    <img src="image.jpg">
</div>
```
```js
import { apply } from 'node-background-size';
apply({
    media: document.querySelector("img"),
    rule: 'cover',
    scale: 1
});
```


<br>
<hr>
<br>


## Methods

<br>
<hr>
<br>


### apply

Option | Type | Default | Optional | Description
------ | ---- | ------- | -------- | -----------
media | HTMLImageElement \| HTMLVideoElement |  | + | Media element.
parent | HTMLElement |  | + | Relative element to which the sizes will be calculated. If undefined, the direct parent will be taken.
rule | 'cover' \| 'contain' | 'cover' | + | Available values: cover, contain.
scale | number | 1 | + | Scaling.

<br>
<hr>
<br>

### get

Option | Type | Default | Optional | Description
------ | ---- | ------- | -------- | -----------
media | HTMLImageElement \| HTMLVideoElement |  | + | Media element.
rule | 'cover' \| 'contain' | 'cover' | + | Available values: cover, contain.
scale | number | 1 | + | Scaling.
width | number | 500 | + | Container width.
height | number | 500 | + | Container height.

#### Returns

Option | Type | Description
------ | ---- | -----------
media | HTMLImageElement \| HTMLVideoElement | The media element itself.
width | number | The calculated width.
height | number | The calculated height.
mediaWidth | number | The initial width of the media element.
mediaHeight | number | The initial height of the media element.
x | number | The x-axis coordinate of the top left corner.
y | number | The y-axis coordinate of the top left corner.
scale | number | Scaling.