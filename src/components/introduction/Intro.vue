<template>
  <section class="intro-hero">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <g-image class="intro-hero-img"
            src="~/assets/images/profile.jpg"
            alt=""
            quality="100"
            width="250"
            height="250"/>
            <h2 class="hero-title">Hello, I'm <strong>{{ personal.name }}</strong></h2>
            <p class="hero-tagline">
              I am a <strong>Web Developer</strong>
            </p>
        </div>
        <div class="col-sm-12 mt-5">
          <intro-social :socials="socials" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IntroSocial from './IntroSocial.vue'
export default {
  name: "",
  props: {
    'socials': {
      type: Array,
      required: false,
      default: function() {
        return []
      }
    },
    'personal': {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    }
  },
  components: {
    VueTyper: () => import('vue-typer').then(m => m.VueTyper),
    IntroSocial
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
p {
  line-height: 30px;
  margin-bottom: 20px;
}
.intro-hero {
  background: url(../../assets/images/intro-hero.jpg) no-repeat scroll 0 0;
  background-size: cover;
  padding-top: 90px;
  padding-bottom: 50px;
  color: #fff;
  position: relative;
  z-index: 1;
}
.intro-hero-img {
  border-radius: 50%;
}
.hero-title {
  font-size: 36px;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 20px;
}
.hero-tagline {
  font-size: 30px;
}
</style>
