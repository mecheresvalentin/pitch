<template>
  <section class="boost">
    <div class="left-img-boost">
      <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/e_trim,f_auto/w_300,c_scale/v1602609948/website-assets/home/workflow-items.png" alt="">
    </div>
    <div class="right-img-boost">
      <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/e_trim,f_auto/w_300,c_scale/v1602610341/website-assets/home/workflow-slide.png" alt="">
    </div>
    <div class="container">
      <div class="wrap jcc">
        <div class="col-boost-title">
          <p class="boost-p">Fast & beautiful</p>
          <h1 class="boost-h1">Boost productivity without <br> sacrificing creativity</h1>
          <p class="boost-p2">Pitch gives you all the tools needed to unleash your inner designer. Set up branded templates, or let your imagination run wild with our template gallery. Once you start editing, innovative features will help you save hours.</p>
        </div>
        <div class="col-boost-video">
          <video class="boost-video" data-fallback-image="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Workflow_2760w.jpg" autoplay loop muted="muted" poster="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Workflow_2760w.jpg"><source src="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Workflow_2760w.mp4" type="video/mp4"></video>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.boost {
  padding-top: 60px;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(68.61deg, rgb(120, 102, 244) 25%, rgb(107, 208, 250) 120%)
}
.left-img-boost,
.right-img-boost {
  position: absolute;
  width: 20vw;
  min-width: 12rem;
  z-index: 0;
}
.left-img-boost {
  top: 10%;
  left: 0;
}
.right-img-boost {
  bottom: -5%;
  right: 0;
}
.col-boost-title {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  color: #fff;
  z-index: 1;
  .boost-p {
    font-family: 'Bold';
    font-size: calc(.2vw + 1rem);
  }
  .boost-h1 {
    margin: 2.2rem 0;
    font-family: 'Bold';
    font-size: calc(3vw + 1rem);
    line-height: 1.2
  }
  .boost-p2 {
    font-family: 'Regular';
    font-size: calc(.2vw + 1rem);
  }
}
.col-boost-video {
  flex: 0 0 100%;
  max-width: 100%;
  margin-top: 4rem;
  margin-bottom: -20px;
  z-index: 1;
  .boost-video {
    width: 100%;
    height: auto;
  }
}
@media (min-width: 991px) {
  .col-boost-title {
    flex: 0 0 77%;
    max-width: 77%;
    text-align: center;
    color: #fff;
    z-index: 1;
    .boost-p {
      font-family: 'Bold';
      font-size: calc(.2vw + 1rem);
    }
    .boost-h1 {
      margin: 2.2rem 0;
      font-family: 'Bold';
      font-size: calc(3vw + 1rem);
      line-height: 1.2
    }
    .boost-p2 {
      font-family: 'Regular';
      font-size: calc(.2vw + 1rem);
    }
  }
  .col-boost-video {
    flex: 0 0 1000px;
    max-width: 1000px;
    margin-top: 4rem;
    margin-bottom: -20px;
    z-index: 1;
    .boost-video {
      width: 100%;
      height: auto;
    }
  }
}
</style>
