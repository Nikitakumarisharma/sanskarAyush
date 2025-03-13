import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// icon
import {
  MdFactory,
  MdPrecisionManufacturing,
  MdFaceRetouchingNatural,
} from "react-icons/md";
import { FaUpload, FaLeaf } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { BsHouseGearFill } from "react-icons/bs";


const Timeline = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="section-title mb-55 wow fadeInLeft">
        <span
          className="sub-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="mt-5">

         Our Journey
          </span>
        </span>
        <h2 className="text-center">Get Started with passion, grew through innovation and perseverance.</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdFactory />}
        >
          <h4 className="text-xl font-bold">
            {" "}
            <h3>2010</h3>Factory establishment
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdPrecisionManufacturing />}
        >
          <h4 className="text-xl font-bold">
            <h3>2017</h3> Manufacturing license received, Production started.
          </h4>
          <ul>
            <li> 1. Tablets: 674 lakh tabs per year</li>
            <li> 2. Syrups: 15.85 lakh liters per year</li>
            <li> 3. Juices: 15.85 lakh liters per year</li>
            <li> 4. Granules and powders: 63,400 kg per year</li>
            <li> 5. Lab established</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<FaUpload />}
        >
          <h4 className="text-xl font-bold">
            <h3>2020</h3>Production capacity increased
          </h4>
          <ul>
            <li>1. Tablets: 1902 lakh tabs per year</li>
            <li>2. Syrups: 6.34 crore liters per year</li>
            <li>3. Juices: 6.34 crore liters per year</li>
            <li> 4. Granules and powders: 1.585 lakh kg per year</li>
            <li> 5. Drops: 63.4 lakh per year</li>
            <li> 6. Chyawanprash: 15.85 lakh kg per year</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdFaceRetouchingNatural />}
        >
          <h4 className="text-xl font-bold">
            <h3>2021</h3>Received license for cosmetics
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<GiLipstick />}
        >
          <h4 className="text-xl font-bold">
            <h3>2022</h3>Cosmetics manufacturing started
          </h4>
          <ul>
            <li>2. Lab received NABL certification</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<BsHouseGearFill />}
        >
          <h4 className="text-xl font-bold">
            <h3>2023</h3>New extraction plant installed
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<FaLeaf />}
        >
          <h4 className="text-xl font-bold">
            <h3>2024</h3>Nutraceutical production in progress
          </h4>
          <ul>
            <li>1. Tablets: 1902 lakh tabs per year</li>
            <li> 2. Syrups: 6.34 crore liters per year</li>
            <li>3. Juices: 6.34 crore liters per year</li>
            <li>4. Granules and powders: 1.585 lakh kg per year</li>
            <li>5. Drops: 63.4 lakh per year</li>
            <li>6. Chyawanprash: 15.85 lakh kg per year</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
