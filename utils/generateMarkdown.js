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

## Questions

If you any additional questions you can reach me via my [Github user profile](https://www.github.com/${data.github}).

You can also [write me directly](mailto:${data.email}).
`;
  return markdownContent;
}

module.exports = { generateMarkdown: generateFinalMarkdown };
