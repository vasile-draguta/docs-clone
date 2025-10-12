export const templates = [
  {
    id: 'blank',
    label: 'Blank Documnet',
    imageUrl: '/blank-document.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Untitled</title></head>
<body>
  <p></p>
</body>
</html>
  `,
  },

  {
    id: 'software-proposal',
    label: 'Software development proposal',
    imageUrl: '/software-proposal.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Software Development Proposal</title></head>
<body>
  <header>
    <h1>Software Development Proposal</h1>
    <p><strong>Client:</strong> {{Client Name}} &nbsp; | &nbsp; <strong>Date:</strong> {{YYYY-MM-DD}}</p>
  </header>

  <section>
    <h2>Executive Summary</h2>
    <p>Brief overview of the project's purpose, goals, and expected impact. Replace this text with a short summary (2–4 sentences).</p>
  </section>

  <section>
    <h2>Project Objectives</h2>
    <ul>
      <li>Objective 1 — {{Describe}}</li>
      <li>Objective 2 — {{Describe}}</li>
    </ul>
  </section>

  <section>
    <h2>Scope of Work</h2>
    <ol>
      <li>Feature / Module A — description</li>
      <li>Feature / Module B — description</li>
    </ol>
  </section>

  <section>
    <h2>Deliverables</h2>
    <ul>
      <li>Deliverable 1 — format / acceptance criteria</li>
      <li>Deliverable 2 — format / acceptance criteria</li>
    </ul>
  </section>

  <section>
    <h2>Timeline</h2>
    <p>High-level milestones and estimated dates:</p>
    <ul>
      <li>Kickoff — {{date}}</li>
      <li>Alpha / Prototype — {{date}}</li>
      <li>Beta — {{date}}</li>
      <li>Production launch — {{date}}</li>
    </ul>
  </section>

  <section>
    <h2>Pricing & Payment</h2>
    <p>Estimated cost: <strong>{{Currency}} {{Amount}}</strong>. Payment schedule: {{e.g. 30% upfront, 40% on milestone, 30% on delivery}}.</p>
  </section>

  <section>
    <h2>Acceptance</h2>
    <p>Signatures:</p>
    <p>Client: _______________________ &nbsp;&nbsp; Date: __________</p>
    <p>Provider: ______________________ &nbsp;&nbsp; Date: __________</p>
  </section>
</body>
</html>
    `,
  },

  {
    id: 'project-proposal',
    label: 'Project proposal',
    imageUrl: '/project-proposal.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Project Proposal</title></head>
<body>
  <header>
    <h1>Project Proposal</h1>
    <p><strong>Project:</strong> {{Project Title}} &nbsp; | &nbsp; <strong>Prepared by:</strong> {{Your Name}}</p>
  </header>

  <section>
    <h2>Background</h2>
    <p>Explain the context and problem this project addresses.</p>
  </section>

  <section>
    <h2>Goals & Success Criteria</h2>
    <ul>
      <li>Goal 1 — measurable criteria</li>
      <li>Goal 2 — measurable criteria</li>
    </ul>
  </section>

  <section>
    <h2>Approach & Methodology</h2>
    <p>Describe how the project will be executed (phases, methods, tools).</p>
  </section>

  <section>
    <h2>Milestones & Timeline</h2>
    <table>
      <thead><tr><th>Milestone</th><th>Deliverable</th><th>ETA</th></tr></thead>
      <tbody>
        <tr><td>Phase 1</td><td>Specification</td><td>{{date}}</td></tr>
        <tr><td>Phase 2</td><td>Implementation</td><td>{{date}}</td></tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>Resources & Budget</h2>
    <p>Required people, tools, and estimated cost: {{Budget}}</p>
  </section>

  <section>
    <h2>Risks & Mitigations</h2>
    <ul>
      <li>Risk 1 — mitigation</li>
      <li>Risk 2 — mitigation</li>
    </ul>
  </section>

  <footer>
    <p>Contact: {{email}} • {{phone}}</p>
  </footer>
</body>
</html>
    `,
  },

  {
    id: 'business-letter',
    label: 'Business letter',
    imageUrl: '/business-letter.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Business Letter</title></head>
<body>
  <p>{{Your Company Name}}</p>
  <p>{{Your Street Address}}</p>
  <p>{{City, State ZIP}}</p>

  <p>{{YYYY-MM-DD}}</p>

  <p>{{Recipient Name}}<br>
     {{Recipient Title}}<br>
     {{Recipient Company}}<br>
     {{Recipient Address}}</p>

  <p>Dear {{Mr./Ms. LastName}},</p>

  <p>Opening paragraph: state the purpose of the letter clearly and politely.</p>

  <p>Middle paragraph(s): provide details, background, and any supporting information. Keep paragraphs short and professional.</p>

  <p>Closing paragraph: summarize any actions required, proposed next steps, or deadlines.</p>

  <p>Sincerely,</p>

  <p><strong>{{Your Name}}</strong><br>{{Your Title}}<br>{{Your Company}}</p>
</body>
</html>
    `,
  },

  {
    id: 'resume',
    label: 'Resume',
    imageUrl: '/resume.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Resume - {{Your Name}}</title></head>
<body>
  <header>
    <h1>{{Your Name}}</h1>
    <p>{{Email}} • {{Phone}} • {{City, Country}} • {{LinkedIn / GitHub}}</p>
  </header>

  <section>
    <h2>Professional Summary</h2>
    <p>One- or two-sentence summary highlighting strengths, experience, and career goal.</p>
  </section>

  <section>
    <h2>Skills</h2>
    <ul>
      <li>Skill 1</li>
      <li>Skill 2</li>
      <li>Skill 3</li>
    </ul>
  </section>

  <section>
    <h2>Experience</h2>
    <article>
      <h3>{{Role Title}} — {{Company}}</h3>
      <p><em>{{Start — End}}</em></p>
      <ul>
        <li>Achievement or responsibility with quantifiable outcome if possible.</li>
        <li>Another achievement or responsibility.</li>
      </ul>
    </article>
    <!-- Repeat for other roles -->
  </section>

  <section>
    <h2>Education</h2>
    <p><strong>{{Degree}}, {{Institution}}</strong> — {{Graduation Year}}</p>
  </section>

  <section>
    <h2>Projects</h2>
    <ul>
      <li><strong>{{Project Name}}</strong>: short description + tech stack + link</li>
    </ul>
  </section>
</body>
</html>
    `,
  },

  {
    id: 'cover-letter',
    label: 'Cover letter',
    imageUrl: '/cover-letter.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Cover Letter - {{Your Name}}</title></head>
<body>
  <p>{{YYYY-MM-DD}}</p>

  <p>{{Hiring Manager Name}}<br>
    {{Company}}<br>
    {{Company Address}}</p>

  <p>Dear {{Hiring Manager LastName}},</p>

  <p>Opening: State the role you're applying for and a concise reason why you're a strong fit.</p>

  <p>Body: Highlight 2–3 achievements or skills that match the job description. Use concrete examples (tools, outcomes, numbers).</p>

  <p>Closing: Reiterate enthusiasm, mention availability for interview, and thank the reader.</p>

  <p>Sincerely,</p>
  <p><strong>{{Your Name}}</strong><br>{{Email}} • {{Phone}} • {{LinkedIn}}</p>
</body>
</html>
    `,
  },

  {
    id: 'letter',
    label: 'Letter',
    imageUrl: '/letter.svg',
    inititalContent: `
<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Letter</title></head>
<body>
  <p>{{YYYY-MM-DD}}</p>

  <p>Dear {{Recipient Name}},</p>

  <p>First paragraph: friendly opening and reason for writing.</p>

  <p>Second paragraph: the details you want to communicate (story, request, update).</p>

  <p>Final paragraph: wrap up, next steps, thank you or call to action.</p>

  <p>Warm regards,</p>
  <p>{{Your Name}}</p>
</body>
</html>
    `,
  },
];
