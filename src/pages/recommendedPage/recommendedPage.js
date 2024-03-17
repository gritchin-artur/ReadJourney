import { useSelector } from "react-redux";
import { RecommendedPageContainer } from "./recommendedPage.styled";
import { ReactComponent as Arrow } from "../../img/svg/log-in.svg";
import { ReactComponent as Prev } from "../../img/svg/chevron-left (1)-2.svg";
import { ReactComponent as Next } from "../../img/svg/chevron-left-2.svg";

export default function RecommendedPage() {
  const email = useSelector((state) => state.auth.email);
  console.log(email);
  return (
    <RecommendedPageContainer>
      <div className="FormContainer">
        <form className="Form">
          <p className="FormTitle">Filters:</p>
          <div className="DivInput">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter text"
              //   className={getInputClass("email")}
              //   onChange={handleChange}
              //   value={values.email}
              //   onBlur={handleBlur}
            />
            <span className="TextInput">Book title:</span>
          </div>
          <div className="DivInput">
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Enter text"
              //   className={getInputClass("email")}
              //   onChange={handleChange}
              //   value={values.email}
              //   onBlur={handleBlur}
            />
            <span className="TextInput">The author:</span>
          </div>
        </form>
        <button className="ButtonToApply">To apply</button>
        <div className="StartWorkContainer">
          <h2 className="Title">Start your workout</h2>
          <ul className="WorkOutList">
            <li className="WorkOutElement">
              <span className="WorkOutNumber">1</span>
              <p className="WorkOutText">
                Create a personal library:
                <span className="WorkOutPartText">
                  add the books you intend to read to it.
                </span>
              </p>
            </li>
            <li className="WorkOutElement">
              <span className="WorkOutNumber">2</span>
              <p className="WorkOutText">
                Create your first workout:
                <span className="WorkOutPartText">
                  define a goal, choose a period, start training.
                </span>
              </p>
            </li>
          </ul>
          <ul className="ButtonList">
            <li className="ButtonMyLibrary">My library</li>
            <li>
              <Arrow />
            </li>
          </ul>
        </div>
      </div>
      <div className="RecommendedboksContainer">
        <div className="TitleButtonContainer">
          <h2 className="RecommendedboksTitle">Recommended</h2>
          <ul className="PrevNextButtonList">
            <li className="PrevNextButton">
              <Prev className="Arrow" />
            </li>
            <li className="PrevNextButton">
              <Next className="Arrow" />
            </li>
          </ul>
        </div>
      </div>
    </RecommendedPageContainer>
  );
}
