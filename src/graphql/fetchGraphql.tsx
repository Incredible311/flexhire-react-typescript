async function fetchData(path: string) {
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'FLEXHIRE-API-KEY': '2a3ashhf4o6dos4w'
        }
    });
    return response;
}

export async function fetchProfile() {

    const response = await fetchData('freelancers/6278');
    // Get the response as JSON
    return await response.json();
}

export async function fetchJobs() {

    const response = await fetchData('contracts');

    // Get the response as JSON
    return await response.json();
}

export async function fetchSuggestQuestions() {

    const response = await fetchData('questions/suggested');

    // Get the response as JSON
    return await response.json();
}

export async function fetchChatContracts() {

    const response = await fetchData('chat_contacts');

    // Get the response as JSON
    return await response.json();
}

