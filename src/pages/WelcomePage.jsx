import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="max-w-lg mx-auto text-center">
                <h1 className="page-title">Welcome Vaishnavi!</h1>

                <motion.div
                    className="card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-lg mb-4">
                        Today is your special day, and I've prepared a little something to celebrate you!
                    </p>
                    <p className="text-lg mb-6">
                        This journey contains some memories, wishes, and maybe a surprise or two...
                        Just for you, my best friend! ✨
                    </p>

                    <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                            className="birthday-btn"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/memories')}
                        >
                            Let's Continue
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-8 text-pink-500 animate-float"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default WelcomePage; 