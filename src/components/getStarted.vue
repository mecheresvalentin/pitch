<template>
  <section class="getStarted">
    <div class="right-img-pitch">
      <img class="img-fluid" src="https://res.cloudinary.com/pitch-software/image/upload/e_trim,f_auto/v1602575241/website-images/images/get-to-know-pitch.png" alt="">
    </div>
    <div class="container">
      <div class="wrap">
        <div class="col-pitch">
          <h1>Get started with Pitch</h1>
          <vs-button
            class="btn-pitch"
            shadow
          >
            Try for free
          </vs-button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.getStarted {
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 60px;
  padding-left: 60px;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(91.56deg, rgb(73, 102, 247) 0%, rgb(130, 83, 255) 122.55%)
}
.right-img-pitch {
  position: absolute;
  flex: 0 0 100%;
  max-width: 100%;
  bottom: -10px;
  right: 0px;
  z-index: 0;
}
.col-pitch {
  flex: 1 0 100%;
  max-width: 100%;
  z-index: 1;
  margin-bottom: 5rem;
  h1 {
    color: #fff;
    font-family: 'Bold';
    line-height: 1;
    font-size: calc(3vw + 1rem);
  }
  .btn-pitch {
    margin-top: 2rem;
    font-size: 1.1rem;
    font-family: 'Bold';
    color: #4966f7;
    padding: .1rem 2rem;
    display: flex;
  }
}
@media (min-width: 591px) {
  .right-img-pitch {
    position: absolute;
    flex: 0 0 70%;
    max-width: 70%;
    bottom: -50px;
    right: -150px;
    z-index: 0;
  }
  .col-pitch {
    flex: 1 0 50%;
    max-width: 480px;
    text-align: left;
    z-index: 1;
    h1 {
      color: #fff;
      font-family: 'Bold';
      line-height: 1;
      font-size: calc(3vw + 1rem);
    }
    .btn-pitch {
      margin-top: 2rem;
      font-size: 1.1rem;
      font-family: 'Bold';
      color: #4966f7;
      padding: .1rem 2rem
    }
  }
}
</style>
