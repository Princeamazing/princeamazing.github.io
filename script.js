const notification = document.getElementById("notification");

roblox_card = document.getElementById("roblox_profile");

roblox_card.addEventListener("click", () => {
    window.open("https://www.roblox.com/users/1933051665/profile", "_blank");
});

gd_card = document.getElementById("gd")

gd_card.addEventListener("click", () => {
    notification.textContent = "Copied to clipboard!";

    setTimeout(() => {notification.textContent = "";}, 10*1000);
});
