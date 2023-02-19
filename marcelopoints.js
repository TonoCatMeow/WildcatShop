function countClicks() {
    var clicks = parseInt(localStorage.getItem('clicks')) || 0;
    clicks++;
    localStorage.setItem('clicks', clicks);
    document.getElementById('clicks').innerHTML = clicks;

    // navigate to another page with the number of clicks as a parameter
    window.location.href = "otherpage.html?clicks=" + clicks;
}

