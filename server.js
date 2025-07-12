const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Data storage file
const DATA_FILE = 'app_data.json';

// Initialize data structure
let appData = {
    users: [{
            email: 'staff1@example.com',
            name: 'Staff One',
            password: '123456@',
            role: 'Staff'
        },
        {
            email: 'staff2@example.com',
            name: 'Staff Two',
            password: '123456@',
            role: 'Staff'
        }
    ],
    messages: [],
    memos: [],
    privateMessages: [],
    meetings: [],
    announcements: [],
    calendarEvents: [],
    currentUser: null
};

// Load existing data if file exists
function loadData() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            appData = JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Save data to file
function saveData() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(appData, null, 2));
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Load data on startup
loadData();

// API Routes

// Get all data
app.get('/api/data', (req, res) => {
    res.json(appData);
});

// User management
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = appData.users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = {
        email,
        name,
        password,
        role: 'Staff'
    };

    appData.users.push(newUser);
    saveData();

    res.json({ message: 'Registration successful', user: { email, name, role: 'Staff' } });
});

app.post('/api/login', (req, res) => {
    const { role, username, password } = req.body;

    if (role === 'Staff') {
        const user = appData.users.find(u => u.email === username && u.password === password);
        if (user) {
            appData.currentUser = { role: 'Staff', username: user.email };
            saveData();
            return res.json({ success: true, user: { role: 'Staff', username: user.email } });
        }
    } else if (role === 'Director') {
        if (username === 'Makanga Henry' && password === '12345678@') {
            appData.currentUser = { role: 'Director', username };
            saveData();
            return res.json({ success: true, user: { role: 'Director', username } });
        }
    } else if (role === 'Headteacher') {
        if (username === 'Nabaseka Hellen' && password === '123456789@') {
            appData.currentUser = { role: 'Headteacher', username };
            saveData();
            return res.json({ success: true, user: { role: 'Headteacher', username } });
        }
    }

    res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/logout', (req, res) => {
    appData.currentUser = null;
    saveData();
    res.json({ message: 'Logged out successfully' });
});

// Messages
app.get('/api/messages', (req, res) => {
    res.json(appData.messages);
});

app.post('/api/messages', (req, res) => {
    const { sender, text } = req.body;
    const message = {
        sender,
        text,
        time: new Date().toLocaleString()
    };
    appData.messages.push(message);
    saveData();
    res.json(message);
});

// Memos
app.get('/api/memos', (req, res) => {
    res.json(appData.memos);
});

app.post('/api/memos', (req, res) => {
    const { sender, text } = req.body;
    const memo = {
        sender,
        text,
        time: new Date().toLocaleString()
    };
    appData.memos.push(memo);
    saveData();
    res.json(memo);
});

// Private Messages
app.get('/api/private-messages', (req, res) => {
    res.json(appData.privateMessages);
});

app.post('/api/private-messages', (req, res) => {
    const { sender, recipient, text } = req.body;
    const privateMessage = {
        sender,
        recipient,
        text,
        time: new Date().toLocaleString()
    };
    appData.privateMessages.push(privateMessage);
    saveData();
    res.json(privateMessage);
});

// Meetings
app.get('/api/meetings', (req, res) => {
    res.json(appData.meetings);
});

app.post('/api/meetings', (req, res) => {
    const { title, date, time, description, organizer } = req.body;
    const meeting = {
        title,
        date,
        time,
        description,
        organizer,
        createdAt: new Date().toISOString()
    };
    appData.meetings.push(meeting);
    saveData();
    res.json(meeting);
});

// Announcements
app.get('/api/announcements', (req, res) => {
    res.json(appData.announcements);
});

app.post('/api/announcements', (req, res) => {
    const { sender, text } = req.body;
    const announcement = {
        sender,
        text,
        time: new Date().toLocaleString()
    };
    appData.announcements.push(announcement);
    saveData();
    res.json(announcement);
});

// Calendar Events
app.get('/api/calendar-events', (req, res) => {
    res.json(appData.calendarEvents);
});

app.post('/api/calendar-events', (req, res) => {
    const { title, date, time, type, description, organizer } = req.body;
    const event = {
        title,
        date,
        time,
        type,
        description,
        organizer,
        createdAt: new Date().toISOString()
    };
    appData.calendarEvents.push(event);
    saveData();
    res.json(event);
});

// Users/Staff Directory
app.get('/api/users', (req, res) => {
    res.json(appData.users);
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Access the app from any device on your network using your computer's IP address`);
});