import user from "../public/user.jpg";
import { FaChevronRight } from "react-icons/fa";

const Balance = () => {
  return (
    <>
      <article className="article-two">
        <div>
          <span className="balance">Balance</span>
          <span className="percent">+35%</span>
        </div>
        <div className="amount">
          <span className="dull">$</span>
          <span>480</span>
          <span className="dull">.00</span>
        </div>
      </article>
      <article className="images">
        {Array.from({ length: 7 }, (_, idx) => {
          return (
            <div key={idx} className="image">
              <img className="img" src={user} alt="" />
            </div>
          );
        })}
        <div className=" eight">
          <div className="">+8</div>
        </div>
      </article>
      <article className="four">
        <div className="desc">
          Welcome 960 customers with
          <br />
          the welcome message.
        </div>
        <div className="send">
          <button className="send-btn">Send</button>{" "}
          <FaChevronRight className="arrow" />
        </div>
      </article>
    </>
  );
};

export default Balance;
