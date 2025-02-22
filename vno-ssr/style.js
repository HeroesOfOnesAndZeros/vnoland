const styles = `<style>
.docItemContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10% 0;
}
.codeblock {
  background-color: #1a1a1a;
  color: rgb(250, 231, 231);
  padding-top: 25px;
  display: block;
  text-align: left;
  padding: 1.75%;
  margin-bottom: 25px;
  margin-top: 55px;
  min-height: fit-content;
  width: 25vw;
  min-width: 300px;
  max-width: 500px;
  animation: glowing 3000ms infinite;
}
@keyframes glowing {
  0% {
    background-color: #1a1a1a;
    box-shadow: 0 0 5px #79d0b2;
  }
  50% {
    background-color: #1a1a1a;
    box-shadow: 0 0 20px #79d0b2;
  }
  100% {
    background-color: #1a1a1a;
    box-shadow: 0 0 5px #79d0b2;
  }
}

.gif {
  width: 98%;
  max-width: fit-content;
}
.desc {
  width: 40vw;
  min-height: fit-content;
  min-width: 250px;
  max-width: 500px;
  text-align: justify;
  margin: 25px;
  line-height: 1.3;
}
.desc p {
  letter-spacing: 1.1;
}

.docnav-element {
  margin: 5px;
  padding: 8px;
}
.docnav-element:hover {
  color: #57d3af;
}

a:link {
  text-decoration: none;
}
.logos {
  display: flex;
  justify-content: center;
  padding: 16px;
}
.home h1 {
  padding-top: 16px;
}
#gitLogo {
  margin-right: 0.4rem;
}
#denoLogo {
  margin-left: 0.4rem;
}
#vnoLogo {
  margin-top: 4.5rem;
  max-width: 50%;
}
#logoText {
  justify-content: center;
}
#gitText {
  margin-right: 1.8rem;
  margin-left: 0.5rem;
}
#gitText:hover {
  color: #57d3af;
}
#denoText {
  margin-left: 0rem;
}
.docTags {
  color: white;
}
.docTags:hover {
  color: #57d3af;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

a {
  color: #ffffff;
}

.bio {
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.bio a {
  padding: 8px;
}

.flip-box {
  background-color: transparent;
  margin: 16px;
  padding: 16px;
  height: 300px;
  width: 300px;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}
.flip-box-front,
.flip-box-back {
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}
.flip-box-front img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.flip-box-back {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: -5px 5px 20px 3px #57d3b082;
  color: white;
  transform: rotateY(180deg);
}

.flip-box-front {
  background-color: transparent;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
#meetTeam {
  display: inline-block;
  text-align: center;
  font-size: 6rem;
}

h2 {
  font-family: Chalet-NewYorkNineteenSixty, 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
}

.docs {
  padding: 25px;
}

h1.pad {
  font-size: 8vh;
  letter-spacing: 2px;
}
#doc-nav {
  margin-bottom: 40px;
  padding: 0 6vw;
  position: sticky;
  top: 0;
  background: #15131342;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.moreinfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #15131342;
  bottom: 0;
  padding: 10px 0 6px;
}

.linkies:hover {
  color: #57d3af;
}

#denoLogo {
  width: 3.1rem;
  height: 3rem;
}
#gitLogo {
  width: 3rem;
  height: 3rem;
}

@import url('https://db.onlinewebfonts.com/c/6d253426005e3fdcd9f69455050bd7d7?family=Chalet-NewYorkNineteenSixty');
html {
  scroll-behavior: smooth;
}
body {
  background-color: #203a42;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

.teamWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
}

#meetTeam {
  font-size: 9vw;
}

.nav {
  box-shadow: 0px 0px 10px 0px #132429;
  padding: 20px 6vw;
  margin: 0;
  background-color: #1a3037;
  list-style-type: none;
  display: flex;
  color: white;
  justify-content: space-between;
}
.nav li {
  color: white;
  cursor: pointer;
  padding: 5px;
}
.nav a {
  font-size: 2rem;
  font-weight: bold;
  font-family: Chalet-NewYorkNineteenSixty, Avenir, Helvetica, Arial, sans-serif;
}
.nav a:active {
  text-decoration: none;
}
.nav li:hover {
  color: #57d3af;
  text-decoration: none;
}
#app {
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: Chalet-NewYorkNineteenSixty, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #79d0b2;
  margin: 0;
}

#denoLogo {
  width: 3.1rem;
  height: 3rem;
}
#gitLogo {
  width: 3rem;
  height: 3rem;
}
#built {
  font-size: 16px;
  font-style: italic;
  margin-top: 10px;
  position: fixed;
  left: 15px;
  bottom: 15px;
  z-index: -5;
}

.teamLowgos {
  display: block;
  position: fixed;
  z-index: -3;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #15131342;
  bottom: 0;
  padding: 10px 0 6px;
}
</style>`
 export default styles