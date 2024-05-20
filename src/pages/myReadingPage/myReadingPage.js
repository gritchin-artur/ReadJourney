import { useFormik } from "formik";
import { MainContainer } from "./myReadingPage.styled";
import { useDispatch, useSelector } from "react-redux";
import Default from "../../img/png/default-Img.jpg";
import { ReactComponent as Watch } from "../../img/svg/hourglass.svg";
import { ReactComponent as Pie } from "../../img/svg/pie-chart.svg";
import { ReactComponent as Trash } from "../../img/svg/trash.svg";
import { ReactComponent as Frame } from "../../img/svg/Frame.svg";
import {
  deleteReadingOfTheBook,
  finishReadingBook,
  getOwnBooks,
  startReadingBook,
} from "../../redux/data/data-operation";
import { useEffect, useMemo, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { openModalFinishRead } from "../../redux/modals/modal-slice";

import { Chart, registerables } from "chart.js";
import toast from "react-hot-toast";
Chart.register(...registerables);

export default function MyReadingPage() {
  const dispatch = useDispatch();

  const bookContentId = useSelector((state) => state.modal.bookContent._id);
  const isDeleteStatistic = useSelector(
    (state) => state.data.isDeleteStatistic
  );
  const ownBooks = useSelector((state) => state.data.ownBooks);

  const bookContent = ownBooks.find((item) => item._id === bookContentId);

  const readPage = bookContent?.progress?.[bookContent.progress.length - 1];
  // const readPage = bookContent.progress[bookContent.progress.length - 1];
  const [reading, setReading] = useState(
    bookContent.progress.length === 0
      ? false
      : readPage.status === "active"
      ? true
      : false
  );
  const [onStatistic, setOnStatistic] = useState(false);

  useEffect(() => {
    dispatch(getOwnBooks(isDeleteStatistic));
  }, [dispatch, isDeleteStatistic]);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      id: bookContent._id,
      page: bookContent.progress.length
        ? readPage.status === "active"
          ? readPage.startPage
          : readPage.finishPage
        : 0,
    },

    onSubmit: (values) => {
      values.page === bookContent.totalPages && dispatch(openModalFinishRead());
      const lastStopReadPage =
        bookContent.progress.length > 0
          ? bookContent.progress[bookContent.progress.length - 1].finishPage
          : null;
      if (!reading && values.page > lastStopReadPage + 1) {
        return toast.error(`You stopped at page ${lastStopReadPage}!`);
      }
      if (!reading && values.page <= lastStopReadPage + 1) {
        return dispatch(startReadingBook(values)).then((response) => {
          response.payload.title && setReading(true);
        });
      }
      if (reading && values.page <= bookContent.totalPages) {
        return dispatch(finishReadingBook(values)).then((response) => {
          response.payload.title && setReading(false);
        });
      } else {
        return toast.error(`This book have ${bookContent.totalPages} pages!`);
      }
    },
  });

  const handleData = (date) => {
    const finishReadingDate = new Date(date);
    const days = finishReadingDate.getDay().toString().padStart(2, "0");
    const month = finishReadingDate.getMonth().toString().padStart(2, "0");
    const year = finishReadingDate.getFullYear().toString().slice(-2);

    const formattedDate = `${days}.${month}.${year}`;
    return formattedDate;
  };

  const handleReadingTime = (item) => {
    const startReadingDate = new Date(item.startReading);
    const finishReadingDate = new Date(item.finishReading);

    const differenceInMilliseconds = finishReadingDate - startReadingDate;

    const differenceInMinutes = Math.round(
      differenceInMilliseconds / 1000 / 60
    );
    return differenceInMinutes;
  };

  const handleReadingPage = (item) => {
    const readPage = item.finishPage - item.startPage;
    return readPage;
  };

  const renderedStatisticItem = useMemo(() => {
    const labels = bookContent.progress.map((entry) => entry.finishPage);

    const faker = bookContent.progress.map((entry) => entry.speed);

    const lastReadPage = bookContent.progress[bookContent.progress.length - 1];

    const data = {
      labels: labels,
      datasets: [
        {
          fill: true,
          label: "Statistics",
          data: faker,
          borderColor: "#30b94d",
          backgroundColor: "rgba(48, 185, 77, 0.2)",
          pointStyle: "rect",
          pointRadius: 0,
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    };

    const handleReadingPercent = (pageRead) => {
      const totalPage = bookContent.totalPages;
      const readPage = pageRead && pageRead.finishPage - pageRead.startPage;
      const percent = ((readPage / totalPage) * 100).toFixed(1);
      return percent;
    };

    const handleReadingPagePerHour = (item) => {
      const pagePerHour = Math.round(
        (handleReadingTime(item) / 60) * handleReadingPage(item)
      );
      return pagePerHour;
    };

    const handleDeleteStatistic = (statisticId) => {
      const arrayOfId = { bookId: bookContent._id, readingId: statisticId };
      dispatch(deleteReadingOfTheBook(arrayOfId));
    };

    const handleQuantityReadingPercent = (pageRead) => {
      const totalPage = bookContent.totalPages;
      const readPage = pageRead && totalPage - pageRead.finishPage;
      const percent = (100 - (readPage / totalPage) * 100).toFixed(1);
      return percent;
    };

    const currentProgress = handleQuantityReadingPercent(lastReadPage);
    const remainingProgress = 100 - currentProgress;

    const dataStatistic = {
      datasets: [
        {
          data: [currentProgress, remainingProgress],
          backgroundColor: ["#30B94D", "#0f0f0f"],
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    };

    const optionsStatistic = {
      cutout: "80%",
      hover: { mode: null },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
    return onStatistic ? (
      <div className="StatisticCircleContainer">
        <div className="StatisticCircle">
          <Doughnut data={dataStatistic} options={optionsStatistic} />
          <p className="PercentStatistic">100%</p>
        </div>

        {handleQuantityReadingPercent(lastReadPage) > 0 && (
          <div className="PercentContainer">
            <p className="CircleColorContainer">
              {handleQuantityReadingPercent(lastReadPage)}%
            </p>
            <p className="PageAlreadyRead">
              {bookContent.progress[bookContent.progress.length - 1].finishPage}{" "}
              pages read
            </p>
          </div>
        )}
      </div>
    ) : (
      <ul className="ProgressList">
        {bookContent.progress.length !== 0 &&
          bookContent.progress.map(
            (progress, item) =>
              progress.finishReading && (
                <li key={item} className="ProgressElement">
                  <div className="FramePercentContainer">
                    <div className="FrameImg">
                      <Frame />
                    </div>

                    <div className="DateContainer">
                      <p className="DateItem">
                        {handleData(progress.finishReading)}
                      </p>
                      <p className="PercentItem">
                        {handleReadingPercent(progress)}%
                      </p>
                      <p className="MinuteItem">
                        {handleReadingTime(progress)} minutes
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="ReadPage">
                      {handleReadingPage(progress)} pages
                    </p>
                    <div className="GraphikContainer">
                      <div className="Graphique">
                        <Line options={options} data={data} />
                        <p className="PagePerHour">
                          {handleReadingPagePerHour(progress)} pages per hour
                        </p>
                      </div>
                      <Trash
                        className="Trash"
                        onClick={() => handleDeleteStatistic(progress._id)}
                      />
                    </div>
                  </div>
                </li>
              )
          )}
      </ul>
    );
  }, [bookContent, onStatistic, dispatch]);

  return (
    <MainContainer $reading={reading} $onStatistic={onStatistic}>
      <div className="ControlBookContainer">
        <form className="Form">
          <p className="FormTitle">{!reading ? "Start page" : "Stop page"}:</p>
          <div className="DivInput">
            <input
              id="page"
              name="page"
              type="number"
              onChange={handleChange}
              value={values.page}
              onBlur={handleBlur}
            />
            <span className="TextInput">Page number:</span>
          </div>
          <button
            className="ButtonToStart"
            onClick={handleSubmit}
            type="submit"
          >
            {reading ? "To stop" : "To start"}
          </button>
        </form>

        {bookContent.progress.length !== 0 ? (
          <div className="DairyContainer">
            <div className="DairyContainerHeader">
              <h1 className="TitleDairy">
                {onStatistic ? "Statistics" : "Dairy"}
              </h1>
              <div className="IconList">
                <Watch
                  onClick={() => setOnStatistic(false)}
                  className="ButtonDairy"
                />
                <Pie
                  onClick={() => setOnStatistic(true)}
                  className="ButtonStatistic"
                />
              </div>
            </div>
            <p className="TextStatisticVisible">
              Each page, each chapter is a new round of knowledge, a new step
              towards understanding. By rewriting statistics, we create our own
              reading history.
            </p>
            <div className="StatisticContainer">{renderedStatisticItem}</div>
          </div>
        ) : (
          <div className="ProgressMainContainer">
            <div className="ProgressContainer">
              <h2 className="TitleProgress">Progress</h2>
              <p className="ProgressText">
                Here you will see when and how much you read. To record, click
                on the red button above.
              </p>
            </div>
            <div className="ImgContainer">
              <div className="ImgStar" />
            </div>
          </div>
        )}
      </div>
      <div className="OwnBookContainer">
        <h2 className="TitleMyReading">My reading</h2>

        <div className="BookContainer">
          <div className="ContentContainer">
            <img
              className="BookImg"
              src={bookContent.imageUrl ? bookContent.imageUrl : Default}
              alt={bookContent.author}
            />
            <h2 className="BookTitle">{bookContent.title}</h2>
            <p className="BookAuthor">{bookContent.author}</p>
            <div className="RecordButtonContainer">
              <div className="RecordButton" />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
