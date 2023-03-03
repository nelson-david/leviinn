import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonialCard">
            <div className="header">
                <div>
                    <Image
                        width="40"
                        height="40"
                        src={testimonial.img}
                    />
                </div>
                <div>
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.role}</p>
                </div>
            </div>
            <div className="content">
                <p>{testimonial.comment}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;