// import React, { useState, useEffect } from 'react'
// import { User, LogOut, MessageSquare, Send, Star, Camera, Edit, Trash2 } from 'lucide-react'
// import { getToken } from '../utils/auth'

// const Home = () => {
//   // These functions would be imported from your auth utils
//   const removeToken = () => {
//     // Your token removal logic
//     localStorage.removeItem('token')
//   }
  
//   const removeUser = () => {
//     // Your user removal logic
//     localStorage.removeItem('user')
//   }
  
//   const navigate = (path) => {
//     // This would use your router navigation
//     window.location.href = path
//   }
//   const [activeTab, setActiveTab] = useState('dashboard')
// const [user, setUser] = useState({
//   name: '',
//   email: '',
//   contact: '',
//   image: ''
// })
// const [imageFile, setImageFile] = useState(null)


 


   

// useEffect(() => {
//   const storedUser = localStorage.getItem('user')
//   if (storedUser) {
//     const parsedUser = JSON.parse(storedUser)
//     setUser(parsedUser)
  
//   }
// }, [])



//   const [feedbackData, setFeedbackData] = useState({
//     teacherName: '',
//     subject: '',
//     rating: 0,
//     feedback: ''
//   })

//   const handleLogout = () => {
//     removeToken()
//     removeUser()
//     alert("Successfully logged out!")
//     navigate('/auth')
//   }

//   const handleFeedbackSubmit = async (e) => {
//   e.preventDefault()
  
//   try {
//     const token = getToken()
//     const response = await fetch('http://localhost:7000/api/auth/feedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(feedbackData)
//     })

//     const result = await response.json()

//     if (response.ok) {
//       alert('Feedback submitted successfully!')
//       setFeedbackData({
//         teacherName: '',
//         subject: '',
//         rating: 0,
//         feedback: ''
//       })
//     } else {
//       alert(`Failed to submit feedback: ${result.message}`)
//     }

//   } catch (error) {
//     console.error('Error submitting feedback:', error)
//     alert('Something went wrong while submitting feedback.')
//   }
// }


//   const handleFeedbackInputChange = (e) => {
//     const { name, value } = e.target
//     setFeedbackData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleRatingClick = (rating) => {
//     setFeedbackData(prev => ({
//       ...prev,
//       rating: rating
//     }))
//   }

//   // Profile handlers
//   const handleProfileInputChange = (e) => {
//     const { name, value } = e.target
//     setUser(prev => ({ ...prev, [name]: value }))
//   }

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0])
//   }

//   const handleUpdate = async () => {
//     const formData = new FormData()
//     formData.append('name', user.name)
//     formData.append('email', user.email)
//     formData.append('contact', user.contact)
//     if (imageFile) formData.append('image', imageFile)

//     try {
//       const token = getToken()
//       // Replace with actual axios call
//       const response = await fetch('http://localhost:7000/api/auth/profile', {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData
//       })
//       const result = await response.json()
      
//       alert(result.message)
//       setUser(result.user)
//     } catch (err) {
//       console.error('Error updating profile', err)
//     }
//   }

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?')
//     if (!confirmDelete) return

//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/profile', {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       const result = await response.json()

//       alert(result.message)
//       // Optionally: redirect user after deletion
//     } catch (err) {
//       console.error('Error deleting profile', err)
//     }
//   }

//   const renderDashboard = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
//         <p className="text-gray-600 mb-6">Give feedback to your teachers and help improve the learning experience.</p>
        
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//           <h3 className="font-semibold text-blue-800 mb-2">Teacher Feedback System</h3>
//           <p className="text-blue-700 text-sm">Share your honest feedback about teachers and subjects to help improve education quality.</p>
//         </div>
//       </div>

//       {/* Feedback Form */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//           <MessageSquare className="mr-2 text-blue-600" size={24} />
//           Teacher Feedback Form
//         </h3>
        
