# 📝 Task-Tracker

> A modern, full-stack task management application built with Node.js and React

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## ✨ Features

- 📋 Create, read, update, and delete tasks
- 🎯 Clean and intuitive user interface
- ⚡ Real-time updates
- 📱 Responsive design
- 🔒 Secure backend API

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

## 🎉 You're All Set!

Your Task-Tracker application is now up and running! 

- 🖥️ **Frontend:** `http://localhost:5173`
- 🔌 **Backend API:** `http://localhost:4000` (or your custom port)

## 📂 Project Structure

```
task-tracker/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons library
- **React-Toastify** - Toast notifications

## 🔧 Available Scripts

### Backend
- `npm start` - Start the server with nodemon
- `npm run dev` - Start in development mode

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

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