# User Task Management Application

A full-stack **User Task Management** application built using **Django REST Framework** for the backend and **React.js** for the frontend. The project demonstrates secure authentication, protected routing, with a clean and scalable architecture.

---

## 📌 Project Overview

This application allows authenticated users to manage their tasks efficiently. It includes secure login using JWT authentication, protected APIs and routes, and a responsive frontend integrated with backend services.

The project is structured with **separate frontend and backend folders**, following industry best practices for maintainability and scalability.

---

## 🚀 Features

* User authentication using **JWT (JSON Web Token)**
* Secure and protected backend APIs
* Protected frontend routes based on authentication state
* RESTful API design
* Frontend and backend integration via API calls
* Centralized state and form handling in React
* Clean project structure with proper `.gitignore` configuration

---

## 🛠️ Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication
* MySQL (local database)

### Frontend

* React.js
* React Router
* Axios (API integration)

### Tools & Version Control

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```
User-Task/
├── backend/
│   ├── manage.py
│   ├── usertask/
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## 🔐 Authentication & Security

* Implemented **JWT-based authentication** for secure user access
* Tokens are validated on each protected API request
* Frontend routes are protected to prevent unauthorized access

---

## ⚙️ Setup Instructions

### Backend Setup

1. Navigate to backend folder:

   ```bash
   cd backend
   ```
2. Create virtual environment and activate it
3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:

   ```bash
   python manage.py migrate
   ```
5. Start the server:

   ```bash
   python manage.py runserver
   ```

---

### Frontend Setup

1. Navigate to frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React app:

   ```bash
   npm start
   ```

---

## 🧾 Git & Repository Management

* `.gitignore` configured to exclude:

  * Virtual environments
  * `node_modules`
  * Environment variables (`.env`)
  * Build files
* Clean commit history with meaningful messages

---

## 📈 Future Enhancements

* Improve UI/UX design
* Add pagination and search for tasks
* Implement role-based access control
* Add unit and integration tests
* Deploy application to production

---

## 👤 Author

**Kirthika V**
Software Engineer

---

## 📄 License

This project is created for learning and evaluation purposes.