//         <form onSubmit={handleFeedbackSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Teacher Name *
//               </label>
//               <input
//                 type="text"
//                 name="teacherName"
//                 value={feedbackData.teacherName}
//                 onChange={handleFeedbackInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter teacher's name"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Subject *
//               </label>
//               <select
//                 name="subject"
//                 value={feedbackData.subject}
//                 onChange={handleFeedbackInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               >
//                 <option value="">Select Subject</option>
//                 <option value="Mathematics">Mathematics</option>
//                 <option value="English">English</option>
//                 <option value="Science">Science</option>
//                 <option value="History">History</option>
//                 <option value="Geography">Geography</option>
//                 <option value="Physics">Physics</option>
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Biology">Biology</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Rating *
//             </label>
//             <div className="flex space-x-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   type="button"
//                   onClick={() => handleRatingClick(star)}
//                   className={`p-1 rounded transition-colors ${
//                     star <= feedbackData.rating
//                       ? 'text-yellow-500 hover:text-yellow-600'
//                       : 'text-gray-300 hover:text-yellow-400'
//                   }`}
//                 >
//                   <Star size={24} fill={star <= feedbackData.rating ? 'currentColor' : 'none'} />
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-gray-600">
//                 {feedbackData.rating > 0 ? `${feedbackData.rating}/5` : 'Select rating'}
//               </span>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Feedback *
//             </label>
//             <textarea
//               name="feedback"
//               value={feedbackData.feedback}
//               onChange={handleFeedbackInputChange}
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//               placeholder="Write your detailed feedback about the teacher..."
//               required
//             />
//           </div>

//           <button
//            type='submit'
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Send size={16} className="mr-2" />
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   )

//   const renderProfile = () => (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         <User className="mr-2 text-blue-600" size={28} />
//         Profile
//       </h2>
      
//       <div className="space-y-6">
//         {/* Profile Image Section */}
//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative">
//             {user.image ? (
//               <img
//                 src={`http://localhost:7000/${user.image}`}
//                 alt="Profile"
//                 className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
//               />
//             ) : (
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
//                 <User size={32} className="text-gray-500" />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Profile Information Display */}
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                 Name
//               </label>
//               <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//                 {user.name || 'Not provided'}
//               </p>
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                 Email
//               </label>
//               <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//                 {user.email || 'Not provided'}
//               </p>
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//               Contact Number
//             </label>
//             <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//               {user.contact || 'Not provided'}
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-4 pt-4 border-t">
//           <button
//             onClick={() => setActiveTab('edit-profile')}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Edit size={16} className="mr-2" />
//             Edit Profile
//           </button>
          
//           <button
//             onClick={handleDelete}
//             className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
//           >
//             <Trash2 size={16} className="mr-2" />
//             Delete Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   )

//   const renderEditProfile = () => (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         <Edit className="mr-2 text-blue-600" size={28} />
//         Edit Profile
//       </h2>
      
//       <div className="space-y-6">
//         {/* Profile Image Section */}
//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative">
//             {user.image ? (
//               <img
//                 src={`http://localhost:7000/${user.image}`}
//                 alt="Profile"
//                 className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
//               />
//             ) : (
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
//                 <User size={32} className="text-gray-500" />
//               </div>
//             )}
//             <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors">
//               <Camera size={16} className="text-white" />
//             </div>
//           </div>
          
//           <div className="w-full max-w-xs">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Change Profile Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//             />
//           </div>
//         </div>

//         {/* Profile Information Form */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your name"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Contact Number
//             </label>
//             <input
//               type="text"
//               name="contact"
//               value={user.contact}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your contact number"
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-4 pt-4 border-t">
//           <button
//             onClick={handleUpdate}
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
//           >
//             <Edit size={16} className="mr-2" />
//             Update Profile
//           </button>
          
//           <button
//             onClick={() => setActiveTab('profile')}
//             className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
//         <div className="p-6 border-b">
//           <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
//         </div>
        
