# Maria Theresa Ledochowska College Communication System

A real-time communication platform for school staff, featuring messaging, memos, private messages, meetings, announcements, and calendar scheduling.

## Features

- **Multi-device Support**: Works across all devices on the same network
- **Real-time Messaging**: Send messages to all staff members
- **Private Messages**: Send private messages to specific staff members
- **Memos**: Share important memos with the entire staff
- **Meeting Scheduling**: Schedule and manage online meetings
- **Announcements**: Post important announcements
- **Calendar Events**: Schedule and view calendar events
- **Staff Directory**: View all registered staff members
- **User Registration**: New staff can register themselves
- **Role-based Access**: Director, Headteacher, and Staff roles

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. **Clone or download** the project files to your computer

2. **Install dependencies** by running:
   ```bash
   npm install
   ```

3. **Start the server** by running:
   ```bash
   npm start
   ```

4. **Access the application**:
   - On the same computer: `http://localhost:3000`
   - From other devices: `http://[YOUR_COMPUTER_IP]:3000`

## How to Access from Multiple Devices

### Step 1: Find Your Computer's IP Address

**On Windows:**
1. Open Command Prompt
2. Type: `ipconfig`
3. Look for "IPv4 Address" (usually starts with 192.168.x.x or 10.0.x.x)

**On Mac:**
1. Open System Preferences → Network
2. Select your active connection
3. Note the IP address

**On Linux:**
1. Open Terminal
2. Type: `ip addr show` or `ifconfig`
3. Look for your network interface IP address

### Step 2: Configure Firewall (if needed)

**Windows:**
1. Open Windows Defender Firewall
2. Allow Node.js through the firewall
3. Or temporarily disable firewall for testing

**Mac:**
1. System Preferences → Security & Privacy → Firewall
2. Allow incoming connections for Node.js

### Step 3: Access from Other Devices

1. **Start the server** on your computer:
   ```bash
   npm start
   ```

2. **On other devices** (phones, tablets, other computers):
   - Open a web browser
   - Go to: `http://[YOUR_COMPUTER_IP]:3000`
   - Example: `http://192.168.1.100:3000`

## Default Login Credentials

### Director
- Username: `Makanga Henry`
- Password: `12345678@`

### Headteacher
- Username: `Nabaseka Hellen`
- Password: `123456789@`

### Staff
- Email: `staff1@example.com`
- Password: `123456@`
- Email: `staff2@example.com`
- Password: `123456@`

## Usage Guide

### For New Staff Registration
1. Click "Register as Staff" on the login page
2. Fill in your details (Name, Email, Password)
3. Click "Register"
4. Login with your new credentials

### Sending Messages
1. Login to the system
2. Go to "Messages" tab
3. Type your message and click "Send Message"

### Private Messages
1. Go to "Private Messages" tab
2. Select a recipient from the dropdown
3. Type your message and click "Send Private Message"

### Scheduling Meetings
1. Go to "Meetings" tab
2. Click "Schedule New Meeting"
3. Fill in meeting details
4. Click "Schedule Meeting"

### Calendar Events
1. Go to "Calendar" tab
2. Click "Schedule New Event"
3. Choose event type and fill details
4. Click "Schedule Event"

## Data Storage

- All data is stored locally on the server computer in `app_data.json`
- Data persists between server restarts
- No external database required

## Troubleshooting

### Can't access from other devices?
1. Check if firewall is blocking the connection
2. Verify you're using the correct IP address
3. Ensure all devices are on the same network
4. Try accessing from the same computer first

### Server won't start?
1. Check if port 3000 is already in use
2. Ensure Node.js is installed correctly
3. Run `npm install` to install dependencies

### Messages not updating?
1. Refresh the page
2. Check browser console for errors
3. Ensure server is running

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## File Structure

```
├── index.html          # Main application file
├── server.js           # Backend server
├── package.json        # Dependencies and scripts
├── app_data.json       # Data storage (created automatically)
└── README.md          # This file
```

## Security Notes

- This is a local network application
- Passwords are stored in plain text (for demo purposes)
- For production use, implement proper authentication
- Keep the server computer secure

## Support

For issues or questions, contact the system administrator. 