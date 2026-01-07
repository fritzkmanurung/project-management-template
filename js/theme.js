// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }

        // Listen for toggle button clicks
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('themeToggle');
            if (toggleBtn) {
                this.updateToggleIcon(toggleBtn);
                toggleBtn.addEventListener('click', () => this.toggle());
            }
        });
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';

        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', this.theme);

        // Update icon
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            this.updateToggleIcon(toggleBtn);
        }
    }

    updateToggleIcon(button) {
        const icon = button.querySelector('i');
        if (icon) {
            if (this.theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();
