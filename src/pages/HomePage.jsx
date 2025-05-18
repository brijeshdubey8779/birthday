import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const HomePage = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Show the button after 1.5 seconds
        const timer = setTimeout(() => {
            setIsButtonVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <div className="text-center">
                <motion.h1
                    className="text-6xl font-bold mb-6 text-pink-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                >
                    Happy Birthday!
                </motion.h1>

                <motion.div
                    className="text-3xl font-semibold text-pink-500 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    Vaishnavi
                </motion.div>

                {isButtonVisible && (
                    <motion.button
                        className="birthday-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate('/welcome')}
                    >
                        Click to Begin Your Birthday Journey
                    </motion.button>
                )}
            </div>
        </PageTransition>
    );
};

export default HomePage; 