import Image from "next/image";
import Link from "next/link";

const PricingCard = ({ pricing }) => {
    return (
        <div className="pricingWrapper">
            <div className={pricing.title==="Startup"?"pricingCard big":"pricingCard"}>
                <div className="header">
                    <h3>{pricing.title}</h3>
                    <h4>{pricing.pricing}</h4>
                    <p>{pricing.description}</p>
                </div>
                <div className="content">
                    <ul>
                    {
                        pricing.features.map((feature, index) => {
                            return (
                                <li key={index}>
                                    <Image
                                        height={20}
                                        width={20}
                                        src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                                        alt={feature.title}
                                    />{feature}</li>
                            )
                        })
                    }
                    </ul>
                </div>
                {
                    pricing.title==="Startup"&&(
                        <div className="footer">
                            <Link href="/">Start using Compact</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PricingCard;