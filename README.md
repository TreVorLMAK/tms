# Task Management Web App

A modern, responsive task management application built with Next.js and React.

## Features

- **Create tasks** with title, description, due date, and priority (High, Medium, Low)
- **Mark tasks as completed** and filter by status (All, Completed, Pending)
- **Delete tasks** with a confirmation prompt to prevent accidental deletion
- **Persist tasks** using browser LocalStorage
- **Sort tasks** automatically by due date and priority
- **Responsive design** that works on desktop and mobile devices

## Tech Stack

- **Next.js** (App Router) - For server-side rendering and routing
- **React** - UI library
- **React Hooks** - For state and lifecycle features
- **Context API** - For global state management
- **Tailwind CSS** - For styling
- **LocalStorage API** - For data persistence
- **Vercel** - For deployment

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/               # Next.js App Router folder
│   ├── page.js        # Main application page
│   ├── layout.js      # Root layout
│   ├── globals.css    # Global styles
├── components/        # React components
│   ├── TaskForm.js    # Form for creating tasks
│   ├── TaskList.js    # List of tasks
│   ├── TaskItem.js    # Individual task component
│   ├── TaskFilter.js  # Filter controls
│   ├── ConfirmationModal.js  # Deletion confirmation
├── context/          # React Context
│   ├── TaskContext.js # Global state management
```

## Usage

1. **Adding a task**: Fill out the form at the top of the page with the task details and click "Add Task".
2. **Completing a task**: Click the checkbox next to any task to mark it as completed.
3. **Filtering tasks**: Use the filter buttons to show All, Pending, or Completed tasks.
4. **Deleting a task**: Click the delete (trash) icon and confirm deletion in the modal.

## Deployment

This application can be easily deployed on Vercel:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign up/log in.
3. Click "New Project" and import your GitHub repository.
4. Keep the default settings and click "Deploy".

## Future Enhancements

Potential features for future releases:

- Task search functionality
- Task categories/labels
- Task editing
- Due date notifications
- Dark mode support
- Data export options
- Sync with cloud storage
- User authentication
- Shared task lists

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for the deployment platform

---

