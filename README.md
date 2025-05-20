# SmartRoom — Full Stack Booking System

SmartRoom is a full-stack web application designed to manage real-time room and time slot bookings across multiple library locations. Built using React, Firebase, MongoDB, and Twilio, it enables users to reserve rooms with ease while reducing no-shows and improving database performance.

---

## 💡 Motivation

Booking systems for study rooms or group meetings often suffer from poor UI, slow lookups, and high no-show rates. SmartRoom was built to solve these problems using real-time data updates, calendar integration, and SMS reminders — creating a fast, mobile-friendly experience for students and staff.

---

## ✨ Features

- 📅 **200+ time slots** across **10 library locations**
- 📆 Real-time calendar availability using **React Calendar**
- 💬 SMS reminders using **Twilio**
- ⚡ Fast lookup with optimized **MongoDB** queries (40% faster)
- 🔐 Auth & storage handled by **Firebase**
- 📱 Fully responsive UI using **Tailwind CSS**

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Calendar  
- **Backend**: Firebase Firestore, Express  
- **Database**: MongoDB  
- **Notifications**: Twilio SMS API  
- **Tools**: VSCode, GitHub  
- **Deployment**: (Add Vercel / Netlify / Firebase Hosting if applicable)

---

![Demo](https://github.com/Anuja13009/Smartroom/blob/main/demo.gif)


---

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Anuja13009/Smartroom.git
   cd Smartroom
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server/` folder using the structure below:
   ```env
   MONGO_URI=your_mongodb_connection_string
   TWILIO_SID=your_twilio_account_sid
   TWILIO_AUTH=your_twilio_auth_token
   TWILIO_PHONE=+1234567890
   ```

4. Start the application:
   ```bash
   # Start backend server
   cd server
   node server.js

   # In a new terminal tab, start frontend
   cd client
   npm start
   ```

---


