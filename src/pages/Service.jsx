import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import "../components/VariableProximity.css";

export function Service() {
  const containerRef = useRef(null);

  return <>
    <section className="service">
      <div className="service-hero">
        <div
          className="text1"
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={"With expertise spanning the MERN stack,\n UI/UX design, cloud integration, and \nmodern DevOps practices, we deliver digital products \nthat are not only functional but future-ready."}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={50}
            falloff='linear'
          />
        </div>
      </div>
      <div className="s1">
        <div className="part1">
          <p>Learn & discover</p>
          <div
            className="s-text"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Understanding what's important to our \nusers and providing insights, guidance and \nstrategy to help us navigate the digital \nlandscape with confidence."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
        </div>
        <h1 className='step'>01</h1>
      </div>
      <div className="s-image1"></div>
      <div className="s2">
        <div className="part1">
          <p>UX & Design</p>
          <div
            className="s-text"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Blending intuitive UX with stunning design \nto create websites that are as functional as \nthey are visually compelling. Let’s build a \nwebsite that doesn’t just capture attention \nbut creates lasting connections"}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
        </div>
        <h1 className='step'>02</h1>
      </div>
      <div className="s3">
        <div className="part1">
          <p>Build & Test</p>
          <div
            className="s-text"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Combining technical expertise with \ninnovative design to build websites that are \nnot only visually stunning but fast, \nfunctional, and reliable."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
        </div>
        <h1 className='step'>03</h1>
      </div>
      <div className="s4">
        <div className="part1">
          <p>Maintenence & Support</p>
          <div
            className="s-text"
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={"Keeping your website secure, functional, \noptimised and performing at its best long \nafter launch — so you can focus on your \nbusiness with confidence."}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={50}
              falloff='linear'
            />
          </div>
        </div>
        <h1 className='step'>04</h1>
      </div>
    </section>
  </>
}
