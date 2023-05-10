import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>
        WasteTrack is a website and dashboard, by Jamie Mccay, that aims to provide an interactive and visual way 
        of exploring the municipal waste data of Northern Ireland. The data is sourced from OpenDataNI, 
        the official portal for open data in Northern Ireland. 
      </p>
      <p>
        WasteTrack allows users to view various aspects of the waste data, such as the amount of waste 
        collected, recycled, composted, or sent to landfill, as well as the breakdown of waste by 
        material type, district council, and year. Users can also compare the performance of different 
        councils or regions in terms of waste management and recycling rates. 
      </p>
      <p>
      WasteTrack hopes to raise awareness and understanding of the waste situation in Northern Ireland 
      and to encourage more sustainable and responsible waste practices among the public and policymakers.
      </p>
    </div>
  );
};

export default About;