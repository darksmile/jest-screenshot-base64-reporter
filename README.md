# jest-screenshot-base64-reporter
Report failing screenshot tests with base64 for using in CI without access to locally created diff image files.
I'm using it with `jest-image-snapshot` npm package

## Usage
Install with `npm install jest-screenshot-base64-reporter`
Add reporter to the list of reporters in jest config: `"reporters": ["default", ["jest-screenshot-base64-reporter", {"diffPath": "..."}]]`

*Note:* Do not delete the default reporter since this one only adds base64 encoded image files to the end of report. Any other info should be added by other reporters

## Options
### diffPath
It's required. Path to folder where `jest-image-snapshot` stores diff files
