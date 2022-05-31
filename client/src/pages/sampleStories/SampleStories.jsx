import React from "react";
import image1 from "../../assets/img/team/1.jpg";
import image2 from "../../assets/img/team/2.jpg";
import image3 from "../../assets/img/team/3.jpg";
export default function SampleStories() {
  return (
    <div>
      {" "}
      <section class="page-section bg-secondary p-2 bg-opacity-25" id="Stories">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Amazing Stories</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src={image1} alt="..." />
                <h4>Parveen Anand</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem ad iste soluta, voluptatem at qui explicabo! Pariatur
                  distinctio, exercitationem qui optio assumenda ipsa sapiente,
                  sint vel corrupti, laboriosam dolorem quisquam.
                </p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand Twitter Profile"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand Facebook Profile"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand LinkedIn Profile"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src={image2} alt="..." />
                <h4>Diana Petersen</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem ad iste soluta, voluptatem at qui explicabo! Pariatur
                  distinctio, exercitationem qui optio assumenda ipsa sapiente,
                  sint vel corrupti, laboriosam dolorem quisquam.
                </p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Twitter Profile"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Facebook Profile"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen LinkedIn Profile"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src={image3} alt="..." />
                <h4>Larry Parker</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem ad iste soluta, voluptatem at qui explicabo! Pariatur
                  distinctio, exercitationem qui optio assumenda ipsa sapiente,
                  sint vel corrupti, laboriosam dolorem quisquam.
                </p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Twitter Profile"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Facebook Profile"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker LinkedIn Profile"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
