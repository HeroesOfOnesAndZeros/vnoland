<template>
  <div class="home">
    <a href="https://github.com/oslabs-beta/vno">
      <img id="vnoLogo" src="https://i.ibb.co/kDnqSNP/vnoLogo.png" />
    </a>
    <h1>A Vue / Deno Adapter</h1>
    <br />
    <div class="logos">
      <a href="https://github.com/oslabs-beta/vno" target="_blank">
        <img id="gitLogo" src="https://i.ibb.co/JzTPTMZ/git-logo.png"
      /></a>
      <a href="https://deno.land/x/vno@v1.0-beta.5" target="_blank">
        <img id="denoLogo" src="https://i.ibb.co/0ZP9MdP/deno-logo.png"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',

  props: {
    msg: String,
  },
};
</script>
<style>
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
</style>