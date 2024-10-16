# International Baccalaureate (IB) Coursework Evaluation Platform

This is a web application for evaluating International Baccalaureate (IB) coursework. The application allows users to upload and store coursework files, fill in coursework details, view evaluations, and explore different coursework categories.

## Live Demo

[Live Application](https://ib-coursework-evaluation-platform-three.vercel.app/)

## Tech Stack

- **Next.js 14**: For building the full-stack application with app router and server components.
- **TypeScript**: For type-safe JavaScript development, enhancing code quality and developer productivity.
- **TailwindCSS**: For responsive, utility-first styling.
- **Zustand**: For global state management.
- **Shadcn UI**: For using a component library to ensure design consistency.
- **Zod**: For schema validation.

## Key Features

### 1. File Upload

- Drag-and-drop functionality for PDF files.
- Manual file upload option.
- File size limit display (e.g., "Limit 25 MB per file").
- Files and metadata stored locally using browser local storage.

### 2. Local Storage Implementation

- Uploaded files and their metadata are saved in local storage.
- Data persists across page reloads.
- Efficient retrieval of stored files and associated data.

### 3. Coursework Details Form

- Dropdowns for "Coursework Type" and "Subject."
- Text input for essay title.
- Data is stored locally with the associated file.

### 4. Evaluation Display

- Dummy data for score evaluations.
- Circular progress indicator for the overall score.
- Score breakdown by criteria (A, B, C) and evaluation date.
- All data stored and retrieved from local storage.

### 5. Coursework List

- Display previously uploaded coursework with relevant details (title, subject, word count, etc.).
- Retrieved from local storage.

### 6. Explore Coursework Section

- Tabbed interface for different coursework categories.
- Grid layout for displaying coursework examples.

## Bonus Features

### 1. Animations

- Smooth transitions and animations between different states.
- Micro-interactions for enhanced user feedback.
- Congratulatory messages for good scores, and encouraging feedback for improvement areas.

### 2. User Gratification

- Congratulatory messages for good scores
- Encouraging feedback for areas of improvement

### 3. Accessibility

- Proper use of ARIA attributes.
- Full keyboard navigation support.

### 4. Advanced Local Storage Features

- Option to clear local storage or delete individual files.
- Real API integration for server-side persistence.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ashwinangadi/ibcep.git
   cd ibcep
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Run the Production build:
   ```bash
   npm run start
   ```

You can start editing the page by modifying `app/page.tsx`.

## Assumptions & Design Decisions

- The user interface was designed to closely match the Figma design with enhancements for animations and accessibility.
- The project is architected to be scalable and modular, with a focus on reusability and maintainability.

## Challenges Faced

- Choosing a suitable PDF viewer for the project
- Ensured persistence of data across page reloads by serializing the data and storing it as string in local storage.

Contact me at [Ashwin Angadi](https://www.ashwinangadi.com/) for any queries.
