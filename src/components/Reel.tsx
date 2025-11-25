import { motion } from 'framer-motion';
import './Reel.css';

interface ReelProps {
    symbol: string;
    spinning: boolean;
    delay: number;
}

const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '💎', '7️⃣'];

const Reel = ({ symbol, spinning, delay }: ReelProps) => {
    return (
        <div className="reel-container">
            <div className="reel-window">
                {spinning ? (
                    <motion.div
                        className="reel-strip"
                        animate={{ y: [0, -980] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            ease: "linear",
                            delay: delay
                        }}
                    >
                        {/* Repeat symbols for spinning effect */}
                        {[...symbols, ...symbols, ...symbols].map((s, i) => (
                            <div key={i} className="reel-symbol blur">{s}</div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="reel-symbol static">
                        {symbol}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reel;
