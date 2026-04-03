# 💰 Finance Data Processing & Access Control Backend

## 🚀 Project Overview

This project is a backend system for managing financial records with role-based access control. It allows users to create, manage, and analyze financial data securely based on their assigned roles.

The system is designed with clean architecture principles, ensuring scalability, maintainability, and efficient data handling.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Validation:** express-validator
* **Security:** Role-Based Access Control (RBAC)

---

## 📁 Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── middlewares/
 ├── validators/
 ├── utils/
 ├── config/
 └── app.js
```

---

## 👤 User Roles & Permissions

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View financial records               |
| Analyst | View records + dashboard analytics   |
| Admin   | Full access (CRUD + user management) |

---

## 🔐 Authentication

* Users can register and login
* JWT token is used for secure authentication
* Token must be passed in headers:

```
Authorization: Bearer <token>
```

---

## 📌 API Endpoints

### 🔑 Auth APIs

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

---

### 👤 User APIs (Admin Only)

* `GET /api/users` → Get all users
* `PUT /api/users/:id` → Update user role/status

---

### 💰 Record APIs

* `POST /api/records` → Create record (Admin)
* `GET /api/records` → Get records (All roles)
* `PUT /api/records/:id` → Update record (Admin)
* `DELETE /api/records/:id` → Delete record (Admin)

---

### 📊 Dashboard APIs

* `GET /api/dashboard/income` → Total income
* `GET /api/dashboard/expense` → Total expenses
* `GET /api/dashboard/balance` → Net balance

---

## 🔍 Features

* Role-Based Access Control (RBAC)
* Financial record management (CRUD)
* Dashboard analytics (income, expenses, balance)
* Filtering support (date, category, type)
* Input validation & error handling
* Clean and scalable architecture

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd finance-data-processing
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🧪 Testing

Use Postman or any API client:

* Register → Login → Get Token
* Use token in headers for protected routes

---

## 📈 Future Enhancements

* Pagination & search support
* Advanced analytics (monthly trends)
* Unit & integration testing
* API documentation (Swagger)
* Docker deployment

---

## 🧠 Key Design Decisions

* Used service layer for business logic separation
* Implemented middleware for authentication & authorization
* Applied validation layer to ensure clean data
* Structured code for scalability and maintainability

---

## 👨‍💻 Author

**Bandari Vamshi**

* Full Stack Developer (MERN)
* Skilled in building scalable backend systems

---

## ⭐ Conclusion

This project demonstrates backend development skills including API design, role-based access control, data modeling, and clean architecture practices.
