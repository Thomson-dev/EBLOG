// "use client";
// import Navbar2 from "@/components/SideNavbar";
// import React, { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { useSelector } from "react-redux";
// import ResponsivePagination from "react-responsive-pagination";
// import "react-responsive-pagination/themes/classic.css";

// const users = [
//   {
//     name: "John Doe",
//     status: "admin",
//     email: "john.doe@example.com",
//     createdAt: "2023-01-01",
//   },
//   {
//     name: "Jane Smith",
//     status: "user",
//     email: "jane.smith@example.com",
//     createdAt: "2023-02-15",
//   },
//   {
//     name: "Alice Johnson",
//     status: "admin",
//     email: "alice.johnson@example.com",
//     createdAt: "2023-03-10",
//   },
//   {
//     name: "Bob Brown",
//     status: "user",
//     email: "bob.brown@example.com",
//     createdAt: "2023-04-05",
//   },
//   {
//     name: "Alice Johnson",
//     status: "admin",
//     email: "alice.johnson@example.com",
//     createdAt: "2023-03-10",
//   },
//   {
//     name: "Bob Brown",
//     status: "user",
//     email: "bob.brown@example.com",
//     createdAt: "2023-04-05",
//   },
// ];

// const CheckboxLabel = () => {
//   return (
//     <label className="inline-flex items-center me-5 cursor-pointer">
//       <input type="checkbox" value="" className="sr-only peer" defaultChecked />
//       <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
//     </label>
//   );
// };

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   //@ts-ignore
//  const { currentUser,  loading,  error: errorMessage,} = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch(`http://localhost:8000/api/user/getusers`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${currentUser.token}`,
//           },
//         });
//         const data = await res.json();
       
  
//         if (res.ok) {
//           setUsers(data.users);
//         }
//       } catch (error) {
//         //@ts-ignore
//         console.log(error.message);
//       }
//     };
  
//     if (currentUser.isAdmin) {
//       fetchUsers();
//     }
//   }, [currentUser._id]);


//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 5; // Number of users to display per page
//   const totalPages = Math.ceil(users.length / usersPerPage);

//   // Calculate the users to display based on the current page
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   return (
//     <div className="bg-gray-50  h-screen">
//       <Navbar2 />
//       <table className="w-full max-w-[1200px] border rounded-sm mx-auto mt-[5rem] divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="text-center px-6 py-3">
//               Name
//             </th>
//             <th scope="col" className="px-6 text-center py-3">
//               Status
//             </th>
//             <th scope="col" className="px-6 text-center py-3">
//               Email
//             </th>
//             <th scope="col" className="px-6 text-center py-3">
//               createdAt
//             </th>
//             <th scope="col" className="px-6 text-center py-3">
//               Admin
//             </th>
//             <th scope="col" className="px-6 text-center py-3">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {currentUsers.map((user, index) => (
//             <tr key={index}>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//               {/* @ts-ignore */}
//               {user.username}
//               </td>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//                  {/* @ts-ignore */}
//               {user.isAdmin == true ? 'Admin' : 'User'}
//               </td>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//                  {/* @ts-ignore */}
//                 {user.email}
//               </td>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//                  {/* @ts-ignore */}
//               {new Date(user.createdAt).toLocaleDateString()}
//               </td>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//                 <CheckboxLabel />
//               </td>
//               <td className="px-6 py-4 text-center whitespace-nowrap">
//                 <MdDelete className="text-2xl text-red-600" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex max-w-[1200px] mx-auto justify-start items-start">
//         <ResponsivePagination
//           current={currentPage}
//           total={totalPages}
//           maxWidth={5}
//           onPageChange={setCurrentPage}
//           className="flex gap-4 text-[16px] border-blue-500  w-full py-10 justify-start"
//           pageItemClassName="w-[10vw] md:w-[3vw] text-center rounded-[4px] text-black border"
//           activeItemClassName="border-[blue] page-item"
//           disabledItemClassName="text-gray-400"
//           nextClassName="active:bg-green-700"
//         />
//       </div>
//     </div>
//   );
// };

// export default UserTable;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
