import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I had a fantastic experience working with Anand. He was attentive to my needs, communicated effectively throughout the process, and delivered a stunning website that exceeded my expectations. I highly recommend his services.",
    },
    {
      img: profilePic2,
      review:
        "Anand Sharma is an incredibly talented web developer. He was able to take my vague ideas and turn them into a beautifully designed and functional website. His attention to detail and willingness to go the extra mile truly set him apart. I will definitely be working with Anand again in the future.",
    },
    {
      img: profilePic3,
      review:
        "Anand Sharma is an absolute pleasure to work with. He is not only skilled in web development but also has a keen eye for design. He was able to incorporate all of my requests into the website while offering valuable suggestions along the way. I highly recommend Anand for any web development project.",
    },
    {
      img: profilePic4,
      review:
        "Anand Sharma's Web Development Services came highly recommended, and they did not disappoint. He took the time to understand our business goals and tailor their approach accordingly. The result was a website that not only looks great but also drives tangible results for our business. We appreciated his expertise and commitment to delivering a high-quality product.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
