# 🚀 Project Hub - Modern Project & Team Management Template

A beautiful, feature-rich project management web application template built with **Tailwind CSS** and **Vanilla JavaScript**. Perfect for team collaboration, project tracking, and productivity management.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-38bdf8.svg)

---

## ✨ Features

### 🎨 **Modern Design**
- ✅ Clean and professional UI with gradient accent cards
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode support with smooth transitions
- ✅ Consistent design system across all pages

### 🛠️ **Rich Functionality**
- ✅ Interactive dashboards with real-time statistics
- ✅ Kanban board for task management
- ✅ Team member management
- ✅ Project tracking and reporting
- ✅ User authentication pages (Login & Register)
- ✅ Profile and settings management

### 🎯 **Premium UX**
- ✅ Smooth animations and transitions
- ✅ Interactive dropdowns and modals
- ✅ Form validation with user feedback
- ✅ Breadcrumb navigation
- ✅ Mobile-friendly sidebar

---

## 📁 Project Structure

```
manajemen-proyek/
├── assets/                 # Images and logos
│   ├── logo.png
│   ├── darkmode.png
│   └── lightmode.png
├── js/                     # JavaScript files
│   ├── main.js            # Main functionality
│   └── theme.js           # Dark mode toggle
├── pages/                  # All HTML pages
│   ├── auth/              # Authentication
│   ├── account/           # User settings
│   ├── dashboard/         # Main dashboard
│   ├── projects/          # Project management
│   ├── board/             # Kanban board
│   ├── team/              # Team management
│   ├── reports/           # Analytics
│   └── support/           # Help & support
├── index.html             # Landing page
└── README.md              # Documentation
```

---

## 📄 Page Overview

### 🔐 **Authentication (auth/)**

#### `login.html`
- Modern login form with email and password
- Social login options (Google, GitHub)
- Password visibility toggle
- Form validation
- "Remember me" checkbox
- Link to registration page

#### `register.html`
- Multi-field registration form
- Full name, email, password, confirm password
- Terms & conditions checkbox
- Client-side validation
- Password strength requirements
- Social signup options

---

### 👤 **Account Management (account/)**

#### `profile.html`
- **Stats Cards**: Active projects, tasks completed, team members
- **Profile Header**: Cover photo, avatar upload, user info badges
- **Personal Information Form**: Name, email, phone, location, bio
- **Change Password Section**: Secure password update
- Export profile data button

#### `settings.html`
- **Appearance Settings**: Theme preference (Light/Dark/Auto), language selection
- **Notification Settings**: Email, push notifications, task reminders toggles
- **Privacy & Security**: 2FA setup, active sessions, profile visibility
- Save and reset options

---

### 📊 **Dashboard (dashboard/)**

#### `index.html`
- **Gradient Stats Cards**: 
  - Active Projects (24) with +12% growth
  - Tasks Completed (156) with 68% completion rate
  - Team Members (48) with +3 new members
  - Budget Utilized ($84K) with -8% spending efficiency
- **Active Projects List**: Recent projects with progress bars
- **Recent Activity Feed**: Real-time team activities
- **Quick Actions**: Fast access to common tasks

---

### 📁 **Projects (projects/)**

#### `index.html`
- **Project Grid View**: Cards with project details
- **Search & Filters**: Search bar, status filter, team filter
- **Project Cards**: Status badges, progress bars, team avatars
- **Quick Stats**: Due dates, task completion
- "New Project" button

#### `create.html`
- **Project Creation Form**: Name, description, team selection
- **Project Settings**: Start/end dates, priority level
- **Team Assignment**: Add team members
- **Budget Planning**: Set project budget
- Form validation and submit

---

### 📋 **Kanban Board (board/)**

#### `kanban.html`
- **Drag-and-Drop Columns**: To Do, In Progress, Review, Done
- **Task Cards**: Title, description, assignees, due dates
- **Add Task Modal**: Create new tasks with details
- **Filter Options**: Filter by assignee, priority
- **Search Tasks**: Quick task search

