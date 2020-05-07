function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## License 

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Any questions? Email me at <a href="mailto:${data.email}">${data.email}</a>
<img src="${data.image}" alt="imageOfMe" width="100" height="100">

`;
}

module.exports = generateMarkdown;
