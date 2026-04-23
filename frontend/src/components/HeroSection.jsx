import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import './HeroSection.css';

export const HeroSection = ({ onCounterClick, count }) => {
  return (
    <section id="center">
      <div className="hero">
        <img src={viteLogo} className="logo vite" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div>
        <h1>Welcome to COCO</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={onCounterClick}
        aria-label="Increment counter"
      >
        Count is {count}
      </button>
    </section>
  );
};

export default HeroSection;

