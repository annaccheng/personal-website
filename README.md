# Anna Cheng - Personal Website

A minimalistic personal website built with React, featuring a clean design inspired by modern developer portfolios.

## Pages

- **Home** - Quick intro and brief timeline of recent experiences
- **About** - Detailed bio, photos, full experience history, and education
- **Projects** - Portfolio of products, designs, and research

## Features

- Clean, minimalistic design with focus on content
- Light/Dark theme toggle with system preference detection
- Responsive design for all screen sizes
- Fast page loads with lazy loading
- Simple, accessible navigation

## Tech Stack

- React 18
- React Router for navigation
- CSS Variables for theming
- No external UI libraries - lightweight and fast

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── LightDark.jsx   # Theme toggle
│   └── PageTransition.jsx  # Route handling
├── pages/
│   ├── Home.jsx        # Home page with intro and timeline
│   ├── About.jsx       # About page with bio and experience
│   └── Projects.jsx    # Projects portfolio
├── data/
│   ├── experience.json # Work experience data
│   ├── education.json  # Education data
│   └── projects.json   # Projects data
├── assets/             # Images and icons
├── App.jsx             # Main app component
├── App.css             # All styles
└── index.js            # Entry point
```

## Customization

### Adding Experience

Edit `src/data/experience.json`:

```json
{
  "id": 1,
  "title": "Job Title",
  "company": "Company Name",
  "location": "City, State",
  "description": "Description of role...",
  "tags": ["Skill1", "Skill2"],
  "startDate": "Month Year",
  "endDate": "Month Year"
}
```

### Adding Projects

Edit `src/data/projects.json`:

```json
{
  "id": 1,
  "project_date": "YYYY-MM-DD",
  "title": "Project Title",
  "description": "Project description...",
  "photo": "URL to image",
  "tags": ["Tech1", "Tech2"],
  "link": "URL to project",
  "category": ["Category"]
}
```

### Theming

Colors are defined as CSS variables in `src/App.css`. Modify the `:root[data-theme="light"]` and `:root[data-theme="dark"]` sections to customize colors.

## Contact

- Email: annacheng@berkeley.edu
- LinkedIn: [annaccheng](https://www.linkedin.com/in/annaccheng/)
- GitHub: [annaccheng](https://github.com/annaccheng)
