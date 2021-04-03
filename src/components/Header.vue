<template>
  <header class="header">
    <nav class="navbar fixed-top" :class="{scrolling: scrollTop > 0}">
      <a class="nav-logo" href="#">Pitch</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <vs-navbar-group>
            Product
            <template #items style="background: #fff">
              <vs-navbar-item>
                Product Tour
              </vs-navbar-item>
              <vs-navbar-item>
                What's New
              </vs-navbar-item>
              <vs-navbar-item>
                Download
              </vs-navbar-item>
              <vs-navbar-item>
                Help Center
              </vs-navbar-item>
              <vs-navbar-item>
                Status
              </vs-navbar-item>
            </template>
          </vs-navbar-group>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Templates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <vs-navbar-group>
            Company
            <template #items style="background: #fff">
              <vs-navbar-item>
                About
              </vs-navbar-item>
              <vs-navbar-item>
                Press
              </vs-navbar-item>
              <vs-navbar-item>
                Blog
              </vs-navbar-item>
              <vs-navbar-item>
                Newsletter
              </vs-navbar-item>
              <vs-navbar-item>
                Status
              </vs-navbar-item>
            </template>
        </vs-navbar-group>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Jobs</a>
        </li>
      </ul>
      <div class="d-flex">
        <button class="login-btn">
          Login
        </button>
        <button class="try-btn">
          Try for free
        </button>
      </div>
    </nav>
    <div class="container">
      <div class="wrap">
        <div class="col-header-title" :class="{colNone: dNone > 0}">
          <h1>The new face <br> of presentations</h1>
          <p>Uncompromisingly good presentation software. <br> Purpose-built for teams.</p>
        </div>
      </div>
      <div class="wrap jcc">
        <div class="col-header-video">
          <video :autoplay="autoplay > 0" class="video-header" data-fallback-image="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1605192487/website-assets/home/Header-frame.jpg" muted="muted" playsinline="playsinline" poster="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1605192487/website-assets/home/Header-frame.jpg" preload="" width="960" height="540"><source :src="video" type="video/mp4"></video>
        </div>
      </div>
      <div class="wrap jcc">
        <div class="col-pitch">
          <p>More than 25,000 teams use Pitch</p>
        </div>
      </div>
      <div class="wrap jcc">
        <div class="col-teams" v-for="(team, t) in teams1" :key="t">
          <img class="img-fluid" :src="team.img" alt="teamImg">
        </div>
      </div>
      <div class="wrap jcc">
        <div class="col-teams" v-for="(team, t) in teams2" :key="t">
          <img class="img-fluid" :src="team.img" alt="teamImg">
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      scrollTop: 0,
      autoplay: 0,
      dNone: 0,
      video: require('../assets/Header.mp4'),
      teams1: [
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191028/website-images/partners/unsplash_wotp32.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191028/website-images/partners/superhuman_isiyzy.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191025/website-images/partners/grammarly_hrqmya.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603293600/website-images/partners/notion-wordmark_ofv6ws.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191028/website-images/partners/italic_yqmmzg.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191025/website-images/partners/intercom_nmqamd.svg'
        }
      ],
      teams2: [
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191026/website-images/partners/dribbble_p6xr3m.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191028/website-images/partners/parsely_ot3onn.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191025/website-images/partners/descript_vzv32g.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191026/website-images/partners/doist_yjmb0b.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191029/website-images/partners/vol_k6ou1j.svg'
        },
        {
          img: 'https://res.cloudinary.com/pitch-software/image/upload/v1603191026/website-images/partners/bridge_bmeqwo.svg'
        }
      ]
    }
  },
  methods: {
    playVid () {
      this.autoplay = window.scrollY
    },
    dNoneText () {
      this.dNone = window.scrollY
    },
    handleTop () {
      this.scrollTop = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.playVid)
    window.addEventListener('scroll', this.dNoneText)
    window.addEventListener('scroll', this.handleTop)
  }
}
</script>
<style scoped lang="scss">
/*navbar*/
.scrolling {
  background: #fff;
  transition: .5s all;
}
.navbar {
  display: flex;
  align-items: center;
  padding: .5rem .5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  .nav-logo {
    font-family: 'Bold';
    text-decoration: none;
    color: #000;
    font-size: 2rem
  }
  .navbar-nav {
    display: none;
    align-items: center;
    .nav-item {
      list-style: none;
      .nav-link {
        text-decoration: none;
        color: #2b2a35;
        margin-left: 3rem;
      }
      .rm-ml {
        margin-left: 0rem;
      }
    }
  }
  .login-btn {
    color: #334ac0;
    background-color: white;
    box-shadow: 0 0.2rem 0.5rem rgba(103, 110, 144, 0.2), 0 0 0 0.1rem rgba(103, 110, 144, 0.05);
    font-family: 'Bold';
    padding: .5rem 1rem;
    transition: box-shadow 120ms, background-color 120ms;
    border-radius: 0.6rem;
    &:hover {
      box-shadow: 0 0.2rem 0.5rem rgba(103, 110, 144, 0.4), 0 0 0 0.1rem rgba(103, 110, 144, 0.05);
    }
  }
  .try-btn {
    padding: .5rem 1rem;
    transition: box-shadow 120ms, background-color 120ms;
    color: #fff;
    font-family: 'Bold';
    border-radius: 0.6rem;
    background: #586ee0;
    box-shadow: 0 0.1rem 0.1rem transparent;
    margin-left: 1rem;
    &:hover {
      text-decoration: none;
      outline: none;
      background-color: #334ac0;
      box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
    }
  }
}
/*header*/
.header {
  position: relative;
  padding-bottom: 5rem;
}
.col-header-title {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  h1 {
    line-height: 1;
    font-size: calc(5.5vw + .5rem);
    font-family: 'Bold';
    color: #334ac0;
    margin-top: 3em;
  }
  p {
    font-size: calc(.6vw + 1rem);
    line-height: 1;
    margin-top: 1em;
    color: #2b2a35;
  }
}
.col-header-video {
  flex: 0 0 100%;
  max-width: 100%;
  margin-top: 2rem;
  .video-header {
    width: 100%;
    height: auto;
  }
}
/*pitch*/
.col-pitch {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    p {
      font-size: calc(.8vw + 1rem);
      color: #2b2a35;
      font-family: 'Bold';
    }
  }
  .col-teams {
    flex: 0 0 40%;
    max-width: 40%;
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    margin: 0 1rem
  }