//      <nav className="mt-6">
//   <div className="px-4 space-y-2">
//     <button
//       onClick={() => setActiveTab('dashboard')}
//       className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//         activeTab === 'dashboard'
//           ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//           : 'text-gray-600 hover:bg-gray-100'
//       }`}
//     >
//       <MessageSquare size={20} className="mr-3" />
//       Dashboard
//     </button>

//     <button
//       onClick={() => setActiveTab('profile')}
//       className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//         activeTab === 'profile'
//           ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//           : 'text-gray-600 hover:bg-gray-100'
//       }`}
//     >
//       <User size={20} className="mr-3" />
//       Profile
//     </button>

//     {user.role === 'admin' && (
//       <>
//         <button
//           onClick={() => setActiveTab('show-feedback')}
//           className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//             activeTab === 'show-feedback'
//               ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//               : 'text-gray-600 hover:bg-gray-100'
//           }`}
//         >
//           <Star size={20} className="mr-3" />
//           Show Feedback
//         </button>

//         <button
//           onClick={() => setActiveTab('get-users')}
//           className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//             activeTab === 'get-users'
//               ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//               : 'text-gray-600 hover:bg-gray-100'
//           }`}
//         >
//           <User size={20} className="mr-3" />
//           Get All Users
//         </button>
//       </>
//     )}

//     <button
//       onClick={handleLogout}
//       className="w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors text-red-600 hover:bg-red-50"
//     >
//       <LogOut size={20} className="mr-3" />
//       Logout
//     </button>
//   </div>
// </nav>

//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         <div className="max-w-4xl mx-auto">
//           {activeTab === 'dashboard' && renderDashboard()}
//           {activeTab === 'profile' && renderProfile()}
//           {activeTab === 'edit-profile' && renderEditProfile()}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

// import React, { useState, useEffect } from 'react'
// import { User, LogOut, MessageSquare, Send, Star, Camera, Edit, Trash2, Eye } from 'lucide-react'
// import { getToken } from '../utils/auth'

// const Home = () => {
//   // These functions would be imported from your auth utils
//   const removeToken = () => {
//     // Your token removal logic
//     localStorage.removeItem('token')
//   }
  
//   const removeUser = () => {
//     // Your user removal logic
//     localStorage.removeItem('user')
//   }
  
//   const navigate = (path) => {
//     // This would use your router navigation
//     window.location.href = path
//   }
  
//   const [activeTab, setActiveTab] = useState('dashboard')
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     image: '',
//     role: '' // Added role to user state
//   })
//   const [imageFile, setImageFile] = useState(null)
//   const [feedback, setFeedback] = useState([]) // Added feedback state
//   const [users, setUsers] = useState([]) // Added users state for admin

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser)
//       setUser(parsedUser)
//     }
//   }, [])

//   // Fetch feedback data
//   const fetchFeedback = async () => {
//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/feedback', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       const result = await response.json()
//       setFeedback(result)
//       console.log("Feedback fetched:", result)
//     } catch (err) {
//       console.error("Failed to fetch feedback", err)
//     }
//   }

//   // Fetch users data (for admin)
//   const fetchUsers = async () => {
//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/users', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       const result = await response.json()
//       setUsers(result)
//       console.log("Users fetched:", result)
//     } catch (err) {
//       console.error("Failed to fetch users", err)
//     }
//   }

//   const [feedbackData, setFeedbackData] = useState({
//     teacherName: '',
//     subject: '',
//     rating: 0,
//     feedback: ''
//   })

//   const handleLogout = () => {
//     removeToken()
//     removeUser()
//     alert("Successfully logged out!")
//     navigate('/auth')
//   }

//   const handleFeedbackSubmit = async (e) => {
//     e.preventDefault()
    
//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(feedbackData)
//       })

//       const result = await response.json()

