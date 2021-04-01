import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path 
        fill="transparen"
        strokeLinecap="round"
        strokeWidth="3"
        {...props}
    />
)

const transition = {duration: 0.33}

const MenuToggle = ({toggle, isOpen}) => {
    return (
        <a className="z-50 text-gray-500 cursor-pointer border-2 border-gray-600 align-center mb-2"  onClick={toggle}>
            <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           {/* <svg width="23" height="23" viewBox="0 0 23 23">
                <Path 
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    varients={{
                        closed: {d:"M 2 2.5 L 20 2.5", stroke: "hsl(0 0% 100%)"},
                        open: {d:"M 3 16.5 L 17 2.5", stroke: "hsl(0 0% 100%)"},
                    }}
                    transition={transition}
                />
                <Path 
                    d="M 2 9.423 L 20 9.423"
                    stroke="hsl(0 0% 18%)"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    varients={{
                        closed: { opacity: 1},
                        open: { opacity: 0},
                    }}
                    transition={transition}
                />
                <Path 
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    varients={{
                        closed: {d:"M 2 16.346 L 20 16.346", stroke: "hsl(0 0% 100%)"},
                        open: {d:"M 3 2.5 L 17 16.346", stroke: "hsl(0 0% 100%)"},
                    }}
                    transition={transition}
                />
            </svg> */}
        </a>
    )
}

export default MenuToggle