@media (min-width: 600px) {
  .col-teams {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    margin: 0 1rem
  }
}
@media (min-width: 991px) {
  /*navbar*/
  .navbar {
    display: flex;
    align-items: center;
    padding: 1rem 5rem;
    flex-wrap: wrap;
    justify-content: space-around;
    .nav-logo {
      font-family: 'Bold';
      text-decoration: none;
      color: #000;
      font-size: 2rem
    }
    .navbar-nav {
      display: flex;
      align-items: center;
      .nav-item {
        list-style: none;
        .nav-link {
          text-decoration: none;
          margin-left: 3rem;
          color: #2b2a35;
        }
        .rm-ml {
          margin-left: 0rem;
        }
      }
    }
    .login-btn {
      color: #334ac0;
      background-color: white;
      box-shadow: 0 0.2rem 0.5rem rgba(103, 110, 144, 0.2), 0 0 0 0.1rem rgba(103, 110, 144, 0.05);
      font-family: 'Bold';
      padding: .5rem 1.5rem;
      transition: box-shadow 120ms, background-color 120ms;
      border-radius: 0.6rem;
      &:hover {
        box-shadow: 0 0.2rem 0.5rem rgba(103, 110, 144, 0.4), 0 0 0 0.1rem rgba(103, 110, 144, 0.05);
      }
    }
    .try-btn {
      padding: .5rem 1.5rem;
      transition: box-shadow 120ms, background-color 120ms;
      color: #fff;
      font-family: 'Bold';
      border-radius: 0.6rem;
      background-color: #334ac0;
      box-shadow: 0 0.1rem 0.1rem transparent;
      margin-left: 1rem;
      &:hover {
        text-decoration: none;
        outline: none;
        background: #586ee0;
        box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
      }
    }
  }
  /*header*/
  .col-header-title {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    h1 {
      line-height: 1;
      font-size: calc(5.5vw + .5rem);
      font-family: 'Bold';
      color: #334ac0;
      margin-top: 1.3em;
    }
    p {
      font-size: calc(.6vw + 1rem);
      line-height: 1;
      margin-top: 1em;
      color: #2b2a35;
    }
  }
  .col-header-video {
    flex: 0 0 1100px;
    max-width: 1100px;
    margin-top: 2rem;
    .video-header {
      width: 100%;
      height: auto;
    }
  }
  /*pitch*/
  .col-pitch {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    p {
      font-size: calc(.8vw + 1rem);
      color: #2b2a35;
      font-family: 'Bold';
    }
  }
  .col-teams {
    flex: 0 0 16%;
    max-width: 16%;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    margin: 0 0rem
  }
}
</style>
