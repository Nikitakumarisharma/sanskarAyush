import PageBanner from "@/src/components/PageBanner";

import Layout from "@/src/layouts/Layout";
import Client from "@/src/components/Client";
import Link from "next/link";
const Contact = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Contact Us"} /> */}

      {/*====== Start Contact Info section ======*/}
      <section className="contact-info-section pt-40">
        <h3 className="text-center text-[#7EA63F] pb-3">Contact Us</h3>
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <h6>Imlikhera, Bhagwanpur By pass NH Roorkee, Haridwar Uttarakhand India-247667</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <h6>
    <a href="mailto:rajat.prakash@sanskarayush.in">rajat.prakash@sanskarayush.in</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Phone No</span>
                    <h6>
                      <a href="tel:+91 9084715401">+91 9084715401</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Contact section ======*/}
      <div className="min-h-screen flex items-center justify-center p-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl p-8 rounded-lg">
        {/* Left Side - Map */}
        <div className="w-full h-80 md:h-full">
        <iframe  className="w-full h-full rounded-lg"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6915.047562226098!2d77.9085498!3d29.9356092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb59bf690e4d3%3A0x983dc853f1095bd9!2sSanskar%20Ayush%20Medicare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1740809599991!5m2!1sen!2sin"allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col justify-center shadow-lg p-4">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#7EA63F] text-white py-2 rounded-lg mt-3 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

      {/*====== End Contact section ======*/}
     <br />
      <Client />
    </Layout>
  );
};
export default Contact;
