import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import "../components/VariableProximity.css";

export function Careers() {
  const containerRef = useRef(null);

  return <>
    <section className="career">
      <div className="career-hero">
        <h1 className="career-head">Careers</h1>
        <div className="work-with">
          <div className="career-text">
            <h1 className="sub-head">Work with us</h1>
            <h4>Want to work alongside some of the most <br />talented digital minds on the planet?</h4><br />
            <p>So do we. We want C&C to represent the world that we live in, <br />with talent that’s diverse in background and skillsets. We want <br />you to bring your whole self to work, and we believe that we’re <br />at our best when we tap into our differences and collaborate <br />across varied personal experiences and perspectives to <br />arrive at unique solutions.</p><br />
            <p>If this sounds like the type of place where you’d like to work <br />(whether in our office or remotely), please do contact us <br />for positions and apply today.</p>
          </div>
          <div className="career-image"></div>
        </div>
      </div>
      <div className="why">
        <h1 className='text1'>Why Code & Cosmos?</h1>
        <div
          className="text1"
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={"We’re more than just a team; we’re a \ncommunity of creators, thinkers, and doers. \nOur culture is built on collaboration, \ncuriosity, and a shared passion for turning \nbold ideas into beautiful, functional digital \nexperiences. We’re not just building\n websites; we’re building a culture where \npeople feel proud of the work they do and \nthe impact they create."}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={50}
            falloff='linear'
          />
        </div>
      </div>
    </section>
  </>
}
