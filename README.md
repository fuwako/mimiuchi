<p align="center">
  <img src="https://mimiuchi.com/logo-256x256.png" width="100">
</p>

# mimiuchi: speech-to-text

mimiuchi is a free, customizable, OSC capable, speech-to-text application for displaying text or relaying it to other applications such as VRChat. Its customizable text window is also designed to be paired with applications like [OBS (Open Broadcaster Software)](https://obsproject.com/).

You can try it out right now at [mimiuchi.com](https://mimiuchi.com/) on Google Chrome, Safari, or Microsoft Edge.

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

### Why?

This tool was designed for communication accessibility. It provides another way for people to display text in various formats. It is free and focused on privacy. A very similar application is [web captioner](https://webcaptioner.com/). However, I wanted to expand upon it and develop something unique!

## Web Speech API

mimiuchi uses [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to perform speech-to-text, which is a [browser dependent](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility) API. Most browsers, such as Google Chrome or Microsoft Edge, will respectively upload your audio to Google Cloud Platform or Microsoft Azure to have it processed while the webpage never gets direct access to it. You can read about it [here](https://www.google.com/chrome/privacy/whitepaper.html#speech) in the Google Chrome Privacy Whitepaper. I chose Web Speech API, because it is completely free and requires no account to access. Unfortunately, its free use is disabled in Electron's Chromium. Therefore, speech-to-text can only be achieved in the web browser. This adds the slight complexity of requiring a "middle application" when you want to interface with local applications like VRChat. However, I think that this approach is worthwhile as it provides a free way to use powerful speech-to-text models for people who don't have the means to pay.

In the future, I would like to support a standalone desktop experience, but this is currently on hold until I determine demand for this project.

## To-Do

In no particular order...

- more customization for text window
- ~~better intermediate text results~~ ✅
- ~~text-to-speech~~ ✅
- more TTS/STT options (for standalone desktop experience)
- VRChat text shader support (sending character data to float params)
- ~~add ability to export settings/transcripts~~✅
- ~~better webkit/safari support~~✅
- Spotify support (maybe)
- OBS websocket and 'text source' support
- option for second 'control panel' type screen with focus on quick switching between settings
- better generic osc support
- ~~translation support~~✅
- ~~webhook/websocket customization to connect to other apps that aren't related to me~~✅
- documentation
- steamvr integration
- continuous text transmission option for VRChat
- locally run whisper c++ bindings / WebGPU based inference
  - this point is really important to me, because I want a truly low latency private STT system. but... I want to make sure I do it the right way, such that it can work entirely in the browser, utilizing the full power of your GPU or CPU, completely local and with minimal latency. A lot of this is very new, so it may take some time to iron it out. the first versions of it may differ greatly from the end goal.

## Download

See the [release page](https://github.com/naeruru/mimiuchi/releases) to install the latest version of the desktop application. The desktop version lets you use additional features like OSC.

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
