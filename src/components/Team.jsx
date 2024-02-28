import React from "react";

const Team = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="members-section wrapper">
      <p className="text">Description on Business model</p>
      <span className="description">
        Pixel Alchemy HQ: Where Imagination Takes Form Concept: Imagine a
        colossal atom, its nucleus a vibrant sphere pulsing with light,
        representing the heart of Rudevs Corporation. This is Pixel Alchemy HQ,
        a testament to the company's dedication to crafting groundbreaking
        experiences, one pixel at a time.
      </span>
      <h4>
        <b>Design:</b> The building itself embodies the "one pixel at a time"
        philosophy. Its exterior is a mesmerizing mosaic of millions of
        individual tiles, each meticulously arranged to create ever-shifting
        patterns and animations. This facade serves as a living canvas,
        showcasing Rudevs' latest innovations and reflecting the company's
        dynamic spirit.
      </h4>
      <h4>
        <b>Interior:</b>Stepping inside is akin to entering a wonderland of
        cutting-edge technology and boundless creativity. Collaborative
        workspaces seamlessly blend with art studios and research labs,
        fostering a culture of open exchange and experimentation.
      </h4>
      <h4>Key Features:</h4>
      <ul>
        <li>
          <b>Atomic Core:</b>The central atrium, shaped like the nucleus of an
          atom, houses a grand auditorium with breathtaking digital installation
          . This ever-evolving display visualizes Rudevs' ongoing projects,
          pulsating with the energy of their collective vision.
        </li>
        <li>
          <b>Pixel Labs:</b>State-of-the-art research and development labs
          equipped with the latest AI, IoT, and gaming technologies empower
          Rudevs' team to push the boundaries of the possible.
        </li>
        <li>
          <b>Pixel Studios:</b>Immersive art studios, bathed in soft, natural
          light, provide the perfect environment for designers and artists to
          bring their imaginative visions to life.
        </li>
        <li>
          <b>Collaboration Hubs:</b>Open, dynamic spaces designed to foster
          teamwork and brainstorming, featuring interactive walls, holographic
          displays, and comfortable seating areas.
        </li>
        <li>
          <b> Metaverse Gateway:</b> A dedicated portal to the metaverse,
          allowing employees and partners to explore virtual worlds, collaborate
          on projects, and host events in groundbreaking new ways.
        </li>
        <li>
          <b>Symbolism:</b>
          <ul>
            <li>
              <b>The Atom:</b>Represents the fundamental building blocks of
              creation, reflecting Rudevs' focus on crafting experiences from
              the ground up.
            </li>
            <li>
              <b> The Pixel:</b>Embodies the company's meticulous attention to
              detail and its commitment to excellence in every aspect.
            </li>
            <li>
              <b>The Pulsating Light:</b>Symbolizes the constant innovation and
              dynamic nature of Rudevs' work.
            </li>
          </ul>
        </li>
        <li>
          <b>Impact:</b>Pixel Alchemy HQ is more than just a building; it's a
          tangible expression of Rudevs' values and ambitions. It serves as a
          beacon of inspiration for employees, partners, and the wider tech
          community, showcasing the transformative power of "one pixel at a
          time" thinking.
        </li>
        <li>
          <b>Remember:</b>This is just a starting point. Feel free to add your
          own creative details and ideas to make Pixel Alchemy HQ truly unique
          and representative of Rudevs Corporation's vision.
        </li>
      </ul>{" "}
      <ul className="links">
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Team;
