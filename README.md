# Subscription Tracker API

A robust REST API for managing personal subscriptions.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Quick Start](#quick-start)
- [Code Snippets](#snippets)

## 🎯 Introduction

Subscription Tracker is a backend API service that helps users manage and track their recurring subscriptions. Whether it's Netflix, Spotify, or any other subscription service, this API provides comprehensive tools to track costs, renewal dates, and statuses.

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Arcjet** - Security middleware

## ✨ Features

- 🔐 User authentication and authorization with JWT
- 📊 Create, read, update, and delete subscriptions
- 💰 Track subscription costs across multiple currencies (USD, EUR, GBP)
- 📅 Automated renewal date calculations
- 🔔 Subscription renewal reminders
- 🏷️ Categorize subscriptions (entertainment, sports, finance, etc.)
- 💳 Payment method tracking
- 📈 Subscription status management (active, cancelled, expired)
- 📝 Comprehensive API documentation with Swagger
- 🔒 Rate limiting and security with Arcjet

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Haidar99-1/subscription-tracker
    cd subscription-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run tests to ensure everything is set up correctly:
    ```bash
    npm run test
    ```

4. Set up environment variables

Create a new file named .env.local in the root of your project and add the following content:

```bash
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"
```

Fill in DB_URI and JWT_SECRET with your MongoDB connection string and a strong secret for signing JWTs. Do NOT commit secrets to version control. Consider adding .env.local to your .gitignore.


## Code Snippets

(Additional snippets and documentation go here)