
## Resize images

https://imagemagick.org/script/mogrify.php

```shell
cd photos
magick mogrify -strip -resize 1024x1024 -quality 60 -path ../img *.jpg && du -sh ../img
```
