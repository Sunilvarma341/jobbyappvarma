// import {Switch, Route, Redirect} from 'react-router-dom'

// import LoginForm from './components/LoginForm'
// import JobsCardView from './components/JobsCardView'
// import Jobs from './components/Jobs'

// import ProtectedRoute from './components/ProtectedRoute'
// import Home from './components/Home'
// import NotFound from './components/NotFound'
// import './App.css'

// // These are the lists used in the application. You can move them to any component needed.
// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// const salaryRangesList = [
//   {
//     salaryRangeId: '1000000',
//     label: '10 LPA and above',
//   },
//   {
//     salaryRangeId: '2000000',
//     label: '20 LPA and above',
//   },
//   {
//     salaryRangeId: '3000000',
//     label: '30 LPA and above',
//   },
//   {
//     salaryRangeId: '4000000',
//     label: '40 LPA and above',
//   },
// ]

// // // Replace your code here
// // const App = () => (
// //   <div className="app-container">
// //     <Switch>
// //       <Route exact path="/login" component={LoginForm} />
// //       <Route path="/" component={Home} />
// //       <Route
// //         exact
// //         path="/jobs"
// //         render={props => (
// //           <Jobs
// //             {...props}
// //             employmentTypesList={employmentTypesList}
// //             salaryRangesList={salaryRangesList}
// //           />
// //         )}
// //       />
// //       <Route exact path="/jobs/:id" component={JobsCardView} />
// //     </Switch>
// //   </div>
// // )

// const App = () => (
//   <div className="app-container">
//     <Switch>
//       <Route exact path="/login" component={LoginForm} />
//       <ProtectedRoute exact path="/" component={Home} />
//       <ProtectedRoute exact path="/jobs/:id" component={JobsCardView} />
//       <ProtectedRoute
//         exact
//         path="/jobs"
//         render={() => (
//           <Jobs
//             employmentTypesList={employmentTypesList}
//             salaryRangesList={salaryRangesList}
//           />
//         )}
//       />
//       <Route path="/not-found" component={NotFound} />
//       <Redirect to="not-found" />
//     </Switch>
//   </div>
// )

// export default App

import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Jobs from './components/Jobs'
import AboutJob from './components/AboutJob'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
