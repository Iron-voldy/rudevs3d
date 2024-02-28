import React, { useRef } from "react";
import Jumbotron from "../components/Jumbotron";
import SoundSection from "../components/SoundSection";
import DisplaySection from '../components/DisplaySection';
import WebgiViewer from "../components/WebgiViewer";
import Loader from '../components/Loader';
import Team from "../components/Team";


function Home() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
 
      <div className="App">
        <Loader />
        <div ref={contentRef} id="content">
          <Jumbotron />
          <SoundSection />
          <Team />
          <DisplaySection triggerPreview={handlePreview} />
          <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
        </div>
        
      </div>
   
  );
}
export default Home;
