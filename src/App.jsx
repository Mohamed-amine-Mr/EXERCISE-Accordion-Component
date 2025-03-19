import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((e, i) => (
        <AccordionaItem
          title={e.title}
          text={e.text}
          num={i <= 9 ? `0${i + 1}` : i}
        />
      ))}
    </div>
  );
}
function AccordionaItem({ title, num, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((cur) => !cur);
  }

  function open() {}
  return (
    <div className="item" onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}{" "}
    </div>
  );
}
