import { useFormik } from "formik";
import { MainContainer } from "./myReadingPage.styled";
import { useDispatch, useSelector } from "react-redux";
import Default from "../../img/png/default-Img.jpg";
import { ReactComponent as Watch } from "../../img/svg/hourglass.svg";
import { ReactComponent as Pie } from "../../img/svg/pie-chart.svg";
import { ReactComponent as Trash } from "../../img/svg/trash.svg";
import { ReactComponent as Frame } from "../../img/svg/Frame.svg";
import {
  finishReadingBook,
  startReadingBook,
} from "../../redux/data/data-operation";
import { useState } from "react";
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

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


export default function MyReadingPage() {
  const dispatch = useDispatch();

  const bookContent = useSelector((state) => state.modal.bookContent);
  const readPage = bookContent.progress[bookContent.progress.length - 1];
  const [reading, setReading] = useState(
    bookContent.progress.length === 0
      ? false
      : readPage.status === "active"
      ? true
      : false
  );

  console.log(bookContent, reading);
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
    const hours = finishReadingDate.getHours().toString().padStart(2, "0");
    const minutes = finishReadingDate.getMinutes().toString().padStart(2, "0");
    const year = finishReadingDate.getFullYear().toString().slice(-2);

    const formattedDate = `${hours}.${minutes}.${year}`;
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



 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



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

        {reading ? (
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
                {bookContent.progress !== 0 &&
                  bookContent.progress.map(
                    (progress, item) =>
                      progress.finishReading && (
                        <li key={item} className="ProgressElement">
                          <div className="FramePercentContainer">
                            <Frame/>
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
                                <Line options={options} data={data} />
                              <Trash />
                            </div>
                            <p className="PagePerHour">
                              {handleReadingPagePerHour(progress)} pages per
                              hour
                            </p>
                          </div>
                        </li>
                      )
                  )}
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
