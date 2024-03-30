import Layout from "@/src/layout/Layout";
import Link from "next/link";
const E404 = () => {
  return (
    <Layout>
      <section className="non-background">
        <div className="container container-1290 pt-140 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-55 wow fadeInRight delay-0-2s">
               
                <div className="section-title mb-50 rmb-35">
                  <h2 className="text-white">This Page Are Can't Be Found</h2>
                </div>
                <Link legacyBehavior href="/">
                  <a className="theme-btn style-two">
                    Go to Home <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
                <img
                  src="assets/images/background/404-error.png"
                  alt="404 Error"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
