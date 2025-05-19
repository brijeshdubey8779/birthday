import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const FinalPage = () => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="max-w-lg mx-auto text-center">
                <motion.h1
                    className="text-5xl font-bold mb-8 text-pink-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    (♡. Vaishnavi. ♡)
                </motion.h1>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-left space-y-4">
                        <p className="text-lg">
                            <span className="font-bold">(♡. Vaishnavi. ♡) &gt; V𝖆𝖎𝖘𝖍❣︎𝖓𝖆𝖛𝖎♛ &gt; Vaishnavi Patil &gt; Vaidhnavi &gt; Kugisaki &gt; Anya</span>
                        </p>

                        <p className="text-lg">
                            A lot has changed in the past 4 years—especially your name in my contact list, bro 🤣🤣.<br />
                            Happy Birthday 🎂🎉🎉 Vaishu urf Anya-san!
                        </p>

                        <p className="text-lg">
                            First meeting was not that good, but ending college with a super strong bond with you.<br />
                            It's really been a fun journey with you ever since offline college started.<br />
                            Waise to DSE wale meko achhe nhi lage but the exception started from you.
                        </p>

                        <p className="text-lg">
                            You changed a lot of things for me—you didn't notice, but you did eventually.<br />
                            And lastly, thanks for being the best friend and the best person always by my side, just like a buddy.<br />
                            Or tu chhoti hai badi nhi didi mat bana kar samjhi 😤
                        </p>

                        <p className="text-lg">
                            Once again, happiest birthday to the sweetest person I met in the journey of my final education degree.<br />
                            I hope this bond will last till the end.....
                        </p>

                        <p className="text-lg">
                            Now, we had a lot of struggle finding jobs. We did a lot of work together and I won't be able to forget this ever.<br />
                            You are a very precious part of my life, and you always will be.
                        </p>

                        <p className="text-lg">
                            Just keep doing your best and you will achieve your goals.<br />
                            I know you and I know you have the potential—just keep going.<br />
                            And don't forget, no matter what, I will always be there for you.
                        </p>

                        <p className="text-lg">
                            Krishna ji teri sab wished puri kare or jaldi se job pe lag phir Banaras or Mathura bhi jana hai 🤣🤣
                        </p>

                        <p className="text-lg font-bold mt-6">
                            Enjoy your day ❣️
                        </p>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <div className="text-5xl mb-6">❤️</div>
                        <motion.button
                            className="birthday-btn"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/')}
                        >
                            Start Again
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default FinalPage; 
