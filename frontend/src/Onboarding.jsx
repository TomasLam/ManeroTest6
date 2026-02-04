import { useState } from "react";

const slides = [
  {
    title: "Welcome to Manero!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: "NEXT",
  },
  {
    title: "Easy Track Order",
    text: "Track your orders easily and quickly.",
    button: "NEXT",
  },
  {
    title: "Door to Door Delivery",
    text: "Fast delivery right to your doorstep.",
    button: "GET STARTED",
  },
];

function Onboarding({ goTo }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      // sista steget → login
      goTo("login");
    }
  };

  return (
    <div className="onboarding">
      <div className="onboarding-content">
        <div className="logo">
          <span>MANERO</span>
        </div>

        <h1>{slides[current].title}</h1>

        <p>{slides[current].text}</p>

        <button className="primary-btn" onClick={handleNext}>
          {slides[current].button}
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
