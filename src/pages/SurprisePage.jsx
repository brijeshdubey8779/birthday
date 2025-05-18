import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import PageTransition from '../components/PageTransition';

const SurprisePage = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [revealGift, setRevealGift] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <PageTransition>
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={true}
            />

            <h1 className="page-title">Surprise!</h1>

            <div className="max-w-md mx-auto text-center">
                {!revealGift ? (
                    <motion.div
                        className="card cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setRevealGift(true)}
                    >
                        <div className="text-6xl mb-4">🎁</div>
                        <p className="text-xl font-medium text-pink-600">Click to open your gift!</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="text-6xl mb-4 animate-bounce">🎂</div>
                        <h2 className="text-2xl font-bold text-pink-600 mb-3">Virtual Birthday Cake!</h2>
                        <p className="text-lg mb-4">
                            I wish I could give you a real cake right now, but please accept this virtual one
                            with all my love and best wishes!
                        </p>
                        <p className="text-lg mb-6">
                            You deserve all the happiness in the world today and always.
                        </p>

                        <motion.button
                            className="birthday-btn"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/final')}
                        >
                            Continue
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </PageTransition>
    );
};

export default SurprisePage; 