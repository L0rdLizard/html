async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка: ' + response.status);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        throw error;
    }
}

(async () => {
    try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/2');
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
})();
