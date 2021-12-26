### Alice Webchat SDK integration with NextJs

Please follow the steps below:

- add a `_document.tsx` if you dont have one in `pages` folder
- go to `public` folder in root and create a file name called `alice-webchat-sdk.js` inside `scripts` folder
- paste all sdk codes inside that file
- add code as given inside `_document.tsx` `Head` component
```
<script async type="text/javascript" src="/script/alice-webchat-sdk.js" />
```
- this should load your script

