<template>
  <section class="collab">
    <div class="container">
      <div class="wrap jcc">
        <div class="col-collab-title">
          <p class="collab-p">Collaborative by design</p>
          <h1 class="collab-h1">Create, collaborate, and <br> celebrate in one place</h1>
          <p class="collab-p1">When you’re working on projects, feedback is shared, meetings are held, tasks go through assignment and signoff, and great outcomes receive praise. Do all that and more without leaving Pitch.</p>
        </div>
        <div class="col-collab-video">
          <video class="collab-video" data-fallback-image="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Collaboration_2760w.jpg" muted="muted" autoplay loop poster="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Collaboration_2760w.jpg"><source src="https://d3x4b1wy4qlu9.cloudfront.net/media/home/Home_Collaboration_2760w.mp4" type="video/mp4"></video>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.collab {
  padding-top: 60px;
  padding-bottom: 0px;
  position: relative;
  background: url('https://res.cloudinary.com/pitch-software/image/upload/f_auto/w_1440,c_scale/v1602763359/website-assets/home/home-collaboration-bubbles-full.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
.col-collab-title {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  .collab-p {
    color: #334ac0;
    font-family: 'Bold';
    text-transform: uppercase;
  }
  .collab-h1 {
    font-family: 'Bold';
    font-size: calc(2.5vw + 1rem);
    color: #2b2a35;
    line-height: 1;
    margin: 2.4rem 0;
  }
  .collab-p1 {
    color: #545465;
    font-size: calc(.1vw + 1rem);
  }
}
.col-collab-video {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 4rem;
    z-index: 1;
  .collab-video {
    width: 100%;
    height: auto;
  }
}
@media (min-width: 991px) {
  .col-collab-title {
    flex: 0 0 65%;
    max-width: 65%;
    text-align: center;
    .collab-p {
      color: #334ac0;
      font-family: 'Bold';
      text-transform: uppercase;
    }
    .collab-h1 {
      font-family: 'Bold';
      font-size: calc(2.5vw + 1rem);
      color: #2b2a35;
      line-height: 1;
      margin: 2.4rem 0;
    }
    .collab-p1 {
      color: #545465;
      font-size: calc(.1vw + 1rem);
    }
  }
  .col-collab-video {
      flex: 0 0 1000px;
      max-width: 1000px;
      margin-top: 4rem;
      margin-bottom: -20px;
      z-index: 1;
    .collab-video {
      width: 100%;
      height: auto;
    }
  }
}
</style>
