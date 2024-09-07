"use strict";
const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const university = document.getElementById('university').value;
    const degree = document.getElementById('degree').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value.split(',');
    // Create editable resume HTML dynamically
    const resumeHTML = `
    <h2>Personal Information</h2>
    <p><strong>Name:</strong> <span contenteditable="true" id="editable-name">${name}</span></p>
    <p><strong>Email:</strong> <span contenteditable="true" id="editable-email">${email}</span></p>
    <p><strong>Phone:</strong> <span contenteditable="true" id="editable-phone">${phone}</span></p>

    <h2>Education</h2>
    <p><strong>University:</strong> <span contenteditable="true" id="editable-university">${university}</span></p>
    <p><strong>Degree:</strong> <span contenteditable="true" id="editable-degree">${degree}</span></p>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> <span contenteditable="true" id="editable-job-title">${jobTitle ? jobTitle : "N/A"}</span></p>
    <p><strong>Company:</strong> <span contenteditable="true" id="editable-company">${company ? company : "N/A"}</span></p>

    <h2>Skills</h2>
    <ul id="editable-skills">
      ${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
    </ul>
  `;
    // Display the editable resume in the resume container
    resumeDisplay.innerHTML = resumeHTML;
});
