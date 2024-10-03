# RaktSetu - Blood Bank Management System

RaktSetu is a comprehensive Blood Bank Management System that streamlines the process of managing blood donations, inventory, and distribution across hospitals and clinics. It ensures the timely availability of blood, reduces wastage, and provides an efficient communication system between blood banks, donors, and healthcare facilities.

## Project Link

[GitHub Repository](https://github.com/jaluiovilash/MAJOR-PROJECT-PU-25.git)

## Features

- **Donor Management**: Tracks donor details, blood type, donation history, and eligibility status. Sends automated reminders to eligible donors.
- **Blood Inventory Management**: Monitors blood stock in real-time to prevent shortages and wastage.
- **Hospital Requests**: Manages blood unit requests from hospitals, ensuring timely and accurate fulfillment.
- **Notifications**: Sends emergency alerts to nearby eligible donors during critical blood shortages.
- **Secure Authentication**: Implements staff authentication for blood bank access.

## Technologies Used

### Frontend

- **Material Dashboard React**: The frontend is built using [material-dashboard-react](https://www.creative-tim.com/product/material-dashboard-react), offering a modern, responsive UI for blood bank staff.

### Backend

- **Node.js & Express**: Provides the API and server-side logic.
- **MongoDB**: Serves as the database for storing donor details, blood inventory, and hospital requests.
- **Twilio API**: Integrated for sending SMS notifications to donors during emergencies.

## Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/jaluiovilash/MAJOR-PROJECT-PU-25.git
```

2. Navigate to the `server` directory and install backend dependencies:

```bash
cd server
npm install
```

3. Set up the `.env` file for backend:

```plaintext
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

4. Start the backend server:

```bash
npm run server
```

5. Navigate to the `frontend` directory and install frontend dependencies:

```bash
cd ../frontend
npm install
```

6. Start the frontend server:

```bash
npm start
```

7. Access the frontend dashboard at:

```plaintext
http://localhost:3000
```

## Usage

1. **Authentication**: Login as staff to access the system's main dashboard.
2. **Donor Management**: Add and manage donor records, schedule donations, and send reminders.
3. **Blood Requests**: View and manage requests from hospitals.
4. **Emergency Notifications**: Send notifications to donors during emergencies.

## Contributing

Feel free to fork the repository and submit pull requests to contribute to the project.