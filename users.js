document.addEventListener('DOMContentLoaded', function () {
    // Make an HTTP GET request to the JsonPlaceholder API for users 3-10
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // Check if the response is successful (status code 200)
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch users');
            }
        })
        .then(usersData => {
            // Display the user data in the HTML table
            const usersTableBody = document.getElementById('usersTableBody');
            usersData.slice(2, 10).forEach(user => {
                usersTableBody.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            // Display an error message if the request fails
            console.error('Error:', error.message);
        });
});
