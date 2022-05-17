# savvyard

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/visionspider/savvyard">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Savvyard</h3>

  <p align="center">
    An awesome greenhouse UI to monitor activity!
    <br />
    <a href="https://github.com/visionspider/savvyard"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=KgrU0RVNfMo">View Demo</a>
    ·
    <a href="https://github.com/visionspider/savvyard/issues">Report Bug</a>
    ·
    <a href="https://github.com/visionspider/savvyard/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Savvyard][product-screenshot]](https://example.com)

<p>Savvyard is meant to be an aid for greenhouse monitoring. Usually smart greenhouses are automated. Meaning self-sufficient for the most part. But things don't always go right. Thats where Savvyard comes to the rescue. With Savvyard you can monitor greenhouse activities from a distance and keep that peace of mind while enjoying your life.</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Javascript](https://www.javascript.com/)
- [React.js](https://reactjs.org/)
- [CSS](https://vuejs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->

- vscode
  ```sh
  https://code.visualstudio.com/Download
  ```
  - node
  ```sh
  https://nodejs.dev/learn/how-to-install-nodejs
  ```

### Installation

_Follow instructions below._

1. Get a free API Key at [https://opencagedata.com/](https://opencagedata.com/) & [https://openweathermap.org/current](https://openweathermap.org/current)
2. Clone the repo
   ```sh
   git clone https://github.com/visionspider/savvyard.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Create a `.env` file inside server folder
5. Enter your API keys in `.env`
   ```js
   MONGO_URI=mongodb+srv:/&/<username>:<password>@cluster0.tjwvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
   ```
   <!-- prettier-ignore -->
   ```js
   OPENCAGE_API_KEY=a34bfgdcd32
   ```
   <!-- prettier-ignore -->
   ```js
   OPENWEATHER_API_KEY=a34bfgdcd32
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<div class="single-project-container"> 
  <img src="/images/savvyard-large.png" alt="mobile version of project: " height="50%" width="50%">
    <img src="./images/savvyard-large.png" alt="mobile version of project: " height="50%" width="50%">
  <img src="/images/savvyard-large2.png" alt="mobile version of project: " height="50%" width="50%">
  <h3>Motivation</h3>
  <p>Personally I have a passion for off-grid living and have looked extensively into greenhouses / aquaponics / hydroponics projects of others. As someone who also enjoys traveling I would like a way to monitor my plant babies while I am gone. As a compliment to those who have such products, a nice UI that could help share information and manipulate devices while one is away (traveling / etc…). This is my goal to achieve with this UI.</p>
  <img src="/images/savvyard-large3.png" alt="mobile version of project: " height="50%" width="50%">
  <h3>Features</h3>
  <ul><li>Being able to add/remove an infinite amount of devices/sensors/zones.</li><li>Being able to manually turn on controls on a sensor/device.</li><li>Being able to visualize data on the screen.</li><li>Being able to download data.</li></ul>
  <h3>Design</h3>
  <p>When designing I took inspiration off of apps for smart homes.</p><h3>Issues</h3>
  <p>Creating the feature of adding and removing an infinite amount of devices/sensors/zones. Working with data that is nested deep into a data set.</p>
  
 <figure class="video-wrap"><div class="video-container"><iframe src="https://www.youtube.com/embed/KgrU0RVNfMo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></figure>
   
  </div>
</div>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create Dataset and DB
- [x] Demo user Creation
- [x] Setup internal & external APIs following RESTful principles
- [x] Create logic to simulate temperature loss in greenhouse by utilizing data from weather API
- [x] Test and refactor Backend with Insomnia / Postman
- [x] Mobile First Design
- [x] Accessible Design
- [x] Ability to add / remove n amount of components and nested components
- [x] Ability to save settings for sensors and devices
- [x] Test and refactor Frontend
- [ ] Add more devices and sensors (LIGHT / CARBON DIOXIDE / SOIL MOISTURE / SOIL pH / WIND SPEED / PRECIPITATION SENSORS)
- [ ] Upgrade visuals of devices running
- [ ] Upgrade visual queues of saved/error
- [ ] Upgrade data visualization (more meaningful visualizations)
- [ ] Add visualization of power usage
- [ ] User log in
- [ ] Calendar (to visualize a schedule)
- [ ] Allow user to create logic
- [ ] More test and refactoring
- [ ] Cross-platform deployment
  - [ ] Deploy web app
  - [ ] Deploy android app (React Native)
  - [ ] Deploy desktop app (ElectronJS)
- [ ] Multi-language Support
  - [ ] French
  - [ ] Chinese
  - [ ] Spanish
- [ ] Launch alpha v1 (Public testing)
- [ ] Fix more bugs

See the [open issues](https://github.com/visionspider/savvyard/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](license-url) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@DavieGie](https://twitter.com/DavieGie) - d.guillaumant.m@hotmail.com

Project Link: [https://github.com/visionspider/savvyard](https://github.com/visionspider/savvyard)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/visionspider/savvyard.svg?style=for-the-badge
[contributors-url]: https://github.com/visionspider/savvyard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/visionspider/savvyard.svg?style=for-the-badge
[forks-url]: https://github.com/visionspider/savvyard/network/members
[stars-shield]: https://img.shields.io/github/stars/visionspider/savvyard.svg?style=for-the-badge
[stars-url]: https://github.com/visionspider/savvyard/stargazers
[issues-shield]: https://img.shields.io/github/issues/visionspider/savvyard.svg?style=for-the-badge
[issues-url]: https://github.com/visionspider/savvyard/issues
[license-shield]: https://img.shields.io/github/license/visionspider/savvyard.svg?style=for-the-badge
[license-url]: https://github.com/visionspider/savvyard/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/david-guillaumant-mergler/
[product-screenshot]: images/screenshot.png

Watch the video!

https://www.youtube.com/watch?v=KgrU0RVNfMo
