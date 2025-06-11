import { useNavigate } from "react-router";
import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import "../components/VariableProximity.css";

export function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const subheading = "At the intersection of\nalgorithmic precision\nand artistic vision,\nwe engineer scalable\ndigital ecosystems —\nharmonizing user-centric\ndesign, intelligent\nautomation, and modern\nweb architecture to craft\nexperiences that transcend\nconvention.";

  return <>
    <main>
      <div className="hero">
        <div className="brand">
          <h1 className="name">C&C</h1>
          <p>Where Code Meets Creativity,<br /> and Innovation Takes Flight.</p>
        </div>
      </div>
      <div className="image-pencil">
        <div
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={subheading}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </div>
      </div>
      <div className="mission">
        <h1 className="heading">Our Mission</h1>
        <div className="text">
          <div
            className="text1"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"At Code & Cosmos, our mission is to bridge \ninnovation and imagination — crafting digital \nsolutions that empower businesses, inspire creativity, \nand expand the boundaries of technology. \nWe strive to build a future where design \nmeets intelligence, and every line of code \ncontributes to a better, more connected world."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
          <div
            className="text2"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Our journey began with a simple goal:\n to help individuals and businesses bring their digital \nvisions to life. From responsive websites to intelligent apps,\n we build solutions that are fast, scalable, and user-focused."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
          <div
            className="text2"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"With expertise spanning the MERN stack,\n UI/UX design, cloud integration, and \nmodern DevOps practices, we deliver digital products \nthat are not only functional but future-ready. \nOur mission is to align technology with \nuser needs and business goals."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
          <button className="btn" onClick={() => navigate('/agency')}>About Us</button>
        </div>
      </div>
      <div className="bold">
        <h1 className="bold-head">Work that wins</h1>
        <div
            className="text2"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Exceptional results aren't a bonus — they're the standard.\n We craft bespoke solutions that elevate your brand, \ncaptivate your audience, and deliver measurable success.\n Every project is a fusion of strategy, elegance, and \nprecision — because your business deserves nothing less than excellence."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
          <div className="buttons">
            <a href="https://www.instagram.com/code_cosmos_tech/" target="_blank"><button className="btn">Instagram</button></a>
            <a href="https://x.com/codecosmostech" target="_blank"><button className="btn">Twitter</button></a>
          </div>
      </div>
    </main>
  </>
}
