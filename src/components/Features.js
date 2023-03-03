import { featureList } from "@/data/featureList";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <div className="featureSection">
            <span className="sectionCaption">Features</span>
            <h2 className="sectionTitle">What makes Compact so special?</h2>
            <p className="sectionSubTitle">There are plenty of benefits when using Compact template. We tried to list some of them out.</p>

            <div className="listContainer">
                <div className="row">
                {
                    featureList.map((feature, index) => {
                        return (
                            <div className="col-xl-3" key={index}>
                                <FeatureCard
                                    feature={feature}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <div className="splitSection">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="imageDiv">
                            <Image
                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1677869711/leviinn/zrvcnt9ai7kwr1fqxb4t.png"
                                width="570"
                                height="410"
                                alt="Animations and effects"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="content">
                            <h3>Animations & effects</h3>
                            <p>Pre-built animations and effects such as scroll transforms, appear animation, component interactions and more. Benefits? A more dynamic and engaging website that encourages users to explore the site further.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="splitSection">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="content left">
                            <h3>Desktop, tablet & phone breakpoints</h3>
                            <p>We made sure that this template is optimized for viewing on any device, providing a consistent and optimal experience for users regardless of the device they are using.</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="imageDiv right">
                            <Image
                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1677869711/leviinn/mtgoxitg95gh8pvbldxg.png"
                                width="570"
                                height="410"
                                alt="Devices"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="splitSection">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="imageDiv">
                            <Image
                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1677869711/leviinn/r8pdwdgjqcgdfxkh90yn.png"
                                width="570"
                                height="410"
                                alt="Color and text styles"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="content">
                            <h3>Color & text styles</h3>
                            <p>Carefully chosen color scheme and text styles guarantees a more polished, professional appearance, making this template more visually appealing to users. It&apos;s also very easy to replace with your own font and colors.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="splitSection">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="content left">
                            <h3>Components to keep things organised</h3>
                            <p>Components can be reused throughout a website, reducing the amount of work and in result it is easier to maintain. Thanks to components every little detail is consistent across the entire template.</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="imageDiv right">
                            <Image
                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1677869711/leviinn/vcn3lfshdlufilokmnub.png"
                                width="570"
                                height="410"
                                alt="Components to keep things organized"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features;