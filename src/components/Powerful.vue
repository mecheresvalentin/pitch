<template>
  <section class="powerful">
    <div class="left-img-power">
      <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/e_trim,f_auto/w_300,c_scale/v1602617047/website-assets/home/integrations-camera.png" alt="">
    </div>
    <div class="right-img-power">
      <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/e_trim,f_auto/w_300,c_scale/v1602617047/website-assets/home/integrations-chart.png" alt="">
    </div>
    <div class="container">
      <div class="wrap jcc">
        <div class="col-power-title">
          <p class="power-p">Powerful & connected</p>
          <h1 class="power-h1">Bring all your work <br> together</h1>
          <p class="power-p1">Pitch works with the tools you already use to help your presentations come alive. Add data, images, GIFs, videos, and more to tell rich and immersive stories. When you’re ready to share, your decks can go anywhere.</p>
        </div>
        <div class="col-power-video">
          <video class="power-video" data-fallback-image="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Integrations_z1zkd8.jpg" muted="muted" autoplay loop poster="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Integrations_z1zkd8.jpg" width="960" height="540"><source src="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Integrations_z1zkd8.mp4" type="video/mp4"></video>
        </div>
      </div>
      <div class="wrap mt-2 jcc">
        <div class="col-card-power">
          <div class="card_1">
              <div>
                <p>Don't just present. <br> Pitch.</p>
              </div>
              <div class="card-image">
                <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1603194035/blog/launch_blog_cover_forhome.jpg" alt="">
              </div>
              <div class="card-bottom">
                <a href="#">Read the article</a> <svg height="8" viewBox="0 0 27 8" width="27" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M23.172.464l3.182 3.182a.5.5 0 010 .708l-3.182 3.182a.5.5 0 11-.707-.708L24.793 4.5H0v-1h24.793l-2.328-2.328a.5.5 0 11.707-.708z"></path></svg>
              </div>
          </div>
        </div>
        <div class="col-card-power">
          <div class="card_2">
              <div>
                <p>And we’re just <br> getting started.</p>
              </div>
              <div>
                <p class="card_2_text">We’re working to build presentation software that people truly love. That’s no small feat. Interested in what inspired us to tackle this challenge? Wondering where you might fit in? Then read on.</p>
              </div>
              <div class="card-bottom">
                <a href="#">Learn more about Pitch</a> <svg height="8" viewBox="0 0 27 8" width="27" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M23.172.464l3.182 3.182a.5.5 0 010 .708l-3.182 3.182a.5.5 0 11-.707-.708L24.793 4.5H0v-1h24.793l-2.328-2.328a.5.5 0 11.707-.708z"></path></svg>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.powerful {
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  background-image: linear-gradient(rgb(206, 224, 255) 0%, rgba(210, 223, 247, 0) 10%)
}
.left-img-power,
.right-img-power {
  position: absolute;
  width: 16vw;
  min-width: 12rem;
  z-index: 0;
}
.left-img-power {
  top: 10%;
  left: 0;
}
.right-img-power {
  top: 20%;
  right: 0;
}
.mt-2 {
  margin-top: 8rem
}
.col-power-title {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  z-index: 1;
  .power-p {
    color: #334ac0;
    font-family: 'Bold';
    text-transform: uppercase;
  }
  .power-h1 {
    font-family: 'Bold';
    font-size: calc(2.5vw + 1rem);
    color: #2b2a35;
    line-height: 1;
    margin: 2.4rem 0;
  }
  .power-p1 {
    color: #545465;
    font-size: calc(.1vw + 1rem);
  }
}
.col-power-video {
      flex: 0 0 100%;
      max-width: 100%;
      margin-top: 4rem;
      margin-bottom: -20px;
      z-index: 1;
    .power-video {
      width: 100%;
      height: auto;
    }
  }
.col-card-power {
  flex: 0 0 100%;
  max-width: 100%;
  margin: 2rem 1rem;
  .card_1, .card_2 {
    display: flex;
    overflow: hidden;
    flex: 1;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0.8rem;
    height: 100%;
    box-shadow: 0 0 0 1px #dddfe5;
    img {
      margin: 2rem 0;
    }
    p {
      font-family: 'Bold';
      font-size: calc(1.5vw + 1rem);
      line-height: 1;
    }
    a {
      font-family: 'Bold';
      text-decoration: none;
      color: #334ac0;
    }
    .card-bottom {
      margin-top: auto;
    }
  }
  .card_1 {
    border: 2px solid #f0f0f0c7;
    p {
      font-family: 'Bold';
    }
    .card-bottom {
      svg {
        fill: #334ac0
      }
    }
  }
  .card_2 {
    background: linear-gradient(91.14deg, #4966f7 0%, #8253ff 122.55%);
    box-shadow: none;
    .card_2_text {
      font-family: 'Regular';
      font-size: calc(.3vw + 1rem);
      line-height: 2;
      margin-top: 2rem;
    }
    p {
      color: #fff;
    }
    .card-bottom {
      a {
        color: #fff;
      }
      svg {
        fill: #fff;
      }
    }
  }
}
@media (min-width: 800px) {
  .col-card-power {
    flex: 0 0 40%;
    max-width: 40%;
    margin: 2rem 1rem;
  }
}
@media (min-width: 991px) {
  .col-power-title {
    flex: 0 0 70%;
    max-width: 70%;
    text-align: center;
    .power-p {
      color: #334ac0;
      font-family: 'Bold';
      text-transform: uppercase;
    }
    .power-h1 {
      font-family: 'Bold';
      font-size: calc(2.5vw + 1rem);
      color: #2b2a35;
      line-height: 1;
      margin: 2.4rem 0;
    }
    .power-p1 {
      color: #545465;
      font-size: calc(.1vw + 1rem);
    }
  }
  .col-power-video {
      flex: 0 0 1000px;
      max-width: 1000px;
      margin-top: 4rem;
      margin-bottom: -20px;
      z-index: 1;
    .power-video {
      width: 100%;
      height: auto;
    }
  }
  .col-card-power {
    flex: 0 0 40%;
    max-width: 40%;
    margin: 2rem 1rem;
  }
}
</style>
