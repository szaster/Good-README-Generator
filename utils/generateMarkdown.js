// function to generate markdown for README
function generateFinalMarkdown(data) {
  const markdownContent = `# ${data.title}
  
  ## Description
  ${data.description}
  `;
  return markdownContent;
}

module.exports = { generateMarkdown: generateFinalMarkdown };
