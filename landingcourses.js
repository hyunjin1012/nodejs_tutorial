// import { useEffect, useState } from "react";
// import axios from "axios";

// // export default function ApiResponse() {
// //   const [categories, setCategories] = useState([])
// //   useEffect(() => {
// //     fetchLandingCourses()
// //   }, [])

// //   const fetchLandingCourses = () => {
// //     axios
// //     .get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
// //     .then(function(res) {
// //       setCategories(res.data.categories)
// //     })
// //     .catch(function(error) {
// //       setError(error.toString())
// //     })
// //   }

// //   return (
// //     <div>{categories}</div>
// //   )
// // }

// export async function getServerSideProps() {
//   const res = await axios.get(
//     "https://api.ringleplus.com/api/v4/student/landing/course?locale=en"
//   );
//   const categories = res.data.categories;
//   return {
//     props: { categories: categories },
//   };
// }

// export default function Courses({ categories }) {
//   return (
//     <div>
//       {categories.map((category) => {
//         return (
//           <div key={category.title}>
//             <div style={{ fontSize: "30px", marginBottom: "10px" }}>{category.title}</div>

//             <div>
//               {category.courses.map((course) => {
//                 return (
//                   <div key={course.id}>
//                     <img src={course.image_url} style={{width: "200px", height: "200px"}} /> 
//                     <div>{course.title}</div>
//                     <div style={{fontSize: "10px"}}>{course.subtitle}</div>
//                     <div style={{fontSize: "10px", marginBottom: "10px"}}>{course.category}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
