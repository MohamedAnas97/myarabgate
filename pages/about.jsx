import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import ContactLayout from "@/src/components/contactFooter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 568 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
    },
  };
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/arab-gate.mp4";
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12 mt-40">
            <h5 className="fadeInUp delay-0-2s wow mt-30 text-color font-fam h5-font ">
              Welcome to Arab Gate, your trusted source for top-notch
              maintenance services. With eight years of industry expertise, we
              specialize in tailored solutions for residential, commercial and
              industrial spaces. Our skilled team is committed to prompt,
              reliable and quality service. Choose arab gate for hassle-free
              maintenance, ensuring your spaces remain in optimal condition.
            </h5>
          </div>
        </div>
      </div>
      <section className=" pt-80 rpt-50 rel z-1">
        <div className="container container-1290 pb-30 rpb-10">
          <div className="hero-bottom-image ">
            <ReactPlayer
              url={video}
              controls={false}
              loop
              playing
              playsinline={true}
              muted={true}
              className="video-container"
            />

            <div className="hero-social">
              <a
                href="https://www.facebook.com/agarabgate/"
                target="_blank"
               
              >
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
             
              <a
                href="https://www.instagram.com/ag_arabgate"
                target="_blank"
              >
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
              <a
                className="a-icon cursor"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCvwyj0zLeK3IlQ407MEvWuw"
                  )
                }
              >
                <i className="fab fa-youtube" /> <span>Youtube</span>
              </a>
              <a
                href="https://www.tiktok.com/@arabgate"
                target="_blank"
              >
                <i className="fab fa-tiktok" /> <span>Tiktok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="review-bg mt-50 mb-60">
        <div className="section-title text-center pt-80 rpt-50 wow fadeInUp delay-0-2s">
          <h3 className="text-color font-fam h2-font">
            What Our Customers Say About Us
          </h3>
        </div>
        <div className="container container-1290 pt-50 rpt-30 pb-50 rpb-20 ">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={5000}
          >
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> We've relied on Arab Gate for
                all our electrical, plumbing, and HVAC needs, and they never
                disappoint. Their technicians are knowledgeable, reliable, and
                always go above and beyond to ensure our systems are running
                smoothly. A trusted partner indeed!
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Ahmed M</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> I can't thank Arab Gate enough
                for their prompt response and top-notch service when we needed
                urgent painting and epoxy work done. Their attention to detail
                and dedication to quality craftsmanship truly sets them apart.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Fathima</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span>Arab Gate's maintenance packages
                have been a lifesaver for our business. Their proactive approach
                to maintenance has helped us avoid costly repairs and downtime.
                Their team is professional, courteous, and always willing to go
                the extra mile.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Hassan B</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> The CCTV security systems
                installed by Arab Gate have provided us with peace of mind
                knowing that our property is protected. Their expertise in
                security solutions coupled with their excellent customer service
                makes them our go-to choice.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Mariam S</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span>We've been extremely impressed
                with Arab Gate's digital displays and signages. Not only do they
                enhance our brand visibility, but their team also provides
                ongoing support and maintenance, ensuring optimal performance at
                all times
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Khalid R</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> Arab Gate's display fixtures
                for retail and exhibitions have helped us showcase our products
                in the best possible light. Their innovative designs and
                attention to detail have undoubtedly contributed to our success
                at trade shows and events.
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Layla H</h4>
            </div>
            <div className="review-one">
              <div className="star-rate">
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <p className="text-color font-fam review-content">
                <span className="quote">“</span> Arab Gate's painting and epoxy
                services gave our property a fresh new look that exceeded our
                expectations. Their team worked diligently to ensure every
                detail was perfect, and the results speak for themselves. I'm
                extremely satisfied with their work and would highly recommend
                them to others
                <span className="quote right-quote"> “</span>
              </p>
              <h4 className="review-name text-color">Amira K</h4>
            </div>
          </Carousel>
        </div>
      </section>
      <div className="rmy-30">
        <ContactLayout />
      </div>
    </Layout>
  );
};
export default AboutUs;
