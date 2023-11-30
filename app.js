function fetchNBAStats() {
    // Replace 'YOUR_API_KEY' with your actual API key from https://www.api-sports.io/
    const apiKey = 'AIzaSyB7o4Dx3Ik6rnVuwaZWu880dDo6B9zgQTQ';
    const apiUrl = 'https://api.sportsdata.io/v3/nba/scores/json/Teams';

    fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey
        }
    })
    .then(response => {
        // Check if the response is successful (status code 200)
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch NBA stats');
        }
    })
    .then(statsData => {
        // Display NBA stats in the HTML container
        const statsContainer = document.getElementById('statsContainer');
        statsContainer.innerHTML = '<h2>NBA Teams</h2>';
        statsData.forEach(team => {
            statsContainer.innerHTML += `
                <div>
                    <strong>${team.FullName}</strong>
                    <p>Abbreviation: ${team.Key}</p>
                    <p>Conference: ${team.Conference}</p>
                    <p>Division: ${team.Division}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        // Display an error message if the request fails
        console.error('Error:', error.message);
    });
}
