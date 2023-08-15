import React from "react";
import { Link } from "react-router-dom";
import LazyImg from "../../components/lazyLoadImg/lazyLoadImg";

import metaLogo from "../../assets/Instagram-Meta-Logo-PNG-1.png";
import InstagramLogo from "../../assets/Instagram_Logo.png";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center py-3">
        <select
          className="form-select form-select-sm mb-3 select"
          width={50}
          aria-label=".form-select-md "
        >
          <option defaultValue>English</option>
          <option value="1">persian</option>
          <option value="2">Turkish</option>
          <option value="3">germany</option>
        </select>
      </header>

      <main className="text-center px-4 py-5 my-5">
        <LazyImg
          src={InstagramLogo}
          alt="instagramLogo"
          width={250}
          height={70}
        />
        <div className="col-lg-6 mx-auto mt-4">
          <p className="lead mb-4 fw-normal">
            Sign up to see
            <Link to="/" className="text-decoration-none mx-2">
              photos
            </Link>
            and
            <Link to="/" className="text-decoration-none mx-2">
              videos
            </Link>
            videos from your friends.
          </p>

          <button type="button" className="btn btn-primary btn-lg px-5 gap-3">
            <Link
              to="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT"
              className="text-decoration-none mx-2 lightText"
            >
              Get the Instagram app
            </Link>
          </button>
          <p className="lead mt-4">
            <Link to="/login" className="text-decoration-none mx-2">
              <b>Log in</b>
            </Link>
            or
            <Link to="/signup" className="text-decoration-none mx-2">
              <b>sign up</b>
            </Link>
          </p>
        </div>
      </main>

      <footer className="footer fixed-bottom text-center py-5">
        <div className="d-flex flex-column">
          <div className="px-1">from</div>
          <div className="px-1">
            <LazyImg src={metaLogo} alt="metaLogo" width={110} height={40} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// import React,{useState} from 'react'
// import { Routes, Route  } from "react-router-dom";

// import gucci from '../src/assets/Istanbul.jpg'
// import gucci1 from '../src/assets/GUCCI.jpg'
// import gucci2 from '../src/assets/Travel.jpeg'
// import gucci3 from '../src/assets/ELN-London.jpg'
// import gucci4 from '../src/assets/coffee.jpg'
// import gucci5 from '../src/assets/pitza.jpg'

// import Sidebar from '../src/components/sidebar/sidebar'
// import Suggested from '../src/components/suggested/suggested'
// import Story from '../src/components/story/story'
// import Store from '../src/components/store/store'
// import Home from '../src/components/homePg/home'

// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import './App.css';
// import Create from './components/createPg/create';

// function Main() {
//   const [post,setPost] = useState([
//     {
//      userName:'marziii',
//      caption:'create instagram clone with react and bootstrap5',
//      imgUrl:gucci
//     },
//     {
//      userName:'raziii',
//      caption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab corrupti itaque quia alias eum, obcaecati ducimus adipisci recusandae ipsum dolorem facilis doloribus dignissimos nulla odit? Expedita nesciunt eos eum earum. Voluptates excepturi distinctio eos sequi eveniet velit esse incidunt similique tempora vero illum, praesentium molestiae cumque beatae error explicabo repellendus dolorum, id veniam amet. Facilis dolores delectus autem molestias quae dolorem eaque obcaecati quibusdam harum quas pariatur assumenda ipsum quis natus porro accusantium, consequuntur alias laudantium minima voluptas non ipsa commodi ex nulla. Accusantium quis nemo, quasi ipsam animi, adipisci minima numquam id consequuntur alias deserunt ad autem ipsum.',
//      imgUrl:gucci1
//     },
//     {
//      userName:'mohmd',
//      caption:'create acounting app with react and bootstrap5',
//      imgUrl:gucci2
//     },
//     {
//      userName:'roghiye',
//      caption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab corrupti itaque quia alias eum, obcaecati ducimus adipisci recusandae ipsum dolorem facilis doloribus dignissimos nulla odit? Expedita nesciunt eos eum earum. Voluptates excepturi distinctio eos sequi eveniet velit esse incidunt similique tempora vero illum, praesentium molestiae cumque beatae error explicabo repellendus dolorum, id veniam amet. Facilis dolores delectus autem molestias quae dolorem eaque obcaecati quibusdam harum quas pariatur assumenda ipsum quis natus porro accusantium, consequuntur alias laudantium minima voluptas non ipsa commodi ex nulla. Accusantium quis nemo, quasi ipsam animi, adipisci minima numquam id consequuntur alias deserunt ad autem ipsum.',
//      imgUrl:gucci3
//     },
//     {
//      userName:'pinar',
//      caption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab corrupti itaque quia alias eum, obcaecati ducimus adipisci recusandae ipsum dolorem facilis doloribus dignissimos nulla odit? Expedita nesciunt eos eum earum. Voluptates excepturi distinctio eos sequi eveniet velit esse incidunt similique tempora vero illum, praesentium molestiae cumque beatae error explicabo repellendus dolorum, id veniam amet. Facilis dolores delectus autem molestias quae dolorem eaque obcaecati quibusdam harum quas pariatur assumenda ipsum quis natus porro accusantium, consequuntur alias laudantium minima voluptas non ipsa commodi ex nulla. Accusantium quis nemo, quasi ipsam animi, adipisci minima numquam id consequuntur alias deserunt ad autem ipsum.',
//      imgUrl:gucci4
//     },
//     {
//      userName:'adriana',
//      caption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab corrupti itaque quia alias eum, obcaecati ducimus adipisci recusandae ipsum dolorem facilis doloribus dignissimos nulla odit? Expedita nesciunt eos eum earum. Voluptates excepturi distinctio eos sequi eveniet velit esse incidunt similique tempora vero illum, praesentium molestiae cumque beatae error explicabo repellendus dolorum, id veniam amet. Facilis dolores delectus autem molestias quae dolorem eaque obcaecati quibusdam harum quas pariatur assumenda ipsum quis natus porro accusantium, consequuntur alias laudantium minima voluptas non ipsa commodi ex nulla. Accusantium quis nemo, quasi ipsam animi, adipisci minima numquam id consequuntur alias deserunt ad autem ipsum.',
//      imgUrl:gucci5
//     },
//   ])
//   return (
//   <div className='main'>
//      <div className='row w-100'>
//         <div className='col-2 col-lg-2 col-md-2 bg-light'>
//             <Sidebar/>
//         </div>
//         <div className='col-10 col-lg-10 col-md-10 '>
//           <Story/>

//           <Routes>
//             <Route path="/" element={<Home />}/>
//             <Route path="/store" element={<Store />}/>
//             <Route path="/create" element={<Create />}/>
//           </Routes>
//         </div>
//   </div>
// </div>
//   )
// }

// export default Main
