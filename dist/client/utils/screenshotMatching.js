"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_storyshots_1 = require("@storybook/addon-storyshots");
const addon_storyshots_puppeteer_1 = require("@storybook/addon-storyshots-puppeteer");
const node_logger_1 = require("@storybook/node-logger");
const path = require('path');
const fs = require('fs');
const pathToStorybookStatic = path.join(__dirname, '../..', 'storybook-static');
exports.runStoryshotsTest = (suite, storyKindRegex) => {
    if (!fs.existsSync(pathToStorybookStatic)) {
        node_logger_1.logger.error('You are running image snapshots without having the static build of storybook. Please run "yarn run build-storybook" before running tests.');
    }
    else {
        addon_storyshots_1.default({
            suite,
            storyKindRegex,
            framework: 'react',
            test: addon_storyshots_puppeteer_1.imageSnapshot({
                storybookUrl: `file://${pathToStorybookStatic}`
            }),
        });
    }
};
//# sourceMappingURL=screenshotMatching.js.map