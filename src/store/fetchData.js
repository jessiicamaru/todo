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

async function editData(id, data) {
    fetch('http://localhost:3000/todoJob/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export { addData, deleteData, editData };
