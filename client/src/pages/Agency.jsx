import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import "../components/VariableProximity.css";

export function Agency() {
    const containerRef = useRef(null);

    return <>
        <section className="agency">
            <div className="agency-hero">
                <div className="text2">
                    <p>Where creativity meets cutting edge tech.</p><br />

                    <p>We specialise in full service digital design and production, <br />combining established platforms with emerging technologies <br />to craft smart, effective digital solutions that turn heads <br />and deliver ROI.</p>
                </div>
                <div
                    className="text1"
                    ref={containerRef}
                    style={{ position: 'relative' }}
                >
                    <VariableProximity
                        label={"Whether you're a startup, entrepreneur, or\n an enterprise, we're here to turn your \nideas into exceptional experiences."}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={50}
                        falloff='linear'
                    />
                </div>
            </div>
            <div className="agency-text">
                <div
                    className="text1"
                    ref={containerRef}
                    style={{ position: 'relative' }}
                >
                    <VariableProximity
                        label={"We believe in collaboration, innovation and quality\n—bringing ideas to life through cutting-edge\n design, seamless functionality and strategic \ninsight. Our goal is to transform every client vision \ninto a dynamic, functional and engaging online \npresence that stands out in a crowded digital \nlandscape."}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={50}
                        falloff='linear'
                    />
                </div>
            </div>
            <div className="manifesto">
                <div className="content1">
                    <h1 className='text1'>Manifesto</h1>
                    <div
                        className="text1"
                        ref={containerRef}
                        style={{ position: 'relative' }}
                    >
                        <VariableProximity
                            label={"We believe in collaboration, innovation and quality\n—bringing ideas to life through cutting-edge\n design, seamless functionality and strategic \ninsight. Our goal is to transform every client vision \ninto a dynamic, functional and engaging online \npresence that stands out in a crowded digital \nlandscape."}
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={50}
                            falloff='linear'
                        />
                    </div>
                </div>
                <h1 className='culture'>Culture</h1>
                <div className="culture-text">
                    <div>
                        <p>We believe the best work comes from diverse minds coming together. From designers to developers, strategists to storytellers, everyone has a voice at the table. Collaboration fuels our creativity, and we thrive on open communication, mutual respect and the kind of teamwork that turns challenges into opportunities.</p>
                        <br />
                        <p>Digital is always evolving, and so are we. We encourage our team to push boundaries, experiment fearlessly and embrace new tools and technologies. Whether it’s refining our project delivery processes or exploring cutting-edge design or technology trends, innovation is a cornerstone of everything we do.</p>
                    </div>
                    <div className="culture-image"></div>
                </div>
            </div>

        </section>
    </>
}