//       if (response.ok) {
//         alert('Feedback submitted successfully!')
//         setFeedbackData({
//           teacherName: '',
//           subject: '',
//           rating: 0,
//           feedback: ''
//         })
//         // Refresh feedback data if we're on show-feedback tab
//         if (activeTab === 'show-feedback') {
//           fetchFeedback()
//         }
//       } else {
//         alert(`Failed to submit feedback: ${result.message}`)
//       }

//     } catch (error) {
//       console.error('Error submitting feedback:', error)
//       alert('Something went wrong while submitting feedback.')
//     }
//   }

//   const handleFeedbackInputChange = (e) => {
//     const { name, value } = e.target
//     setFeedbackData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleRatingClick = (rating) => {
//     setFeedbackData(prev => ({
//       ...prev,
//       rating: rating
//     }))
//   }

//   // Profile handlers
//   const handleProfileInputChange = (e) => {
//     const { name, value } = e.target
//     setUser(prev => ({ ...prev, [name]: value }))
//   }

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0])
//   }

//   const handleUpdate = async () => {
//     const formData = new FormData()
//     formData.append('name', user.name)
//     formData.append('email', user.email)
//     formData.append('contact', user.contact)
//     if (imageFile) formData.append('image', imageFile)

//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/profile', {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData
//       })
//       const result = await response.json()
      
//       alert(result.message)
//       setUser(result.user)
//     } catch (err) {
//       console.error('Error updating profile', err)
//     }
//   }

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?')
//     if (!confirmDelete) return

//     try {
//       const token = getToken()
//       const response = await fetch('http://localhost:7000/api/auth/profile', {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       const result = await response.json()

//       alert(result.message)
//       // Optionally: redirect user after deletion
//     } catch (err) {
//       console.error('Error deleting profile', err)
//     }
//   }

//   // Effect to fetch data when tabs change
//   useEffect(() => {
//     if (activeTab === 'show-feedback') {
//       fetchFeedback()
//     } else if (activeTab === 'get-users') {
//       fetchUsers()
//     }
//   }, [activeTab])

//   // Render Feedback Display (for admin)
//   const renderShowFeedback = () => {
//     return (
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <Star className="mr-2 text-yellow-600" size={28} />
//           All Feedback
//         </h2>
        
//         <div className="mb-4">
//           <button
//             onClick={fetchFeedback}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Eye size={16} className="mr-2" />
//             Refresh Feedback
//           </button>
//         </div>

//         {feedback.length === 0 ? (
//           <div className="text-center py-8">
//             <p className="text-gray-500 text-lg">No feedback available yet.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">#</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Teacher Name</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Subject</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Rating</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Feedback</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {feedback.map((fb, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">{index + 1}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">{fb.teacherName}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">{fb.subject}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">
//                       <div className="flex items-center">
//                         <div className="flex mr-2">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <Star
//                               key={star}
//                               size={16}
//                               className={star <= fb.rating ? 'text-yellow-500' : 'text-gray-300'}
//                               fill={star <= fb.rating ? 'currentColor' : 'none'}
//                             />
//                           ))}
//                         </div>
//                         <span className="text-sm text-gray-600">({fb.rating}/5)</span>
//                       </div>
//                     </td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">
//                       <div className="max-w-xs">
//                         <p className="text-sm text-gray-700 line-clamp-3">{fb.feedback}</p>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     )
//   }

//   // Render Users Display (for admin)
//   const renderGetUsers = () => {
//     return (
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <User className="mr-2 text-green-600" size={28} />
//           All Users
//         </h2>
        
//         <div className="mb-4">
//           <button
//             onClick={fetchUsers}
//             className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
//           >
//             <Eye size={16} className="mr-2" />
//             Refresh Users
//           </button>
//         </div>

//         {users.length === 0 ? (
//           <div className="text-center py-8">
//             <p className="text-gray-500 text-lg">No users found.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">#</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Name</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Email</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Contact</th>
//                   <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">{index + 1}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">{user.name || 'N/A'}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">{user.email}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">{user.contact || 'N/A'}</td>
//                     <td className="border border-gray-300 px-4 py-3 text-gray-800">
//                       <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                         user.role === 'admin' 
//                           ? 'bg-red-100 text-red-800' 
//                           : 'bg-blue-100 text-blue-800'
//                       }`}>
//                         {user.role || 'user'}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     )
//   }

