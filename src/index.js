import "./styles.css";

document.getElementById("link").addEventListener("click", () => {
  if( /Android/i.test(navigator.userAgent ) ) {
    // If the user is using an Android device.
    setTimeout(function () { window.location = "market://details?id=com.google.android.youtube"; }, 25);
    window.location = "vnd.youtube://www.youtube.com/watch?v=YGn1UlQ3osE";
}
});
