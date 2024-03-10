import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import axios from "axios";
import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { format } from "date-fns";
import { useState } from "react";
import Loader from "../Loader";
import toast from "react-hot-toast";

const SinglePaper = () => {
  const { id } = useParams();
  const [newspaper, setNewsPaper] = useState([]);
  const [loader, setLoader] = useState(true);
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewspaper();
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchNewspaper = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/newspaper/${id}`
      );
      if (response) {
        setNewsPaper(response.data);
        setPdfFile(`${response.data.newspaper.url}`);
      }
    } catch (error) {
      navigate("/error");
      toast.error(error.message);
    }
  };

  const docs = [{ uri: pdfFile, fileName: newspaper.title }];

  return loader ? (
    <Loader />
  ) : (
    <div className="content-wrapper ">
      <div className="single-newspaper-container">
        <div className="main-newspaper-content">
          <h1 className="news-title newspaper-title">{newspaper?.title}</h1>

          <div className="update-and-share">
            <p>
              <strong>Published On : </strong>
              {newspaper.createdAt
                ? `${format(newspaper.createdAt, "d MMM, yyyy h:mm aaaa")}`
                : "N/A"}
            </p>

            <div className="share-options">
              <p>
                <strong>Share on</strong>
              </p>
              <FacebookShareButton
                title={newspaper.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newspaper._id}`}
              >
                <FacebookIcon size={34} round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton
                title={newspaper.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newspaper._id}`}
              >
                <WhatsappIcon size={34} round={true}></WhatsappIcon>
              </WhatsappShareButton>
              <TwitterShareButton
                title={newspaper.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newspaper._id}`}
              >
                <TwitterIcon size={34} round={true}></TwitterIcon>
              </TwitterShareButton>
              <TelegramShareButton
                title={newspaper.title}
                url={`${process.env.REACT_APP_FRONTEND_URL}/${newspaper._id}`}
              >
                <TelegramIcon size={34} round={true}></TelegramIcon>
              </TelegramShareButton>
            </div>
          </div>

          <div className="pdf-section">
            <DocViewer
              documents={docs}
              pluginRenderers={DocViewerRenderers}
              config={{
                header: {
                  disableHeader: true,
                  disableFileName: true,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />

            {/* <iframe src={pdfFile}  title="viewer"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePaper;
