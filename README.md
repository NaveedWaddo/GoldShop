# 🚀 GoldShop

**Frontend:** React.js, JavaScript , Tailwind CSS
**Backend:** Node.js, Express.js, Postgresql


## 📂 Project Structure

```bash
GoldShop/
│── frontend/    # Frontend (React, JavaScript ,,Tailwind CSS)
│── backend/     # Backend (Node.js, Express, Postgresql)
│── README.md    # Documentation
```

## 🏗️ Setup & Installation

### 1️⃣ Clone the repository

```bash
https://github.com/NaveedWaddo/GoldShop.git
cd GoldShop
```

### 2️⃣ Install dependencies

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Database Setup
Open PGadmin create new database with name GoldShopDB
```bash
CREATE DATABASE GoldShopDB;
```

Create users Table inside GoldShopDB
```bash
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```


#### Backend

```bash
cd backend
npm install
node server.js
```

### 3️⃣ Setup environment variables

-   Create a `.env` file in both **frontend** and **backend** folders.
-   Add necessary environment variables as per the `.env.example`.

## 🚀 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 🧠 Upcoming Features (Planned)
 

## 📫 Contact
naveedwaddo1123@gmail.com
