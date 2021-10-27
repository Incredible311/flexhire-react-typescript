
export async function fetchProfile() {

    const response = await fetch('mockdata/freelancer.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    // Get the response as JSON
    return await response.json();
}

export async function fetchJobs() {

    const response = await fetch('mockdata/contracts.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    // Get the response as JSON
    return await response.json();
}

export async function fetchSuggestQuestions() {

    const response = await fetch('mockdata/suggestedQuestions.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    // Get the response as JSON
    return await response.json();
}

export async function fetchChatContracts() {

    const response = await fetch('mockdata/chatContracts.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    // Get the response as JSON
    return await response.json();
}

