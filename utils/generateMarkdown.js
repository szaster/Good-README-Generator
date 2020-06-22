function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toTocLine(sectionName) {
  return `- [${sectionName}](#${sectionName})`;
}

function makeToc(sections) {
  sections.shift();
  const content = sections.map(capitalize).map(toTocLine).join("\n");
  return `## Table of Contents\n${content}\n`;
}

// function to generate markdown for README
function generateFinalMarkdown(data) {
  const markdownContent = `# ${data.title}

${makeToc(Object.keys(data))}

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

## Questions

If you any additional questions you can reach me via my [Github user profile](https://www.github.com/${data.github}).

You can also [write me directly](mailto:${data.email}).
`;
  return markdownContent;
}

module.exports = { generateMarkdown: generateFinalMarkdown };
