// Filters the feature list as you type. Runs only in your browser; nothing is sent anywhere.
(function () {
  var input = document.getElementById("q");
  var list = document.getElementById("results");
  if (!input || !list || !window.DOCMAP_FEATURES) return;
  var here = location.pathname.split("/").pop() || "index.html";

  function words(s) { return s.toLowerCase().split(/\s+/).filter(Boolean); }

  function show() {
    var q = words(input.value);
    list.textContent = "";
    if (!q.length) return;
    var hits = window.DOCMAP_FEATURES.map(function (f) {
      var title = f[0].toLowerCase(), all = (f[0] + " " + f[2] + " " + f[3]).toLowerCase();
      var score = 0;
      for (var i = 0; i < q.length; i++) {
        if (all.indexOf(q[i]) < 0) return null;
        score += title.indexOf(q[i]) >= 0 ? 2 : 1;
      }
      return { f: f, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 12);

    if (!hits.length) {
      var li = document.createElement("li");
      li.className = "none";
      li.textContent = "Nothing found. Try another word, such as “compare”, “plan” or “agent”.";
      list.appendChild(li);
      return;
    }
    hits.forEach(function (h) {
      var f = h.f, page = f[1].split("#")[0];
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = page === here ? "#" + f[1].split("#")[1] : f[1];
      var t = document.createElement("span"); t.className = "r-title"; t.textContent = f[0];
      var s = document.createElement("span"); s.className = "r-sec";
      s.textContent = " · " + window.DOCMAP_SECTIONS[page];
      var d = document.createElement("span"); d.className = "r-line"; d.textContent = f[2];
      a.appendChild(t); a.appendChild(s); a.appendChild(d);
      li.appendChild(a); list.appendChild(li);
    });
  }
  input.addEventListener("input", show);
  show();
})();
