document.getElementById('fetchTodo').addEventListener('click', function () {
    // Get the input value
    const todoId = document.getElementById('todoId').value;

    // Check if the input is not empty
    if (todoId.trim() !== '') {
        // Make an HTTP GET request to the JsonPlaceholder API
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => {
                // Check if the response is successful (status code 200)
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch ToDo');
                }
            })
            .then(todoData => {
                // Display the ToDo information
                const messageDiv = document.getElementById('message');
                messageDiv.innerHTML = `<p>ToDo ID: ${todoData.id}</p>
                                        <p>Title: ${todoData.title}</p>
                                        <p>Completed: ${todoData.completed ? 'Yes' : 'No'}</p>`;
            })
            .catch(error => {
                // Display an error message if the request fails
                const messageDiv = document.getElementById('message');
                messageDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    } else {
        // Display an error message if the input is empty
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = '<p>Please enter a ToDo ID.</p>';
    }
});
