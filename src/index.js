import "./styles.css";

document.getElementById("link").addEventListener("click", () => {
  console.log("z");
  if (/Android/i.test(navigator.userAgent)) {
    console.log("a");
    // If the user is using an Android device.
    setTimeout(function () {
      window.location = "https://www.youtube.com/watch?v=YGn1UlQ3osE";
    }, 25);
    window.location = "vnd.youtube://www.youtube.com/watch?v=YGn1UlQ3osE";
  } 
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    
}
else {
    setTimeout(function () {
        window.location = "https://www.youtube.com/watch?v=YGn1UlQ3osE";
      }, 25);
      window.location = "youtube://www.youtube.com/watch?v=YGn1UlQ3osE";
  }

  console.log("c");
});
