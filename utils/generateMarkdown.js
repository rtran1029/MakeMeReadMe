module.exports = data => {
    const {license} = data;
    console.log(data);
    return `
# ${data.title}
${createBadge(license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(license)}
## Contributing
${data.contribution}
## Tests
${data.tests}
## Questions
Contact me: <br/>
[GitHub](https://github.com/${data.username})
<${data.email}>
`;
}