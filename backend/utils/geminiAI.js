import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeTask = async (taskDescription, taskTitle, userQuery = null) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'text-bison-001' });

        let prompt;
        if (userQuery && (userQuery.includes('?') || userQuery.toLowerCase().includes('what') || userQuery.toLowerCase().includes('how') || userQuery.toLowerCase().includes('when') || userQuery.toLowerCase().includes('why') || userQuery.toLowerCase().includes('where'))) {
            // If userQuery looks like a question, answer it
            prompt = `
            You are a helpful AI assistant for task management. The user has a task with the following details:

            Task Title: ${taskTitle}
            Task Description: ${taskDescription}

            User Question: ${userQuery}

            Answer the user's question comprehensively. Use the task details as context, but if more information is needed, draw from general knowledge about the task topic to provide complete and helpful guidance. For example, if the task is "apply for passport" and the user asks for required documents, list the standard documents needed for passport application.

            Provide a clear, detailed, and actionable response.
            `;
        } else {
            // Default behavior: provide a summary
            prompt = `
            Analyze the following task and provide a detailed summary including steps to complete it:

            Task Title: ${taskTitle}
            Task Description: ${taskDescription}

            Provide a comprehensive explanation of the task, including any general steps, requirements, or tips based on common knowledge about such tasks. Use plain text, but you can include numbered steps if helpful.

            Make the response informative and helpful.
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
        const model = genAI.getGenerativeModel({ model: 'models/gemini-1.0-pro' });

        const tasksSummary = userTasks.map(task => `${task.title}: ${task.description}`).join('\n');

        const prompt = `
        Based on the following tasks, provide suggestions for better task management:

        Tasks:
        ${tasksSummary}

        Please provide:
        1. Prioritization suggestions.
        2. Time management tips.
        3. Any patterns or optimizations you notice.
        4. Give the response on the requirement of the user.

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
        const model = genAI.getGenerativeModel({ model: 'text-bison-001' });

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
        const model = genAI.getGenerativeModel({ model: 'text-bison-001' });

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
