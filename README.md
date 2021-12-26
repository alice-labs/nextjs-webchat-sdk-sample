### Alice Webchat SDK integration with NextJs

Please follow the steps below:

- add a `_document.tsx` if you dont have one in `pages` folder
- create a `static` folder in root and create a file name called `alice-webchat-sdk.js`
- paste all sdk codes inside that file
- add code below as script to load sdk js inside `_document.tsx` `Head` component
```
<script async type="text/javascript" src="/static/alice-webchat-sdk.js" />
```
- this should load your script

