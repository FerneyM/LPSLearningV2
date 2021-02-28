import React, { useState, useEffect, Fragment } from 'react'
import ReactHtmlParser from "react-html-parser";

function Lessons(){
    const [lessons, setLessons ] = useState([]);
    const [lesson, setLesson ] = useState([]);
    const [isLesson, setIsLesson] = useState(false);

    useEffect(function getLessons() {
        const lessons = fetch('https://lps-learning-api.herokuapp.com/api/lessons/')
        .then(res => res.json())
        .then(data => setLessons(data))
        .catch(err => console.log(err));
      }, []);

      const goToLesson = (id) => {
        const lessons = fetch('https://lps-learning-api.herokuapp.com/api/lessons/'+id)
        .then(res => res.json())
        .then(data => {
            setLesson(data);
            setIsLesson(true);
        })
        .catch(err => console.log(err));
      }

      const backToList = () => {setIsLesson(false);}
      
      return(
          <Fragment>
              {!isLesson ? 
               <table>
                 <thead>
                     <tr>
                         <th>Lección</th>
                         <th>Ir</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                        lessons.map(lesson => {
                            return(
                                <tr key={lesson._id}>
                                    <td>{lesson.title}</td>
                                    <td>
                                        <button className="btn light-blue" onClick={() => goToLesson(lesson._id)}>
                                            <i className="material-icons">chevron_right</i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table> : <div></div>}
            {isLesson ? (
                <div>
                    <br></br>
                    <button className="btn light-blue" onClick={() => backToList()}>
                        <i className="material-icons">chevron_left</i>
                    </button>
                    <br></br>
                    <div>
                        <h4>{lesson.title}</h4>
                        <br/>
                        {ReactHtmlParser(lesson.content)}
                    </div>
                </div>
            ) : (
                <div></div>
            )}

          </Fragment>
      )
}
// class Lessons extends Component{
//     constructor(){
//         super();
//         this.state = {
//             lessons: []
//         }
//         this.getLessons = this.getLessons.bind(this);
//     }

//     componentDidMount(){
//         this.getLessons();
//     }

//     getLessons(){
//         const lessons = fetch('/api/lessons/')
//         .then(res => res.json())
//         .then(data => this.setState({lessons:data}))
//         .catch(err => console.log(err));
//     }

//     render(){
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Lección</th>
//                         <th>Ir</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.lessons.map(lesson => {
//                             return(
//                                 <tr key={lesson._id}>
//                                     <td>{lesson.title}</td>
//                                     <td>
//                                         <button className="btn light-blue" onClick={this.goToLesson}>
//                                             <i className="material-icons">chevron_right</i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//             </table>
//         )
//     }
// }

export default Lessons;