//   const renderDashboard = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
//         <p className="text-gray-600 mb-6">Give feedback to your teachers and help improve the learning experience.</p>
        
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
//           <h3 className="font-semibold text-blue-800 mb-2">Teacher Feedback System</h3>
//           <p className="text-blue-700 text-sm">Share your honest feedback about teachers and subjects to help improve education quality.</p>
//         </div>
//       </div>

//       {/* Feedback Form */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//           <MessageSquare className="mr-2 text-blue-600" size={24} />
//           Teacher Feedback Form
//         </h3>
        
//         <form onSubmit={handleFeedbackSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Teacher Name *
//               </label>
//               <input
//                 type="text"
//                 name="teacherName"
//                 value={feedbackData.teacherName}
//                 onChange={handleFeedbackInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter teacher's name"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Subject *
//               </label>
//               <select
//                 name="subject"
//                 value={feedbackData.subject}
//                 onChange={handleFeedbackInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               >
//                 <option value="">Select Subject</option>
//                 <option value="Mathematics">Mathematics</option>
//                 <option value="English">English</option>
//                 <option value="Science">Science</option>
//                 <option value="History">History</option>
//                 <option value="Geography">Geography</option>
//                 <option value="Physics">Physics</option>
//                 <option value="Chemistry">Chemistry</option>
//                 <option value="Biology">Biology</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Rating *
//             </label>
//             <div className="flex space-x-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   type="button"
//                   onClick={() => handleRatingClick(star)}
//                   className={`p-1 rounded transition-colors ${
//                     star <= feedbackData.rating
//                       ? 'text-yellow-500 hover:text-yellow-600'
//                       : 'text-gray-300 hover:text-yellow-400'
//                   }`}
//                 >
//                   <Star size={24} fill={star <= feedbackData.rating ? 'currentColor' : 'none'} />
//                 </button>
//               ))}
//               <span className="ml-2 text-sm text-gray-600">
//                 {feedbackData.rating > 0 ? `${feedbackData.rating}/5` : 'Select rating'}
//               </span>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Feedback *
//             </label>
//             <textarea
//               name="feedback"
//               value={feedbackData.feedback}
//               onChange={handleFeedbackInputChange}
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//               placeholder="Write your detailed feedback about the teacher..."
//               required
//             />
//           </div>

//           <button
//            type='submit'
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Send size={16} className="mr-2" />
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   )

//   const renderProfile = () => (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         <User className="mr-2 text-blue-600" size={28} />
//         Profile
//       </h2>
      
//       <div className="space-y-6">
//         {/* Profile Image Section */}
//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative">
//             {user.image ? (
//               <img
//                 src={`http://localhost:7000/${user.image}`}
//                 alt="Profile"
//                 className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
//               />
//             ) : (
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
//                 <User size={32} className="text-gray-500" />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Profile Information Display */}
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                 Name
//               </label>
//               <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//                 {user.name || 'Not provided'}
//               </p>
//             </div>
            
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                 Email
//               </label>
//               <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//                 {user.email || 'Not provided'}
//               </p>
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//               Contact Number
//             </label>
//             <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
//               {user.contact || 'Not provided'}
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-4 pt-4 border-t">
//           <button
//             onClick={() => setActiveTab('edit-profile')}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <Edit size={16} className="mr-2" />
//             Edit Profile
//           </button>
          
//           <button
//             onClick={handleDelete}
//             className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
//           >
//             <Trash2 size={16} className="mr-2" />
//             Delete Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   )

//   const renderEditProfile = () => (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         <Edit className="mr-2 text-blue-600" size={28} />
//         Edit Profile
//       </h2>
      
