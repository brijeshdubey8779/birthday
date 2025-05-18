import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const memories = [
    {
        title: "Our First Meet",
        description: "On our first meet, remember you were playing BGMI. I was shocked seeing you as such a noob player but still playing!"
    },
    {
        title: "Long Calls",
        description: "The long calls and secrets shared, going through tough times and sad moments as friends together."
    },
    {
        title: "Adventure Time",
        description: "A few trips to Pune and Thane, and shopping from CSMT to Masjid Bandar. Full enjoyment when with you!"
    },
    {
        title: "Always There",
        description: "Through good times and bad, you've always been there, understanding me like no one else can."
    }
];

const MemoriesPage = () => {
    const [currentMemory, setCurrentMemory] = useState(0);
    const navigate = useNavigate();

    const nextMemory = () => {
        if (currentMemory < memories.length - 1) {
            setCurrentMemory(currentMemory + 1);
        } else {
            navigate('/wish');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <PageTransition>
            <h1 className="page-title">Our Special Memories</h1>

            <motion.div
                className="w-full max-w-md mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="card relative overflow-hidden"
                    variants={itemVariants}
                >
                    <div className="absolute top-2 right-2 bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                        {currentMemory + 1} / {memories.length}
                    </div>

                    <h2 className="text-2xl font-bold text-pink-600 mb-4">
                        {memories[currentMemory].title}
                    </h2>

                    <p className="text-gray-700 mb-6">
                        {memories[currentMemory].description}
                    </p>

                    <motion.button
                        className="birthday-btn w-full"
                        whileTap={{ scale: 0.95 }}
                        onClick={nextMemory}
                    >
                        {currentMemory < memories.length - 1 ? "Next Memory" : "Continue to Birthday Wish"}
                    </motion.button>
                </motion.div>
            </motion.div>
        </PageTransition>
    );
};

export default MemoriesPage; 