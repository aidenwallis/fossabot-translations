# Fossabot Translations

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e3d4b91-9f8c-4a13-9ef9-0073739ea685/deploy-status)](https://app.netlify.com/sites/fossabot-translations/deploys)

The resource hub for all translations on Fossabot! All translations are stored in JSON files, we host these simply on Netlify and are always open to more translation PRs to aid the effort in translating Fossabot for everyone!

Languages are broken down into their own respectable folders, categorized by their [ISO 639-1 codes](https://ewikipedia.org/wiki/List_of_ISO_639-1_codes), for example, all English translations are available under `en`.

## Contributions

**This repo is far from finalized yet, please hold off doing translations for now!** While we appreciate your time, we also don't want to waste it, the repo could drastically change over the next few weeks so may not be worth you translating anything till we come to a final setup that we're happy with.

In order to contribute, we ask that you start basing your new language translation set off of the `en` language, and do it in an applicable branch name, something like `new-language-{COUNTRY_CODE}` or something like that, helps us to keep things organised. Whenever we add a new phrase into a language, it will always be in the `en` language first. We haven't thought of the best way to notify everyone to add the equivalent in their own languages, but are working on it.

## Using the translations

Feel free to use the translations! We simply serve the a minified version of `src` over at [translations.fossabot.com](https://translations.fossabot.com). Note that any 404 requests will simply do a 302 redirect back to [fossabot.com](https://fossabot.com). These are completely open source.

## Social Media

[Website](https://fossabot.com) - [Twitter](https://twitter.com/Fossabot) - [Discord](https://fossabot.com/r/discord)
