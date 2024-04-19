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
  startReadingBook,
} from "../../redux/data/data-operation";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

if (ChartJS) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
} else {
  console.error("ChartJS is not defined!");
}

export default function MyReadingPage() {
  const dispatch = useDispatch();

  const bookContent = useSelector((state) => state.modal.bookContent);
  const isDeleteStatistic = useSelector(
    (state) => state.data.isDeleteStatistic
  );
  const readPage = bookContent.progress[bookContent.progress.length - 1];
  const [reading, setReading] = useState(
    bookContent.progress.length === 0
      ? false
      : readPage.status === "active"
      ? true
      : false
    // bookContent.progress.length === 0 ? false : true
  );

  const {
    values,
    // touched,
    // errors,
    handleBlur,
    handleChange,
    handleSubmit,
    // resetForm,
  } = useFormik({
    initialValues: {
      id: bookContent._id,
      page: bookContent.progress.length
        ? readPage.status === "active"
          ? readPage.startPage
          : readPage.finishPage
        : 0,
    },

    // validationSchema: AddBookSchema,

    onSubmit: (values) => {
      console.log(values);
      values.page === bookContent.totalPages && toast.success("Gradulate you");
      if (!reading) {
        dispatch(startReadingBook(values)).then((response) => {
          response.payload.title && setReading(true);
        });
      }
      if (reading) {
        dispatch(finishReadingBook(values)).then((response) => {
          response.payload.title && setReading(false);
        });
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

  const handleReadingPercent = (pageRead) => {
    const totalPage = bookContent.totalPages;
    const readPage = pageRead.finishPage - pageRead.startPage;
    const percent = ((readPage / totalPage) * 100).toFixed(1);
    return percent;
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

  const handleReadingPagePerHour = (item) => {
    const pagePerHour = Math.round(
      (handleReadingTime(item) / 60) * handleReadingPage(item)
    );
    console.log(pagePerHour);
    return pagePerHour;
  };

  const labels = bookContent.progress.map((entry) => entry.finishPage);

  const faker = bookContent.progress.map((entry) => entry.speed);

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

  const handleDeleteStatistic = (statisticId) => {
    const arrayOfId = {bookId: bookContent._id, readingId: statisticId };
    dispatch(deleteReadingOfTheBook(arrayOfId));
  };

  const renderedStatisticItem = useMemo(() => {
    return (
      bookContent.progress.length !== 0 &&
      bookContent.progress.map(
        (progress, item) =>
          progress.finishReading && (
            <li key={item} className="ProgressElement">
              <div className="FramePercentContainer">
                <div className="FrameImg">
                    <Frame/>
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
                <p className="ReadPage">{handleReadingPage(progress)} pages</p>
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
      )
    );
  }, [bookContent.progress, data, options]);

  return (
    <MainContainer $reading={reading}>
      <div className="ControlBookContainer">
        <form className="Form">
          <p className="FormTitle">Filters:</p>
          <div className="DivInput">
            <input
              id="page"
              name="page"
              type="number"
              // className={getInputClass("title")}
              onChange={handleChange}
              value={values.page}
              onBlur={handleBlur}
            />
            <span className="TextInput">Page number:</span>
            {/* {getInputAlert("title")} */}
          </div>
          <button className="ButtonToStart" onClick={handleSubmit}>
            {reading ? "To stop" : "To start"}
          </button>
        </form>

        {bookContent.progress.length !== 0 ? (
          <div className="DairyContainer">
            <div className="DairyContainerHeader">
              <h1 className="TitleDairy">Dairy</h1>
              <div className="IconList">
                <Watch />
                <Pie />
              </div>
            </div>
            <div className="StatisticContainer">
              <ul className="ProgressList">
                {renderedStatisticItem}
                {/* {bookContent.progress !== 0 &&
                  bookContent.progress.map(
                    (progress, item) =>
                      progress.finishReading && (
                        <li key={item} className="ProgressElement">
                          <div className="FramePercentContainer">
                            <Frame />
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
                              {handleReadingPagePerHour(progress)} pages per
                              hour
                            </p>
                                    </div>
                              <Trash className="Trash" onClick={()=> handleDeleteStatistic(progress._id)}/>
                            </div>
                          </div>
                        </li>
                      )
                  )} */}
              </ul>
            </div>
          </div>
        ) : (
          <>
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
          </>
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
