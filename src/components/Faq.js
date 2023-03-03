import { faqList } from "@/data/faqList";
import Accordion from "./Accordion";

const Faq = () => {
    return (
        <div className="faqSection">
            <span className="sectionCaption pink">Faq</span>
            <h2 className="sectionTitle">Got questions?</h2>
            <p className="sectionSubTitle">If you have any other questions - please get in touch at hello@matnie.com</p>

            <div className="faqList">
                <div className="row">
                {
                    faqList.map((faq, index) => {
                        return (
                            <div className="col-12" key={index}>
                                <Accordion
                                    faq={faq}
                                    index={index}
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

export default Faq;