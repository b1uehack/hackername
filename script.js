document.addEventListener('DOMContentLoaded', function() {
    // Check if sessionStorage is supported
    if (typeof(Storage) !== 'undefined') {
        // Retrieve and populate input fields if there's stored data
        const storedUsername = sessionStorage.getItem('username');
        const storedBirthMonth = sessionStorage.getItem('birthMonth');
        const storedFavFood = sessionStorage.getItem('favFood');

        if (storedUsername && storedBirthMonth && storedFavFood) {
            document.getElementById('username').value = storedUsername;
            document.getElementById('birthMonth').value = storedBirthMonth;
            document.getElementById('favFood').value = storedFavFood;
        }

        // Add event listener for form submission
        document.getElementById('nameForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const hackerName = generateHackerName();

            document.getElementById('result').innerHTML = `<strong>Your Hacker Name:</strong> ${hackerName}`;

            // Reset input fields
            document.getElementById('username').value = '';
            document.getElementById('birthMonth').value = '';
            document.getElementById('favFood').value = '';
        });
    } else {
        console.log('SessionStorage is not supported. Input data will not be persisted.');
    }
});

function generateHackerName() {
    const adjectives = ['Silent', 'Shadow', 'Phantom', 'Cryptic', 'Stealthy', 'Ninja', 'Ghost', 'Eclipse', 'Dark', 'Mystery', 'Invisible', 'Cunning', 'Covert', 'Elusive', 'Sneaky'];
    const nouns = ['Spectre', 'Phantom', 'Shadow', 'Cipher', 'Enigma', 'Vortex', 'Blade', 'Matrix', 'Code', 'Byte', 'Stealth', 'Hacker', 'Ghost', 'Ninja', 'Crypt'];

    const randomIndex = Math.floor(Math.random() * 2); // 0 for adjective, 1 for noun
    let word = '';

    if (randomIndex === 0) {
        const randomAdjIndex = Math.floor(Math.random() * adjectives.length);
        word = adjectives[randomAdjIndex];
    } else {
        const randomNounIndex = Math.floor(Math.random() * nouns.length);
        word = nouns[randomNounIndex];
    }

    const randomNumber = Math.floor(Math.random() * 90) + 10; // Generate a random 2-digit number (between 10 and 99)

    return `${word}_${randomNumber}`;
}

