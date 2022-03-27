import "./App.css";
import { useState, useEffect } from "react";


import sampleQuestions from "./data";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Question from "./Question";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('')






  const [alert1, setAlert1] = useState({ show: false, msg: "" });
  const [alert2, setAlert2] = useState({ show: false, msg: "" });
  const [alert3, setAlert3] = useState({ show: false, msg: "" });
  const removeAlert1 = () => { setAlert1({ show: false, msg: '' }) }
  const removeAlert2 = () => { setAlert2({ show: false, msg: '' }) }
  const removeAlert3 = () => { setAlert3({ show: false, msg: '' }) }

  const [test, setTest] = useState('hi')

  useEffect(() => {
    getQuestions()
  }, [])


  const getQuestions = async () => {
    const response = await fetch(`https://api.stackexchange.com/2.3/questions?fromdate=1642118400&todate=1642204800&order=desc&sort=activity&site=stackoverflow&filter=withbody`)
    const data = await response.json();
    setList(data.items)

    // console.log(data.items[0]);
    // console.log('title: ' + data.items[0].title);
    // console.log('body: ' + data.items[0].body.substring(0,200));
    // console.log('display name: ' +data.items[0].owner.display_name);
    // console.log('tags: ' +data.items[0].tags);
    // console.log('profile img: ' +data.items[0].owner.profile_image);
    // console.log('question id: ' +data.items[0].question_id);
    // setTest(data.items[0].body.substring(0, 300))
    // console.log(typeof(data.items[0].body));
    console.log(list.length);

  }



  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("this function is not working currently");

    if (!title) {
      //!----display empty title alert---
      setAlert1({ show: true, msg: 'please enter a title!' })
    }
    if (!body) {
      //!----display empty body alert---
      setAlert2({ show: true, msg: 'please enter a body!' })
    }
    if (!tags[0]) {
      setAlert3({ show: true, msg: 'please enter at least one tag!' })
    }
    else if (title && body && tags[0]) {
      //! add question to 'questions' array
      const newItem = {

        title: title,
        desc: body,
        user: "Gabriel Kok",
        tags: tags.split(","),
        img: "/images/meta1.png",
        viewCount: "?",
        ansCount: '?'
      };

      // setList([newItem, ...list]);

      setTitle("");
      setBody("");
      setTags("");

      //display success message
      console.log('answer successfully submitted');
      setShowModal(false);
    }
  };
  const filterUnanswered = () => {
    setList(list.filter((question) => { return question.answer_count === 0 }))
  }
  const filterNewest = () => {
    getQuestions()
  }
  const searchTag = (e) => {
    e.preventDefault()
    //filter the list based on this search
    setList(list.filter((question) => {
      return question.tags.includes(search)
    }))

  }

  return (
    <div>
      <div>

        <Navbar searchTag={searchTag} setSearch={setSearch} ></Navbar>
        <Filter showModal={showModal} openModal={openModal} qnsCount={list.length} filterUnanswered={filterUnanswered} filterNewest={filterNewest}></Filter>

        {/* <div>{test}</div> */}

        {/* <!--------------------------Questions List----------------------------> */}
        <section className="questions-container">
          <div className="questions">
            {list.map((question) => {
              return <Question
                title={question.title}
                desc={question.body.substring(0, 200)}
                user={question.owner.display_name}
                tags={question.tags}
                img={question.owner.profile_image}
                key={question.question_id}
                viewCount={question.view_count}
                ansCount={question.answer_count}
              ></Question>;
            })}
          </div>
        </section>

        {/* <!------------------------------Ask a Question Modal-------------------------------> */}

        <Modal
          showModal={showModal}
          closeModal={closeModal}
          submitForm={submitForm}
          setTitle={setTitle}
          setBody={setBody}
          setTags={setTags}

          alert1={alert1}
          removeAlert1={removeAlert1}
          alert2={alert2}
          removeAlert2={removeAlert2}
          alert3={alert3}
          removeAlert3={removeAlert3}


        ></Modal>
      </div>
    </div >
  );
}

export default App;