---

### 👥 **Team (team/)**

#### `index.html`
- **Team Grid**: Member cards with avatars
- **Member Information**: Name, role, email
- **Status Indicators**: Active/Inactive status
- **"Invite Member" Button**: Add new team members
- "View Profile" links to detail page

#### `detail.html`
- **Member Profile**: Detailed information
- **Contact Details**: Email, phone, location
- **Project Assignments**: Projects the member is working on
- **Performance Metrics**: Tasks completed, current workload
- Action buttons (Send Message, Edit Profile)

---

### 📈 **Reports (reports/)**

#### `index.html`
- **Filter Options**: Date range, project, team filters
- **Budget Overview**: Total budget, spent, remaining with progress bars
- **Project Distribution**: Pie chart visualization
- **Project Costs Table**: Detailed breakdown by project
- **Export PDF Button**: Download reports

---

### ❓ **Support (support/)**

#### `help.html`
- **Search Bar**: Find help articles quickly
- **Quick Links**: Common help topics
- **FAQ Section**: Frequently asked questions
- **Contact Support**: Submit support tickets
- **Documentation Links**: User guides and tutorials

---

## 🎨 Design System

### Colors
- **Primary**: `hsl(190, 65%, 45%)` - Teal/Cyan
- **Secondary**: `hsl(210, 60%, 50%)` - Blue
- **Accent**: `hsl(35, 85%, 60%)` - Orange

### Gradients
- Blue: `from-blue-500 to-blue-600`
- Green: `from-green-500 to-green-600`
- Purple: `from-purple-500 to-purple-600`
- Orange: `from-orange-500 to-orange-600`

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or download** this repository
   ```bash
   git clone <repository-url>
   cd manajemen-proyek
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Navigate to pages**
   - Dashboard: `pages/dashboard/index.html`
   - Login: `pages/auth/login.html`
   - Projects: `pages/projects/index.html`

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS 3.0+**: Utility-first CSS framework (CDN)
- **Vanilla JavaScript**: No frameworks, pure JS
- **Font Awesome 6.5.1**: Icon library
- **Google Fonts**: Poppins font family

---

## 📱 Features Breakdown

### ✅ Universal Features (All Pages)
- Responsive sidebar navigation
- Dark/light mode toggle
- User dropdown menu (Profile, Settings, Logout)
- Notification center
- Breadcrumb navigation
- Mobile hamburger menu

### ✅ Interactive Elements
- Dropdown menus with click-outside-to-close
- Modal dialogs
- Form validation
- Password visibility toggles
- Loading states
- Success/error messages

---

## 🎯 Use Cases

Perfect for:
- 🏢 **Corporate Teams**: Project and team management
- 🚀 **Startups**: Track multiple projects and team members
- 💼 **Freelancers**: Manage clients and projects
- 🎓 **Educational**: Student project collaboration
- 🏗️ **Agencies**: Client project tracking

---

## 📝 Customization

### Changing Colors
Edit the Tailwind config in any HTML file:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(190, 65%, 45%)', // Change this
          dark: 'hsl(190, 65%, 35%)',
          light: 'hsl(190, 65%, 95%)'
        }
      }
    }
  }
}
```

### Adding Pages
Follow the existing structure:
1. Create HTML file in appropriate folder
2. Include sidebar and header
3. Add to navigation links
4. Match the design system

---

## 🐛 Known Limitations

- No backend integration (frontend only)
- No data persistence (uses local storage for theme only)
- Drag-and-drop on Kanban is visual only
- Authentication is UI only (no actual auth)

---

## 📄 License

This project is licensed under the MIT License - you are free to use, modify, and distribute this template.

---

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📧 Support

For questions or support:
- Open an issue on GitHub
- Contact: [your-email@example.com]

---

## 🙏 Acknowledgments

- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For the beautiful Poppins font

---

<div align="center">

**Made with ❤️ for the development community**

⭐ Star this repository if you found it helpful!

</div>
