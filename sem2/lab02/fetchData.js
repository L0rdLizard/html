async function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    throw new Error('Ошибка запроса: ' + response.status);
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

fetchData('https://jsonplaceholder.typiode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));