// src/app/projects/page.tsx

import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const ProjectsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">My Extensive Projects</h1>
            <p className="text-lg mb-6">
                Welcome to my portfolio of diverse projects.
                Click on any project below to learn more!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Project Link */}
                <Link href="https://www.kollej.app/" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-2">Kollej</h2>
                    <p className="text-gray-600">Your one app</p>
                    <span className="text-blue-500 hover:underline mt-2 inline-block">View Project &rarr;</span>
                </Link>

                {/* You'll add more project cards here later, likely mapping from data */}
                <div className="block p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Another Project</h2>
                    <p className="text-gray-600">Description of another cool project.</p>
                </div>
                {/* ... many more projects */}
            </div>

            {/* You could also add search functionality here */}
            <div className="mt-10">
                {/* Search bar component would go here */}
                {/* <ProjectSearchBar /> */}
            </div>
        </div>
    );
};

export default ProjectsPage;