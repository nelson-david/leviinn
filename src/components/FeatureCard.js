import Image from "next/image";

const FeatureCard = ({ feature }) => {
    return (
        <div className="featureCard">
            <div className="imageDiv">
                <Image
                    height="50"
                    width="49"
                    src={feature.img}
                    alt={feature.title}
                />
            </div>
            <div className="content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
            </div>
        </div>
    )
}

export default FeatureCard;