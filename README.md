# Character Sheets

## Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [IIS Installation](#iis-installation)

## Requirements

- Latest version of node
- Polymer CLI (Polymer 2.0)
- Ask for data file location

## Usage

```bash
npm install
bower install
polymer serve
```

## IIS Installation

1. Install https://www.iis.net/downloads/microsoft/url-rewrite
1. Open IIS
1. Add a website called CharacterSheets
1. Point the physical path to the root of this directory
1. Set the port to any unused port on your machine
1. Browse the application