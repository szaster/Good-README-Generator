// function to generate markdown for README
function generateFinalMarkdown(data) {
  const markdownContent = `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}
`;
  return markdownContent;
}

module.exports = { generateMarkdown: generateFinalMarkdown };
