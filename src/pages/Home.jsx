import React, { useContext } from "react";
import "../App.css";
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from "../context/UserContext";
import Chat from "./Chat";
import { generateResponse } from "../gemini";
import { query } from "../huggingFace";

const Home = () => {
  let {
    startRes,
    setStartRes,
    popUp,
    setPopUP,
    input,
    setInput,
    feature,
    setFeature,
    showResult,
    setShowResult,
    prevFeature,
    setPrevFeature,
    genImgUrl,
    setGenImgUrl,
  } = useContext(dataContext);

  async function handleSubmit(e) {
    setStartRes(true);
    setPrevFeature(feature);

    setShowResult("");
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    user.data = null;
    user.mime_type = null;
    user.imgUrl = null;
    setInput("");
    let result = await generateResponse();
    setShowResult(result);
    setFeature("chat");

  }

  // ---------Handling the Image Fetched from Browsing-------------
  function handleImage(e) {
    setFeature("upimg");
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = (event) => {
      let base64 = event.target.result.split(",")[1];
      user.data = base64;
      user.mime_type = file.type;
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
    };
    reader.readAsDataURL(file);
  }

  // Handling the Image Coming form the Hugging Face
  async function handleGenerateImg() {
    setStartRes(true);
    setPrevFeature(feature);
    setGenImgUrl("")
    prevUser.prompt = input;
    let result = await query().then((e) => {
      let url = URL.createObjectURL(e);
      setGenImgUrl(url);
    });
    setInput("");
    setFeature("chat");
  }

  return (
    <div className="home">
      {/* Navbar Section */}
      <nav>
        <div
          className="logo"
          onClick={() => {
            setStartRes(false);
            setFeature("chat");
                user.data = null;
                user.mime_type = null;
                user.imgUrl = null;
                setPopUP(false)
          }}
        >
          Smart AI Bot
        </div>
      </nav>

      {/* ---------------Browse Images------------------ */}
      <input
        type="file"
        accept="image/*"
        hidden
        id="inputImg"
        onChange={handleImage}
      />

      {!startRes ? (
        <div className="hero">
          <span id="tag">What can I hep with?</span>
          <div className="cate">
            <div
              className="upImg"
              onClick={() => {
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="genImg" onClick={() => setFeature("genimg")}>
              <RiImageAiFill />
              <span>Generate Image</span>
            </div>
            <div className="chat" onClick={() => setFeature("chat")}>
              <MdChatBubbleOutline />
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      {/* Hero-Section */}

      <form
        className="input-box"
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            if (feature == "genimg") {
              handleGenerateImg();
            } else {
              handleSubmit(e);
            }
          }
        }}
      >

        {/* To display image above the chat */}
        <img src={user.imgUrl} alt="" id="input-img"/>

        {popUp ? (
          <div className="pop-up">
            <div
              className="select-up"
              onClick={() => {
                setPopUP(false);
                setFeature("chat");
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div
              className="select-gen"
              onClick={() => {
                setFeature("genimg");
                setPopUP(false);
                
              }}
            >
              <RiImageAiFill />
              <span>Generate Image</span>
            </div>
          </div>
        ) : null}

        <div
          id="add"
          onClick={() => {
            setPopUP((prev) => !prev);
          }}
        >
          {feature == "genimg" ? <RiImageAiFill id="genImg" /> : <FiPlus />}
        </div>
        <input
          type="text"
          placeholder="Ask Something..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {input ? (
          <button id="submit">
            <FaArrowUpLong />
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default Home;
