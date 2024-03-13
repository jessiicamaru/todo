async function addData(data) {
    fetch('http://localhost:3000/todoJob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

async function deleteData(id) {
    fetch('http://localhost:3000/todoJob/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

async function patchData(id, data) {
    fetch('http://localhost:3000/todoJob/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

async function putData(id, data) {
    fetch('http://localhost:3000/todoJob/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export { addData, deleteData, patchData, putData };
