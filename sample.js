// import { useEffect, useState } from "react";
// import {axios} from "axios"

// function ApiResponse({categories}) {

// }

// const [categories, setCategories] = useState([]);


// useEffect(() => {
//   axios
//   .get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
//   .then(function(res){
//     setCategories(res.data.categories)})
//   .catch(function(error) {
//     setError(error.toString())
//   })
// }, [])

// const fetchLandingCourses = () => {

// }
// useEffect(fetchLandingCourses(), [])

// export async function getServerSideProps() {
//  return {
//    props: {categories: [
//      {
//        title: "junior",
//        courses: [],
//      }
//    ]}
//  }
// }

// export async function getServerSideProps() {
//   const res = await axios.get()
//   const categories = res.data.categories

//   return {
//     props: {categories:categories}
//   }
// }
