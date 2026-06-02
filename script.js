roblox_card = document.getElementById("roblox_profile");

roblox_card.addEventListener("click", () => {
    window.open("https://www.roblox.com/users/1933051665/profile", "_blank");
});

gd_card = document.getElementById("gd")

gd_card.addEventListener("click", () => {
    navigator.clipboard.writeText("NotGamerboyXD")
    alert("Copied to clipboard! ")
});
