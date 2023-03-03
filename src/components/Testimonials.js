import { testimonialList } from "@/data/testimonial";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <div className="testimonialSection">
            <span className="sectionCaption yellow">Testimonials</span>
            <h2 className="sectionTitle">People love using Compact</h2>
            <p className="sectionSubTitle">Here are some nice things our users have said about our template (totally not fake).</p>

            <div className="testimonialList">
                <div className="row">
                {
                    testimonialList.map((testimonial, index) => {
                        return (
                            <div className="col-xl-4" key={index}>
                                <TestimonialCard
                                    testimonial={testimonial}
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

export default Testimonials;