//       <div className="space-y-6">
//         {/* Profile Image Section */}
//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative">
//             {user.image ? (
//               <img
//                 src={`http://localhost:7000/${user.image}`}
//                 alt="Profile"
//                 className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
//               />
//             ) : (
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
//                 <User size={32} className="text-gray-500" />
//               </div>
//             )}
//             <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors">
//               <Camera size={16} className="text-white" />
//             </div>
//           </div>
          
//           <div className="w-full max-w-xs">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Change Profile Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//             />
//           </div>
//         </div>

//         {/* Profile Information Form */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your name"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Contact Number
//             </label>
//             <input
//               type="text"
//               name="contact"
//               value={user.contact}
//               onChange={handleProfileInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your contact number"
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-4 pt-4 border-t">
//           <button
//             onClick={handleUpdate}
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
//           >
//             <Edit size={16} className="mr-2" />
//             Update Profile
//           </button>
          
//           <button
//             onClick={() => setActiveTab('profile')}
//             className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
//         <div className="p-6 border-b">
//           <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
//         </div>
        
//         <nav className="mt-6">
//           <div className="px-4 space-y-2">
//             <button
//               onClick={() => setActiveTab('dashboard')}
//               className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//                 activeTab === 'dashboard'
//                   ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <MessageSquare size={20} className="mr-3" />
//               Dashboard
//             </button>

//             <button
//               onClick={() => setActiveTab('profile')}
//               className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//                 activeTab === 'profile'
//                   ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <User size={20} className="mr-3" />
//               Profile
//             </button>

//             {user.role === 'admin' && (
//               <>
//                 <button
//                   onClick={() => setActiveTab('show-feedback')}
//                   className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//                     activeTab === 'show-feedback'
//                       ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//                       : 'text-gray-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   <Star size={20} className="mr-3" />
//                   Show Feedback
//                 </button>

//                 <button
//                   onClick={() => setActiveTab('get-users')}
//                   className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
//                     activeTab === 'get-users'
//                       ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
//                       : 'text-gray-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   <User size={20} className="mr-3" />
//                   Get All Users
//                 </button>
//               </>
//             )}

//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors text-red-600 hover:bg-red-50"
//             >
//               <LogOut size={20} className="mr-3" />
//               Logout
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 p-8">
//         <div className="max-w-4xl mx-auto">
//           {activeTab === 'dashboard' && renderDashboard()}
//           {activeTab === 'profile' && renderProfile()}
//           {activeTab === 'edit-profile' && renderEditProfile()}
//           {activeTab === 'show-feedback' && renderShowFeedback()}
//           {activeTab === 'get-users' && renderGetUsers()}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react'
import { User, LogOut, MessageSquare, Send, Star, Camera, Edit, Trash2, Eye } from 'lucide-react'
import { getToken } from '../utils/auth'
// Add axios import
import axios from 'axios'

