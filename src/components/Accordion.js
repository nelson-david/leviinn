import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as BsIcons from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ faq, index }) => {

    const duration = (index+1)*50+1000;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration={duration}
        >
            <motion.div
                initial={false}
                // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
                onClick={() => setIsOpen(isOpen ? false : true)}
                className="custom__accordion"
            >
                <h5>{faq.question}</h5>
                <motion.span>
                    {isOpen?<BsIcons.BsChevronDown />:<AiOutlinePlus />}
                </motion.span>
            </motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="accordion__content"
                >
                    <motion.div
                        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p style={{margin: "0px"}}>{faq.answer}</motion.p>
                    </motion.div>
                </motion.section>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion;