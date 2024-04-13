document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const birthMonth = document.getElementById('birthMonth').value.trim();
    const favFood = document.getElementById('favFood').value.trim();
    
    const hackerName = generateHackerName(username, birthMonth, favFood);
    
    document.getElementById('result').innerHTML = `<strong>Your Hacker Name:</strong> ${hackerName}`;
});

function generateHackerName(username, birthMonth, favFood) {
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const monthAbbrev = monthAbbreviations[birthMonth - 1] || 'N/A';
    
    return `${favFood.slice(0, 3)}_${username.slice(0, 3)}_${monthAbbrev}${randomNum}`;
}