const Home = () => {
  // These functions would be imported from your auth utils
  const removeToken = () => {
    // Your token removal logic
    localStorage.removeItem('token')
  }
  
  const removeUser = () => {
    // Your user removal logic
    localStorage.removeItem('user')
  }
  
  const navigate = (path) => {
    // This would use your router navigation
    window.location.href = path
  }
  
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    image: '',
    role: '' // Added role to user state
  })
  const [imageFile, setImageFile] = useState(null)
  const [feedback, setFeedback] = useState([]) // Fixed: consistent naming
  const [users, setUsers] = useState([]) // Added users state for admin

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
    }
  }, [])

  // Fetch feedback data
  const fetchFeedback = async () => {
    try {
      const token = getToken()
      const response = await fetch('http://localhost:7000/api/auth/feedback', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const result = await response.json()
      setFeedback(result)
      console.log("Feedback fetched:", result)
    } catch (err) {
      console.error("Failed to fetch feedback", err)
    }
  }

  // Fetch users data (for admin)
  const fetchUsers = async () => {
    try {
      const token = getToken()
      const response = await fetch('http://localhost:7000/api/auth/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const result = await response.json()
      setUsers(result)
      console.log("Users fetched:", result)
    } catch (err) {
      console.error("Failed to fetch users", err)
    }
  }

  // Fixed delete feedback function
  const deleteFeedback = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      const token = getToken();
      await axios.delete(`http://localhost:7000/api/auth/feedback/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Fixed: remove the deleted feedback from UI using consistent variable names
      setFeedback(feedback.filter((fb) => fb._id !== id));
      alert("Feedback deleted successfully!");
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("Failed to delete feedback");
    }
  };

  // Fixed delete user function
  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const token = getToken();
      await axios.delete(`http://localhost:7000/api/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove from state without refetch
      setUsers(users.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user", err);
      alert("Failed to delete user");
    }
  };

  const [feedbackData, setFeedbackData] = useState({
    teacherName: '',
    subject: '',
    rating: 0,
    feedback: ''
  })

  const handleLogout = () => {
    removeToken()
    removeUser()
    alert("Successfully logged out!")
    navigate('/auth')
  }

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = getToken()
      const response = await fetch('http://localhost:7000/api/auth/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(feedbackData)
      })

      const result = await response.json()

      if (response.ok) {
        alert('Feedback submitted successfully!')
        setFeedbackData({
          teacherName: '',
          subject: '',
          rating: 0,
          feedback: ''
        })
        // Refresh feedback data if we're on show-feedback tab
        if (activeTab === 'show-feedback') {
          fetchFeedback()
        }
      } else {
        alert(`Failed to submit feedback: ${result.message}`)
      }

    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('Something went wrong while submitting feedback.')
    }
  }

  const handleFeedbackInputChange = (e) => {
    const { name, value } = e.target
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingClick = (rating) => {
    setFeedbackData(prev => ({
      ...prev,
      rating: rating
    }))
  }

  // Profile handlers
  const handleProfileInputChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
  }

  const handleUpdate = async () => {
    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('contact', user.contact)
    if (imageFile) formData.append('image', imageFile)

    try {
      const token = getToken()
      const response = await fetch('http://localhost:7000/api/auth/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      })
      const result = await response.json()
      
      alert(result.message)
      setUser(result.user)
    } catch (err) {
      console.error('Error updating profile', err)
    }
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?')
    if (!confirmDelete) return

    try {
      const token = getToken()
      const response = await fetch('http://localhost:7000/api/auth/profile', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const result = await response.json()

      alert(result.message)
      // Optionally: redirect user after deletion
    } catch (err) {
      console.error('Error deleting profile', err)
    }
  }

  // Effect to fetch data when tabs change
  useEffect(() => {
    if (activeTab === 'show-feedback') {
      fetchFeedback()
    } else if (activeTab === 'get-users') {
      fetchUsers()
    }
  }, [activeTab])

  // Render Feedback Display (for admin) - Fixed with delete button
  const renderShowFeedback = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="mr-2 text-yellow-600" size={28} />
          All Feedback
        </h2>
        
        <div className="mb-4">
          <button
            onClick={fetchFeedback}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <Eye size={16} className="mr-2" />
            Refresh Feedback
          </button>
        </div>

        {feedback.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No feedback available yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">#</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Teacher Name</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Subject</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Rating</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Feedback</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feedback.map((fb, index) => (
                  <tr key={fb._id || index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">{fb.teacherName}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{fb.subject}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={star <= fb.rating ? 'text-yellow-500' : 'text-gray-300'}
                              fill={star <= fb.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({fb.rating}/5)</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <div className="max-w-xs">
                        <p className="text-sm text-gray-700 line-clamp-3">{fb.feedback}</p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <button
                        onClick={() => deleteFeedback(fb._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors flex items-center text-sm"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }

  // Render Users Display (for admin) - Fixed with delete button
  const renderGetUsers = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <User className="mr-2 text-green-600" size={28} />
          All Users
        </h2>
        
        <div className="mb-4">
          <button
            onClick={fetchUsers}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
          >
            <Eye size={16} className="mr-2" />
            Refresh Users
          </button>
        </div>

        {users.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No users found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">#</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Contact</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Role</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id || index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">{user.name || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{user.email || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">{user.contact || 'N/A'}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'admin' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role || 'user'}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors flex items-center text-sm"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
        <p className="text-gray-600 mb-6">Give feedback to your teachers and help improve the learning experience.</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">Teacher Feedback System</h3>
          <p className="text-blue-700 text-sm">Share your honest feedback about teachers and subjects to help improve education quality.</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <MessageSquare className="mr-2 text-blue-600" size={24} />
          Teacher Feedback Form
        </h3>
        
        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teacher Name *
              </label>
              <input
                type="text"
                name="teacherName"
                value={feedbackData.teacherName}
                onChange={handleFeedbackInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter teacher's name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={feedbackData.subject}
                onChange={handleFeedbackInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating *
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className={`p-1 rounded transition-colors ${
                    star <= feedbackData.rating
                      ? 'text-yellow-500 hover:text-yellow-600'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  <Star size={24} fill={star <= feedbackData.rating ? 'currentColor' : 'none'} />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {feedbackData.rating > 0 ? `${feedbackData.rating}/5` : 'Select rating'}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Feedback *
            </label>
            <textarea
              name="feedback"
              value={feedbackData.feedback}
              onChange={handleFeedbackInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Write your detailed feedback about the teacher..."
              required
            />
          </div>

          <button
           type='submit'
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <Send size={16} className="mr-2" />
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <User className="mr-2 text-blue-600" size={28} />
        Profile
      </h2>
      
      <div className="space-y-6">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {user.image ? (
              <img
                src={`http://localhost:7000/${user.image}`}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={32} className="text-gray-500" />
              </div>
            )}
          </div>
        </div>

        {/* Profile Information Display */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Name
              </label>
              <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
                {user.name || 'Not provided'}
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Email
              </label>
              <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
                {user.email || 'Not provided'}
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Contact Number
            </label>
            <p className="text-lg font-medium text-gray-800 bg-gray-50 px-4 py-3 rounded-lg">
              {user.contact || 'Not provided'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t">
          <button
            onClick={() => setActiveTab('edit-profile')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <Edit size={16} className="mr-2" />
            Edit Profile
          </button>
          
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
          >
            <Trash2 size={16} className="mr-2" />
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  )

  const renderEditProfile = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Edit className="mr-2 text-blue-600" size={28} />
        Edit Profile
      </h2>
      
      <div className="space-y-6">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {user.image ? (
              <img
                src={`http://localhost:7000/${user.image}`}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={32} className="text-gray-500" />
              </div>
            )}
            <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors">
              <Camera size={16} className="text-white" />
            </div>
          </div>
          
          <div className="w-full max-w-xs">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Change Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Profile Information Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleProfileInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleProfileInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleProfileInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your contact number"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t">
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
          >
            <Edit size={16} className="mr-2" />
            Update Profile
          </button>
          
          <button
            onClick={() => setActiveTab('profile')}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MessageSquare size={20} className="mr-3" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === 'profile'
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <User size={20} className="mr-3" />
              Profile
            </button>

            {user.role === 'admin' && (
              <>
                <button
                  onClick={() => setActiveTab('show-feedback')}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === 'show-feedback'
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Star size={20} className="mr-3" />
                  Show Feedback
                </button>

                <button
                  onClick={() => setActiveTab('get-users')}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === 'get-users'
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} className="mr-3" />
                  Get All Users
                </button>
              </>
            )}

            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors text-red-600 hover:bg-red-50"
            >
              <LogOut size={20} className="mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'edit-profile' && renderEditProfile()}
          {activeTab === 'show-feedback' && renderShowFeedback()}
          {activeTab === 'get-users' && renderGetUsers()}
        </div>
      </div>
    </div>
  )
}

export default Home