<template>
  <footer class="footer">
    <div class="container">
      <div class="wrap">
        <div class="col-left">
          <p class="footer-left-p">Pitch</p>
          <p class="footer-left-p1">
            © Copyright 2021 Pitch Software GmbH. <br />
            All rights reserved.
          </p>
        </div>
        <div class="col-right">
          <div class="link-right">
            <a href="#">
              <h3>Product</h3>
            </a>
            <a href="#">
              <span>Product Tour</span>
            </a>
            <a href="#">
              <span>Templates</span>
            </a>
            <a href="#">
              <span>Pricing</span>
            </a>
            <a href="#">
              <span>Download</span>
            </a>
            <a href="#">
              <span>What's New</span>
            </a>
            <a href="#">
              <span>Help Center</span>
            </a>
            <a href="#">
              <span>Status</span>
            </a>
          </div>
          <div class="link-right">
            <a href="#">
              <h3>Legal</h3>
            </a>
            <a href="#">
              <span>Terms of Use</span>
            </a>
            <a href="#">
              <span>Privacy Policy</span>
            </a>
            <a href="#">
              <span>Legal Notice</span>
            </a>
            <a href="#">
              <span>DPA</span>
            </a>
            <a href="#">
              <span>DMCA Policy</span>
            </a>
            <a href="#">
              <span>GDPR</span>
            </a>
            <a href="#">
              <span>Security Policy</span>
            </a>
          </div>
          <div class="link-right">
            <a href="#">
              <h3>Company</h3>
            </a>
            <a href="#">
              <span>About</span>
            </a>
            <a href="#">
              <span>Jobs</span>
            </a>
            <a href="#">
              <span>Press Room</span>
            </a>
            <a href="#">
              <span>Blog</span>
            </a>
            <a href="#">
              <span>Newsletter</span>
            </a>
          </div>
          <div class="link-right">
            <h3>Follow us</h3>
            <div class="social-right">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  display: flex;
  padding-top: 47px;
  margin-bottom: 47px;
  text-align: left;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
}
.col-left {
  flex: 1 0 100%;
  max-width: 100%;
  order: 1;
  margin-top: 1em;
  .footer-left-p {
    font-family: "Bold";
    font-size: 2rem;
  }
}
.col-right {
  display: flex;
  flex: 2 1 100%;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  .link-right {
    margin: 0 0 3rem;
  }
  .social-right {
    display: flex;
    .fab {
      color: #464646;
      font-size: 1.6rem;
      margin-right: 1rem;
      margin-top: 1rem;
    }
  }
  .link-right {
    flex: 1 1 50%;
    a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding: 0.25ch 0;
    }
  }
}
@media (min-width: 500px) {
  .col-right {
    margin-left: 1rem;
  }
  .link-right {
    flex: 1 1 33% !important;
    a {
      color: inherit;
      text-decoration: none;
      display: block;
      padding: 0.25ch 0;
    }
  }
}
@media (min-width: 950px) {
  .col-left {
    flex: .5;
    order: 1;
    margin-top: 0em;
    .footer-left-p {
      font-family: "Bold";
      font-size: 2rem;
    }
  }
  .col-right {
    display: flex;
    flex: 1 1 0%;
    order: 2;
    flex-wrap: wrap;
    justify-content: space-around;
    .link-right {
        flex: 1 1 33% !important;
        a {
          color: inherit;
          text-decoration: none;
          display: block;
          padding: 0.25ch 0;
        }
      }
  }
}
@media (min-width: 990px) {
  .col-left {
    flex: .5;
    order: 1;
    margin-top: 0em;
    .footer-left-p {
      font-family: "Bold";
      font-size: 2rem;
    }
  }
  .col-right {
    display: flex;
    flex: 1 1 0%;
    order: 2;
    flex-wrap: wrap;
    justify-content: space-around;
    .link-right {
        flex: 1 1 23% !important;
        a {
          color: inherit;
          text-decoration: none;
          display: block;
          padding: 0.25ch 0;
        }
      }
  }
}
</style>
