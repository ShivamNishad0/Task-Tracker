# 📝 Task-Tracker

> A modern, full-stack task management application built with Node.js and React, featuring AI-powered chatbot assistance

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

## ✨ Features

### Core Functionality
- 📋 **Task Management**: Create, read, update, and delete tasks with priority levels
- 👤 **User Authentication**: Secure login and signup with JWT tokens
- 🎯 **Clean UI**: Intuitive and responsive user interface
- 📱 **Mobile-Friendly**: Fully responsive design for all devices
- 🔒 **Secure API**: Protected backend with authentication middleware

### AI-Powered Features
- 🤖 **AI Chatbot**: Get help with tasks using Google Gemini AI
- 🔍 **Task Query**: Search and analyze tasks with natural language
- 📝 **Guidance Generation**: Receive step-by-step task completion guidance
- 💡 **Smart Suggestions**: Get recommendations for similar tasks
- 💬 **Interactive Chat**: Conversational interface with task details

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## ⚙️ Installation & Setup

### 🔧 Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Create environment variables**
   
   Create a `.env` file in the `backend` folder:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   PORT=4000
   ```
   
   > 💡 **Tip:** You can get a free MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Add start script**
   
   Ensure your `package.json` includes this script under `"scripts"`:
   ```json
   {
     "scripts": {
       "start": "nodemon server.js"
     }
   }
   ```

5. **Start the backend server**
   ```bash
   npm start
   ```
   
   ✅ **Backend is now running!** The server will start on the port specified in your `.env` file.

### ⚛️ Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   ✅ **Frontend is now running!** Open your browser and go to `http://localhost:5173`

## 🚀 Deployment

### Frontend Deployment (Netlify)

1. **Connect to Netlify**
   - Push your code to GitHub
   - Connect your repository to [Netlify](https://netlify.com)
   - Set build settings:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

2. **Environment Variables**
   - Add `VITE_API_BASE_URL` with your backend URL (e.g., `https://your-backend.onrender.com`)

### Backend Deployment (Render/Heroku)

1. **Using Render (Recommended)**
   - Connect your GitHub repo to [Render](https://render.com)
   - Create a new Web Service
   - Set build/runtime settings:
     - **Root Directory:** `backend`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`

2. **Environment Variables for Backend**
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   ```

### Docker Deployment (Alternative)

If you prefer containerized deployment:

1. **Build and run with Docker Compose** (if you have a compose file)
   ```bash
   docker-compose up --build
   ```

2. **Manual Docker deployment**
   - Build backend: `docker build -f docker/backend.Dockerfile -t task-tracker-backend .`
   - Build frontend: `docker build -f docker/frontend.Dockerfile -t task-tracker-frontend .`
   - Run containers with appropriate environment variables

## 🎉 You're All Set!

Your Task-Tracker application is now up and running locally!

- 🖥️ **Frontend:** `http://localhost:5173`
- 🔌 **Backend API:** `http://localhost:4000` (or your custom port)

For production deployment, follow the deployment guide above.

## 📂 Project Structure

```
task-tracker/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── controllers/
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── taskModel.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   ├── taskRoute.js
│   │   └── userRoute.js
│   ├── utils/
│   │   └── geminiAI.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskModel.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── PendingPage.jsx
│   │   │   ├── CompletePage.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── TermsOfService.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── netlify.toml
│   └── .gitignore
├── docker/
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   └── nginx.conf
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Google Gemini AI** - AI-powered assistance

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons library
- **React-Toastify** - Toast notifications
- **Axios** - HTTP client

## 📡 API Documentation

### Authentication
All task endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### User Endpoints
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Task Endpoints
- `GET /api/tasks/gp` - Get all tasks for authenticated user
- `POST /api/tasks/gp` - Create a new task
- `GET /api/tasks/:id/gp` - Get task by ID
- `PUT /api/tasks/:id/gp` - Update task by ID
- `DELETE /api/tasks/:id/gp` - Delete task by ID

### AI Chatbot Endpoints
- `POST /api/tasks/chatbot/query` - Query tasks with AI analysis
  - Body: `{ "query": "string", "history": [...] }`
- `GET /api/tasks/chatbot/suggestions` - Get AI-generated task suggestions

### Request/Response Examples

**Create Task:**
```json
POST /api/tasks/gp
{
  "title": "Complete project",
  "description": "Finish the React app",
  "priority": "high",
  "completed": "pending"
}
```

**Chatbot Query:**
```json
POST /api/tasks/chatbot/query
{
  "query": "Help me with my project task",
  "history": []
}
```

## 🔧 Available Scripts

### Backend
- `npm start` - Start the server with nodemon
- `npm run dev` - Start in development mode

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build


## 🤖 AI Chatbot Usage

The AI chatbot helps you manage and understand your tasks better:

1. **Access the Chatbot**: Click the floating chat button on the Dashboard
2. **Ask Questions**: Type natural language queries about your tasks
3. **Get Help**: Receive step-by-step guidance, task analysis, and suggestions

### Example Interactions
- *"Help me complete my project task"*
- *"What tasks do I have pending?"*
- *"Give me tips for better task management"*

### Setup Requirements
- Add `GEMINI_API_KEY` to your backend `.env` file
- Get the API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Ensure backend has `@google/generative-ai` installed

## 🧪 Testing

1. **Local Testing**:
   - Start backend: `cd backend && npm start`
   - Start frontend: `cd frontend && npm run dev`
   - Create sample tasks and test the chatbot

2. **API Testing**:
   - Use tools like Postman to test endpoints
   - Include JWT token in Authorization header

## 🔧 Troubleshooting

### Common Issues
- **API Key Errors**: Verify `GEMINI_API_KEY` is set correctly
- **Authentication Failures**: Check JWT token validity
- **No Tasks Found**: Ensure tasks exist and match query terms
- **AI Response Issues**: Check Gemini API quota and network connectivity
- **Build Errors**: Ensure all dependencies are installed

### Getting Help
- Check console logs for detailed error messages
- Verify environment variables are loaded
- Test API endpoints individually


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Support

If you have any questions or need help, feel free to:
- Open an issue
- Contact the maintainers
- Check the documentation

---

<div align="center">
  <p>Made with ❤️ for developers who love clean code</p>
  
  ⭐ **Star this repo if you found it helpful!** ⭐
</div>