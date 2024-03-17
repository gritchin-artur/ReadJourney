import { WellDoneContainer } from "./wellDoneModal.styled";
import { ReactComponent as ButtonClose } from "../../img/x-modal.svg";
import { useSelector } from "react-redux";

export default function WellDoneModal({ handleClickClose }) {
  const answers = useSelector((state) => state.data.answers);
  return (
    answers && (
      <WellDoneContainer>
        <ButtonClose className="ButtonClose" onClick={handleClickClose} />
        <h2 className="Title">Well done</h2>
        <div className="ContentContainer">
          <div className="CorrectAnswerContainer">
            <p className="TitleCorrectAnswer">Сorrect answers: </p>
            <ul className="CorrectAnswerList">
              {answers.map(
                (correct, item) =>
                  correct.isDone === true && (
                    <li key={item} className="CorrectAnswerItem">
                      {correct[correct.task]}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="MistakesContainer">
            <p className="TitleMistakes">Mistakes: </p>
            <ul className="MistakesList">
              {answers.map(
                (mistake, item) =>
                  mistake.isDone === false && (
                    <li key={item} className="MistakesItem">
                      {mistake.task === "en" ? mistake.en : mistake.ua}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="Img" />
        </div>
      </WellDoneContainer>
    )
  );
}
