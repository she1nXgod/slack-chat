[![Actions Status](https://github.com/she1nXgod/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/she1nXgod/frontend-project-12/actions)

# 💬 Slack Chat

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![RTK Query](https://img.shields.io/badge/RTK-Query-764ABC?logo=redux&logoColor=purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite)

> **Modern real-time chat application** built with React, Redux Toolkit, and RTK Query. 
> Experience seamless communication with instant messaging, channel management, and robust state synchronization.


## Features

<div align="center">

<table>
  <tr>
    <td align="center">🔐 <b>Authentication</b><br>Secure JWT login</td>
    <td align="center">📢 <b>Channels</b><br>Create, rename, delete</td>
    <td align="center">💬 <b>Real-time Chat</b><br>Instant messaging</td>
  </tr>
  <tr>
    <td align="center">⚡ <b>RTK Query</b><br>Data caching & sync</td>
    <td align="center">🌍 <b>i18n Support</b><br>RU language</td>
    <td align="center">📱 <b>Responsive</b><br>Mobile-friendly</td>
  </tr>
</table>

</div>


### 🔐 User Authentication
- Secure login system with JWT tokens
- Registration for new users
- Protected routes for authorized users

### 📢 Channel Management
- Create new chat channels
- Rename existing channels
- Delete channels (with permissions)
- Browse available channels in sidebar

### 💬 Real-Time Messaging
- Instant message delivery via WebSocket
- Message history per channel
- User-friendly notifications
- Error handling with toast messages

### ⚡ RTK Query Integration
- Automatic data caching and synchronization
- Optimistic updates for better UX
- Background refetching
- Built-in loading and error states
- Automatic request retries


## 🛠️ Infrastructure & Tools

**Libraries:** 

![Formik](https://img.shields.io/badge/Formik-2563eb?style=flat-square) ![Yup](https://img.shields.io/badge/Yup-2563eb?style=flat-square) ![React Toastify](https://img.shields.io/badge/React_Toastify-ffc107?style=flat-square&logoColor=black) ![i18next](https://img.shields.io/badge/i18next-009688?style=flat-square&logo=i18next&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io)

**Dev Tools:** 

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite)

## 🚀 Getting Started

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/she1nXgod/frontend-project-12
cd frontend-project-12
make install
```

### Run the Application
Build and start the development server:

```bash
make build
make start
```

🌐 Open your browser and navigate to: http://localhost:5001