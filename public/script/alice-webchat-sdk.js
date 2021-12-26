(function () {
  var div = document.createElement("div");
  div.id = "icWebChat";
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://webchat-stage.getalice.ai/index.js";
  var lel = document.body.getElementsByTagName("script");
  var el = lel[lel.length - 1];
  el.parentNode.insertBefore(script, el);
  el.parentNode.insertBefore(div, el);
  script.addEventListener("load", function () {
    ICWebChat.init({
      selector: "#icWebChat",
      platformId: "882",
      primaryId: "04a428963f8411ecb43f0242c0a82006",
      token: "3b4458c6016dfdc00a4744b13414ba9d11dea12195e483b8",
    });
  });
})();
