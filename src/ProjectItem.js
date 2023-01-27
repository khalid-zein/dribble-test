import React, { useState, useEffect } from 'react';

const ProjectItem = () => {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);
    const [updatedProject, setUpdatedProject] = useState({ name: '', description: '' });


    
    const access_token = "aea4c7847f07fa11abe779739d3647d8fa3613ddf3fc079e7fe1f751350cd920";

    useEffect(() => {
        fetch(`https://api.dribbble.com/v2/user/projects?access_token=${access_token}`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleAddProject = (newProject) => {
            // Add new project to the API
            fetch('https://api.dribbble.com/v2/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
                body: JSON.stringify(newProject),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Project added successfully", data);
                })
                .catch((error) => {
                    console.log("Error adding project", error);
                });
        };
    
    const handleDeleteProject = (id) => {
        // delete a project from the API
            fetch(`https://api.dribbble.com/v2/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
                body: JSON.stringify(project.id),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Project added successfully", data);
                })
                .catch((error) => {
                    console.log("Error adding project", error);
                });
        };
        
        const handleUpdateProject = (id, updatedProject) => {
        // Update a project in the API

            fetch(`https://api.dribbble.com/v2/projects/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
                body: JSON.stringify(updatedProject),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Project added successfully", data);
                })
                .catch((error) => {
                    console.log("Error adding project", error);
                });
        };

        return  (
            (loading ? (<p>Loading...</p>) : (
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    {/* <button onClick={() => handleAddProject(newProject)}>Add Project</button> */}
                    <button onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
                    <button onClick={() => handleUpdateProject(project.id, updatedProject)}>Update Project</button>
                </div>
            )
            )

        )
}

export default ProjectItem;