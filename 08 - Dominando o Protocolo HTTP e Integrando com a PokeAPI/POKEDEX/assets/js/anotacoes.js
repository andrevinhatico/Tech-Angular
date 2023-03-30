fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonBody) {
        console.log(jsonBody);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Requisição Concluída!');
    });

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))