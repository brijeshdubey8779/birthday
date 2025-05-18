import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const birthdayWish = [
    "Dear Vaishnavi,",
    "On this special day, I want to wish you the happiest of birthdays!",
    "You are an incredible friend who brings so much joy and laughter into my life.",
    "Your kindness, strength, and beautiful spirit inspire me every day.",
    "I'm so grateful to have you as my best friend.",
    "May this year bring you all the happiness, success, and adventures you deserve.",
    "Here's to celebrating you today and always!",
    "Happy Birthday! 🎂🎉"
];

const WishPage = () => {
    const [visibleLines, setVisibleLines] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (visibleLines < birthdayWish.length) {
            const timer = setTimeout(() => {
                setVisibleLines(visibleLines + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [visibleLines]);

    return (
        <PageTransition>
            <div className="max-w-lg mx-auto text-center">
                <h1 className="page-title">Birthday Wishes</h1>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-3 text-left mb-8">
                        {birthdayWish.slice(0, visibleLines).map((line, index) => (
                            <motion.p
                                key={index}
                                className="text-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>

                    {visibleLines === birthdayWish.length && (
                        <motion.button
                            className="birthday-btn mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/surprise')}
                        >
                            Continue to Your Surprise
                        </motion.button>
                    )}
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default WishPage; 