// discussions.js

// This file handles discussions for the collaboration tool.

// Example function to fetch discussions
export const fetchDiscussions = async () => {
    try {
        const response = await fetch('/api/discussions');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const discussions = await response.json();
        return discussions;
    } catch (error) {
        console.error('Error fetching discussions:', error);
    }
};

// Example function to create a new discussion
export const createDiscussion = async (discussionData) => {
    try {
        const response = await fetch('/api/discussions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discussionData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newDiscussion = await response.json();
        return newDiscussion;
    } catch (error) {
        console.error('Error creating discussion:', error);
    }
};
