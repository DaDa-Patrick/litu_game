import { useState, useEffect } from 'react';
import Reel from './Reel';
import Controls from './Controls';
import './SlotMachine.css';

const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '💎', '7️⃣'];
// Payout multipliers for 3 matching symbols
const payouts: Record<string, number> = {
    '🍒': 5,
    '🍋': 10,
    '🍊': 15,
    '🍉': 20,
    '🍇': 25,
    '💎': 50,
    '7️⃣': 100
};

const SlotMachine = () => {
    const [credits, setCredits] = useState(500);
    const [bet, setBet] = useState(10);
    const [spinning, setSpinning] = useState(false);
    const [reels, setReels] = useState(['7️⃣', '7️⃣', '7️⃣']);
    const [win, setWin] = useState(0);
    const [spinCount, setSpinCount] = useState(0);

    const [targetReels, setTargetReels] = useState<string[] | null>(null);

    useEffect(() => {
        if (spinning && targetReels) {
            const timer = setTimeout(() => {
                setReels(targetReels);
                checkWin(targetReels);
                setSpinning(false);
                setTargetReels(null);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [spinning, targetReels]);

    const spin = () => {
        if (credits < bet) return;

        setSpinning(true);
        setWin(0);
        setCredits(prev => prev - bet);

        const currentSpin = spinCount + 1;
        setSpinCount(currentSpin);

        let newReels: string[];

        // Rigged Logic
        if (currentSpin <= 5) {
            // Beginner's luck: 40% chance to win small
            if (Math.random() < 0.4) {
                const symbol = symbols[Math.floor(Math.random() * 3)]; // Low value symbols
                newReels = [symbol, symbol, symbol];
            } else {
                newReels = getRandomReels();
            }
        } else {
            // Force lose: 90% chance to lose
            if (Math.random() < 0.9) {
                newReels = getLosingReels();
            } else {
                newReels = getRandomReels();
            }
        }

        setTargetReels(newReels);
    };

    const getRandomReels = () => [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];

    const getLosingReels = () => {
        let r1 = symbols[Math.floor(Math.random() * symbols.length)];
        let r2 = symbols[Math.floor(Math.random() * symbols.length)];
        let r3 = symbols[Math.floor(Math.random() * symbols.length)];

        // Ensure they don't all match
        while (r1 === r2 && r2 === r3) {
            r3 = symbols[Math.floor(Math.random() * symbols.length)];
        }
        return [r1, r2, r3];
    };

    const checkWin = (currentReels: string[]) => {
        const [r1, r2, r3] = currentReels;
        if (r1 === r2 && r2 === r3) {
            const winAmount = bet * payouts[r1];
            setWin(winAmount);
            setCredits(prev => prev + winAmount);
        }
    };

    const resetGame = () => {
        setCredits(500);
        setBet(10);
        setWin(0);
        setReels(['7️⃣', '7️⃣', '7️⃣']);
        setSpinCount(0);
    };

    return (
        <div className="slot-machine">
            <div className="reels-panel">
                <div className="reels-frame">
                    <Reel symbol={reels[0]} spinning={spinning} delay={0} />
                    <Reel symbol={reels[1]} spinning={spinning} delay={0.2} />
                    <Reel symbol={reels[2]} spinning={spinning} delay={0.4} />
                </div>
                <div className="payline" />
            </div>

            <Controls
                onSpin={spin}
                onReset={resetGame}
                spinning={spinning}
                credits={credits}
                bet={bet}
                setBet={setBet}
                win={win}
            />
        </div>
    );
};

export default SlotMachine;
