# Subscription Tracker API

A robust REST API for managing personal subscriptions.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Quick Start](#quick-start)
- [Code Snippets](#snippets)

## 🎯 Introduction

Subscription Tracker is a backend API service that helps users manage and track their recurring subscriptions. Whether it's Netflix, Spotify, or any other subscription service, this API provides comprehensive tools to monitor costs, renewal dates, and payment methods all in one place.

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Swagger** - API documentation
- **Arcjet** - Security middleware
- **QStash** - Background job processing

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
git clone <repository-url>
cd subscription-tracker
