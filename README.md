<p align="center">
  <img src="https://mimiuchi.com/logo-256x256.png" width="100">
</p>

# mimiuchi: speech-to-text

mimiuchi is a free, customizable, and OSC capable speech-to-text application for displaying text or relaying it to other applications such as VRChat. Its customizable text window is also designed to be paired with applications like [OBS (Open Broadcaster Software)](https://obsproject.com/).

You can try it out at [mimiuchi.com](https://mimiuchi.com/) on Google Chrome, Safari, or Microsoft Edge.

### Features

- Speech to Text
- Text to Speech
- On-Device Translations
- OSC Broadcasting
- (WIP) Custom OSC parameter execution via phrases ("Turn my marker on." → `/avatar/parameter/Marker True`)
- Theme Customization

### Supported Languages
- English
- Spanish
- Japanese

## How to Use

### Speech to Text

Simply go to [mimiuchi.com](https://mimiuchi.com/) and click the microphone button! You will need to grant access the first time that you do it. Currently, mimiuchi uses Web Speech API to perform speech-to-text, which is only supported on the web version. You [can read more about it below](#web-speech-api).

### OSC Broadcasting

The web application is necessary for speech-to-text, and the desktop application is necessary for OSC broadcasting. They are simultaneously used together to use both functions.

1. Download and install the [desktop application](https://github.com/naeruru/mimiuchi/releases/).
2. Open both [mimiuchi.com](https://mimiuchi.com/) and the desktop application.
3. In mimiuchi.com, click the microphone icon to begin transmitting your microphone and speech-to-text.
4. In mimiuchi.com, click the broadcasting icon to start OSC broadcasting. This automatically enables OSC broadcasting in the desktop application. When broadcasting is enabled, the web version will relay all speech-to-text to the desktop version.

Microphone Input → Web Application (Speech to Text) → Desktop Application (OSC Broadcasting)

![mimiuchi-ws_example](https://github.com/naeruru/mimiuchi/assets/9059594/4a85352f-7183-448e-931e-0ab07054231e)

Speech to Text → OSC Broadcasting → VRChat

![mimiuchi-vrchat_example](https://github.com/naeruru/mimiuchi/assets/9059594/666900a9-d176-4c39-a5dd-6a320a46cd8c)

# Additional Info

## Web Speech API

mimiuchi uses [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to perform speech-to-text, which is a [browser dependent](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility) API. Most browsers, such as Google Chrome or Microsoft Edge, will respectively upload your audio to Google Cloud Platform or Microsoft Azure to have it processed while the webpage never gets direct access to it. You can read about it [here](https://www.google.com/chrome/privacy/whitepaper.html#speech) in the Google Chrome Privacy Whitepaper. Unfortunately, its free use is limited in Electron's Chromium. Therefore, speech-to-text can only be achieved in the web browser. This adds the slight complexity of requiring a "middle application" for interfacing with local applications like VRChat.

## Download

See the [Releases page](https://github.com/naeruru/mimiuchi/releases) to install the latest version of the desktop application. The desktop version allows you to use additional features like OSC.

## Building it yourself

### Requirements

- [NodeJS 18.x+](https://nodejs.org/en/)

### Setup

Use `npm install` to install dependencies.

Use `npm run dev` to run the application. It will run an electron version and web version.

Or you can use `npm run build` to build the application. It will create an exe file in `release/`.

## Special Thanks

- fuopy for the name, mimiuchi, which lends the name from a project that they made long ago!

## License

This project is licensed under GNU General Public License v3.0 - see the [LICENSE.txt](LICENSE.txt) file for details.
