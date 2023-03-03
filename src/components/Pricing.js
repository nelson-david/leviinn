import { pricingList } from "@/data/pricingList";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <div className="pricingSection">
            <span className="sectionCaption purple">Pricing</span>
            <h2 className="sectionTitle">Simple and transparent pricing</h2>
            <p className="sectionSubTitle">We have three options for you, if you just want to get inspired it's completely free.</p>

            <div className="pricingList">
                <div className="row">
                {
                    pricingList.map((pricing, index) => {
                        return (
                            <div className="col-xl-4" key={index}>
                                <PricingCard
                                    pricing={pricing}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Pricing;