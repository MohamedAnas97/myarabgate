import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import ContactLayout from "@/src/components/contactFooter";
const contactDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />
      <div className="mt-80 rmt-40 mb-80 rmb-40">
        <ContactLayout />
      </div>
      <div className="contact-page-map mb-70 rmb-20 rpb-40 ">
        <div className="container container-1290">
          <div className="our-location">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=ARAB%20GATE%20Technical%20Services%20LLC,%20Block%20104%20-%20Damascus%20street%20-%20Al%20Qusais%20-%20Dubai+(ARAB%20GATE%20Technical%20Services%20LLC)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default contactDetails;
