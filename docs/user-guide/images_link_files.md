---
title: Images, Link, Files
description: 'Images and Link'
category: Doc tutorial
position: 10
# version: 1.5
fullscreen: false
menuTitle: Images, Link, Files
---

## Include an image
::image-lkb{target='logoHouches.jpg' size=20 center} 


```md
::image-lkb{target='logoHouches.jpg' size=20 center} 

```

- ```target``` = path to image (inside /public/images/)
- ```size``` = size in %
- ```center``` add it if you want to center the image

## Include a Link

[Link Name](/Members/marianna)

```md
[Link Name](/Members/marianna)
```
The path is relative to the /content/ folder


<!-- ## Include a file to download

<pdf-link src="PDFvide.pdf" label="My label" > </pdf-link>


```md
<pdf-link src="PDFvide.pdf" label="My label" > </pdf-link>
```
Put the file in the ```/static/pdf/``` \
The path is relative to the ```/static/pdf/``` folder (even if its a .doc, .xls .whatever) -->


