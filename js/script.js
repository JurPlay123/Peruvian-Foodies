const checkbox = document.getElementById("change");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.style.setProperty("--changeTheme", "url(css-img/sun.png)");
      document.documentElement.style.setProperty("--bgColour", "#1a1a1a");
      document.documentElement.style.setProperty("--firstColour", "#FFF");
      document.documentElement.style.setProperty("--secondColour", "#FFF");
      document.documentElement.style.setProperty("--thirdColour", "rgba(74, 74, 74, 0.95)");
      document.documentElement.style.setProperty("--fifthColour", "rgba(74, 74, 74, 0.5)");
      document.documentElement.style.setProperty("--seventhColour", "rgba(74, 74, 74, 0.1)");
      document.documentElement.style.setProperty("--eighthColour", "#FFF");
      document.documentElement.style.setProperty("--ninthColour", "#FA845F");
    } else {
      document.documentElement.style.setProperty("--changeTheme","url(css-img/moon.png)");
      document.documentElement.style.setProperty("--bgColour", "#FFF");
      document.documentElement.style.setProperty("--firstColour", "#FFF");
      document.documentElement.style.setProperty("--secondColour", "#000");
      document.documentElement.style.setProperty("--thirdColour", "rgba(196, 119, 102, 0.95)");
      document.documentElement.style.setProperty("--fifthColour", "#FA845F");
      document.documentElement.style.setProperty("--seventhColour", "#fff8e8");
      document.documentElement.style.setProperty("--eighthColour", "#322B38");
      document.documentElement.style.setProperty("--ninthColour", "#6f00b2");
    }
  });