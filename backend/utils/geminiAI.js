import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeTask = async (taskDescription, taskTitle, userQuery = null) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        let prompt;
        if (userQuery && (userQuery.includes('?') || userQuery.toLowerCase().includes('what') || userQuery.toLowerCase().includes('how') || userQuery.toLowerCase().includes('when') || userQuery.toLowerCase().includes('why') || userQuery.toLowerCase().includes('where'))) {
            // If userQuery looks like a question, answer it
            prompt = `
            Based on the following task details, answer the user's question directly and concisely:

            Task Title: ${taskTitle}
            Task Description: ${taskDescription}

            User Question: ${userQuery}

            Provide a clear, direct answer based on the task information. If the question cannot be answered from the task details, provide a helpful response about the task.
            `;
        } else {
            // Default behavior: provide a summary
            prompt = `
            Analyze the following task and provide a concise, plain text summary without bullet points or section headers:

            Task Title: ${taskTitle}
            Task Description: ${taskDescription}

            Provide a clear and direct explanation of the task and how to complete it, avoiding lists or formatting.

            Keep the response brief and focused on the essential information.
            `;
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error analyzing task with Gemini AI:', error);
        throw new Error('Failed to analyze task');
    }
};

export const generateTaskSuggestions = async (userTasks) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const tasksSummary = userTasks.map(task => `${task.title}: ${task.description}`).join('\n');

        const prompt = `
        Based on the following tasks, provide suggestions for better task management:

        Tasks:
        ${tasksSummary}

        Please provide:
        1. Prioritization suggestions.
        2. Time management tips.
        3. Any patterns or optimizations you notice.
        4. Some price.

        Keep the response concise.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error generating task suggestions with Gemini AI:', error);
        throw new Error('Failed to generate suggestions');
    }
};

export const generalChat = async (userQuery) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `
        You are a helpful AI assistant. Answer the user's query directly and concisely. If the query is not related to tasks, provide a general helpful response.

        User Query: ${userQuery}

        Provide a clear, direct answer.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error in general chat with Gemini AI:', error);
        throw new Error('Failed to process general query');
    }
};

export const generalChatWithHistory = async (userQuery, history = []) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Build conversation history string
        let historyText = '';
        if (history && history.length > 0) {
            historyText = history.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n') + '\n';
        }

        const prompt = `
        You are a helpful AI assistant. Use the conversation history to provide context for your response. Answer the user's query directly and concisely. If the query is not related to tasks, provide a general helpful response.

        Conversation History:
        ${historyText}

        Current User Query: ${userQuery}

        Provide a clear, direct answer based on the conversation context.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error in general chat with history:', error);
        throw new Error('Failed to process general query with history');
    }
};
