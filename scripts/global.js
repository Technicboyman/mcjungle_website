
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading favicon...");
    if (!document.querySelector('link[rel="icon"]')) {
    let link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = 'https://www.mcjungle.xyz/images/output.ico';
    document.head.appendChild(link);
  }
});
