import { Play, RefreshCw } from 'lucide-react';
import './Controls.css';

interface ControlsProps {
    onSpin: () => void;
    onReset: () => void;
    spinning: boolean;
    credits: number;
    bet: number;
    setBet: (bet: number) => void;
    win: number;
}

const Controls = ({ onSpin, onReset, spinning, credits, bet, setBet, win }: ControlsProps) => {
    return (
        <div className="controls-container">
            <div className="display-panel">
                <div className="display-box">
                    <span className="label">餘額</span>
                    <span className="value">${credits}</span>
                </div>
                <div className="display-box win-box">
                    <span className="label">贏得</span>
                    <span className={`value ${win > 0 ? 'highlight' : ''}`}>${win}</span>
                </div>
            </div>

            <div className="action-panel">
                <div className="bet-controls">
                    <span className="label">下注</span>
                    <div className="bet-buttons">
                        {[10, 20, 50, 100].map((amount) => (
                            <button
                                key={amount}
                                className={`bet-btn ${bet === amount ? 'active' : ''}`}
                                onClick={() => setBet(amount)}
                                disabled={spinning}
                            >
                                ${amount}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="spin-btn"
                    onClick={onSpin}
                    disabled={spinning || credits < bet}
                >
                    {spinning ? <RefreshCw className="spin-icon spinning" /> : <Play className="spin-icon" fill="currentColor" />}
                    旋轉
                </button>
            </div>

            <button className="reset-btn" onClick={onReset} disabled={spinning}>
                重置遊戲
            </button>
        </div>
    );
};

export default Controls;
