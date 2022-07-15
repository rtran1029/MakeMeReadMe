function renderLicenseSection(license) {
    if (license === 'N/a') {
        return '';
    }
    return `${license}`;
};


module.exports = data => {
    const {license} = data;
    console.log(data);
    return `
# ${data.title}
## Description
${data.description}

---

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation
${data.installation}
## License
${renderLicenseSection(license)}
## Tests
${data.tests}
## Credits
${data.credits}

---

## Contact Info
Contact me: <br/>
[GitHub](https://github.com/${data.username})
<${data.email}>
`;
}