import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/Global.module.css";
import React from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import { loadFull } from "tsparticles";
import parallaxPresets from "./../utils/parallaxPresets";
import Particles from "react-particles";

function App({ Component, pageProps }) {
  const particlesInit = React.useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    //await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={parallaxPresets}
      />

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default App;