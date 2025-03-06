// import React, { useState }  from 'react';


// const TwohundredLandingPage = () => {
// // const [selectedTab, setSelectedTab] = useState('Student Benefits');
//   const [activeTab, setActiveTab] = useState('benefits');

// return (
// //   <div className="font-sans">
// //   {/* Hero Section */}
// //   <section className="relative h-screen bg-gradient-to-r from-purple-200/40 to-indigo-200/40 flex items-center">
// //     <div className="container mx-auto px-6 relative z-10">
// //       <div className="w-full lg:w-3/5 text-center lg:text-left">
// //         <h1 className="text-4xl lg:text-5xl font-bold mb-4">
// //           Become a Certified Yoga <br />Teacher in <span className="text-purple-600">200 Hours</span>
// //         </h1>
// //         <p className="text-lg mb-8">Transform your passion into a profession with our intensive training program</p>
// //         <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition">
// //           Enroll Now
// //         </button>
// //       </div>
// //     </div>
// //     <div className="absolute right-0 bottom-0 h-4/5 w-2/5">
// //       <img src="/images/hero-bg.svg" alt="Yoga teacher in pose" className="h-full object-cover" />
// //     </div>
// //   </section>

// //   {/* What You'll Get Section */}
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-6">
// //       <h2 className="text-2xl font-bold text-center mb-12">What will you get from the Course?</h2>
      
// //       <div className="grid md:grid-cols-3 gap-8">
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Professional Certification</h3>
// //           <p className="text-gray-600">Internationally recognized yoga teacher certification to start your career.</p>
// //         </div>
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Teaching Methodology</h3>
// //           <p className="text-gray-600">Learn effective teaching techniques and how to guide students properly.</p>
// //         </div>
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Anatomy Knowledge</h3>
// //           <p className="text-gray-600">Comprehensive understanding of body mechanics for safe practice.</p>
// //         </div>
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Philosophy Deep-Dive</h3>
// //           <p className="text-gray-600">Explore the ancient wisdom and philosophy behind yoga practice.</p>
// //         </div>
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Business Training</h3>
// //           <p className="text-gray-600">Learn how to market yourself and build a successful yoga business.</p>
// //         </div>
// //         <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //             <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h3 className="font-semibold text-lg mb-2">Global Community</h3>
// //           <p className="text-gray-600">Join our worldwide network of yoga teachers and continuing education.</p>
// //         </div>
// //       </div>
// //     </div>
// //   </section>

// //   {/* Course Schedule Section */}
// //   <section className="py-16 bg-gray-50">
// //     <div className="container mx-auto px-6">
// //       <h2 className="text-2xl font-bold text-center mb-2">Daily Time-Table</h2>
// //       <p className="text-center text-gray-600 mb-12">Our structured daily routine for optimal learning</p>
      
// //       <div className="overflow-x-auto">
// //         <table className="w-full">
// //           <thead>
// //             <tr>
// //               <th className="p-3 bg-purple-100 text-left">Time</th>
// //               <th className="p-3 bg-purple-100 text-left">Monday</th>
// //               <th className="p-3 bg-purple-100 text-left">Tuesday</th>
// //               <th className="p-3 bg-purple-100 text-left">Wednesday</th>
// //               <th className="p-3 bg-purple-100 text-left">Thursday</th>
// //               <th className="p-3 bg-purple-100 text-left">Friday</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr className="bg-white">
// //               <td className="p-3 border-b border-gray-200">6:00 - 7:30</td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //               </td>
// //             </tr>
// //             <tr className="bg-gray-50">
// //               <td className="p-3 border-b border-gray-200">8:00 - 9:30</td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //               </td>
// //             </tr>
// //             <tr className="bg-white">
// //               <td className="p-3 border-b border-gray-200">10:00 - 11:30</td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Anatomy</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Anatomy</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //               </td>
// //             </tr>
// //             <tr className="bg-gray-50">
// //               <td className="p-3 border-b border-gray-200">12:00 - 13:30</td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //               </td>
// //             </tr>
// //             <tr className="bg-white">
// //               <td className="p-3 border-b border-gray-200">14:00 - 15:30</td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //               </td>
// //               <td className="p-3 border-b border-gray-200">
// //                 <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   </section>

// //   {/* Teacher's Certification */}
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-6">
// //       <div className="grid md:grid-cols-2 gap-12 items-center">
// //         <div>
// //           <h2 className="text-2xl font-bold mb-6">Teaching Certification</h2>
// //           <ul className="space-y-4">
// //             <li className="flex items-start">
// //               <span className="text-purple-600 mr-2">✓</span>
// //               <span>Complete 200 hours of training</span>
// //             </li>
// //             <li className="flex items-start">
// //               <span className="text-purple-600 mr-2">✓</span>
// //               <span>Pass practical teaching assessment</span>
// //             </li>
// //             <li className="flex items-start">
// //               <span className="text-purple-600 mr-2">✓</span>
// //               <span>Demonstrate understanding of yoga philosophy</span>
// //             </li>
// //             <li className="flex items-start">
// //               <span className="text-purple-600 mr-2">✓</span>
// //               <span>Complete all required reading and assignments</span>
// //             </li>
// //             <li className="flex items-start">
// //               <span className="text-purple-600 mr-2">✓</span>
// //               <span>Maintain 90% attendance throughout the course</span>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="grid grid-cols-2 gap-4">
// //           <div className="bg-gray-100 p-4 rounded-lg">
// //             <img src="/yoga-certificate-1.jpg" alt="Yoga certification" className="w-full rounded" />
// //           </div>
// //           <div className="bg-gray-100 p-4 rounded-lg">
// //             <img src="/yoga-certificate-2.jpg" alt="Yoga certification" className="w-full rounded" />
// //           </div>
// //           <div className="bg-gray-100 p-4 rounded-lg">
// //             <img src="/yoga-certificate-3.jpg" alt="Yoga certification" className="w-full rounded" />
// //           </div>
// //           <div className="bg-gray-100 p-4 rounded-lg">
// //             <img src="/yoga-certificate-4.jpg" alt="Yoga certification" className="w-full rounded" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>

// //   {/* Our Classes Section with Testimonial */}
// //   <section className="py-16 bg-gray-50">
// //     <div className="container mx-auto px-6">
// //       <div className="max-w-3xl mx-auto text-center mb-16">
// //         <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full mb-4">Our Commitment To You</div>
// //         <h2 className="text-3xl font-bold mb-4">Why Choose Our Yoga Teacher Training?</h2>
// //         <p className="text-gray-600">
// //           Our program provides comprehensive training with world-class instructors, giving you the skills and confidence to teach yoga effectively and authentically.
// //         </p>
// //       </div>
      
// //       <div className="bg-white p-8 rounded-lg shadow-md">
// //         <div className="flex items-center mb-6">
// //           <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
// //             <img src="/student-testimonial.jpg" alt="Student" className="w-full h-full object-cover" />
// //           </div>
// //           <div>
// //             <h4 className="font-bold">Sarah Johnson</h4>
// //             <p className="text-gray-600">Certified Yoga Instructor, 2023 Graduate</p>
// //           </div>
// //         </div>
// //         <p className="text-gray-700 italic">
// //           "This program transformed not just my understanding of yoga but my entire approach to life. The instructors were incredibly knowledgeable and supportive throughout my journey."
// //         </p>
// //       </div>
// //     </div>
// //   </section>

// //   {/* Frequently Asked Questions */}
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-6">
// //       <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
// //       <div className="grid md:grid-cols-2 gap-8">
// //         <div className="border-b border-gray-200 pb-4">
// //           <h3 className="font-bold mb-2">What prerequisites are needed for the course?</h3>
// //           <p className="text-gray-600">A minimum of 2 years of regular yoga practice is recommended, but we welcome dedicated beginners.</p>
// //         </div>
// //         <div className="border-b border-gray-200 pb-4">
// //           <h3 className="font-bold mb-2">Is the certification internationally recognized?</h3>
// //           <p className="text-gray-600">Yes, our program is Yoga Alliance certified and recognized worldwide.</p>
// //         </div>
// //         <div className="border-b border-gray-200 pb-4">
// //           <h3 className="font-bold mb-2">Can I teach immediately after completing the course?</h3>
// //           <p className="text-gray-600">Yes, youll receive your certification upon successful completion of all requirements.</p>
// //         </div>
// //         <div className="border-b border-gray-200 pb-4">
// //           <h3 className="font-bold mb-2">What styles of yoga are covered?</h3>
// //           <p className="text-gray-600">The program focuses on Hatha and Vinyasa, with introductions to Yin, Restorative, and other styles.</p>
// //         </div>
// //       </div>
// //     </div>
// //   </section>

// //   {/* Footer */}
// //   <footer className="bg-gray-900 text-white py-12">
// //     <div className="container mx-auto px-6">
// //       <div className="grid md:grid-cols-4 gap-8">
// //         <div>
// //           <h3 className="font-bold text-lg mb-4">Yoga Teacher Training</h3>
// //           <p className="text-gray-400">Transform your passion into a fulfilling career with our comprehensive certification program.</p>
// //         </div>
// //         <div>
// //           <h4 className="font-bold mb-4">Quick Links</h4>
// //           <ul className="space-y-2">
// //             <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
// //             <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
// //             <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
// //             <li><a href="#" className="text-gray-400 hover:text-white transition">Schedule</a></li>
// //             <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
// //           </ul>
// //         </div>
// //         <div>
// //           <h4 className="font-bold mb-4">Contact Us</h4>
// //           <ul className="space-y-2 text-gray-400">
// //             <li>123 Yoga Street, Zen City</li>
// //             <li>info@yogateachertraining.com</li>
// //             <li>+1 (555) 123-4567</li>
// //           </ul>
// //         </div>
// //         <div>
// //           <h4 className="font-bold mb-4">Follow Us</h4>
// //           <div className="flex space-x-4">
// //             <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
// //             <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
// //             <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
// //         <p>© 2025 Yoga Teacher Training. All rights reserved.</p>
// //       </div>
// //     </div>
// //   </footer>
// // </div>
// // );
// // }



// //   <div className="font-sans">
// //     {/* Hero Section */}
// //     <section className="relative h-screen bg-gradient-to-r from-purple-200/40 to-indigo-200/40 flex items-center">
// //       <div className="container mx-auto px-6 relative z-10">
// //         <div className="w-full lg:w-3/5 text-center lg:text-left">
// //           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
// //             Become a Certified Yoga <br />Teacher in <span className="text-purple-600">200 Hours</span>
// //           </h1>
// //           <p className="text-lg mb-8">Transform your passion into a profession with our intensive training program</p>
// //           <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition">
// //             Enroll Now
// //           </button>
// //         </div>
// //       </div>
// //       <div className="absolute right-0 bottom-0 h-4/5 w-2/5">
// //         <img src="/images/hero-bg.svg" alt="Yoga teacher in pose" className="h-full object-cover" />
// //       </div>
// //     </section>

// //     {/* What You'll Get Section */}
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-6">
// //         <h2 className="text-2xl font-bold text-center mb-12">What will you get from the Course?</h2>
        
// //         <div className="grid md:grid-cols-3 gap-8">
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Professional Certification</h3>
// //             <p className="text-gray-600">Internationally recognized yoga teacher certification to start your career.</p>
// //           </div>
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Teaching Methodology</h3>
// //             <p className="text-gray-600">Learn effective teaching techniques and how to guide students properly.</p>
// //           </div>
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Anatomy Knowledge</h3>
// //             <p className="text-gray-600">Comprehensive understanding of body mechanics for safe practice.</p>
// //           </div>
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Philosophy Deep-Dive</h3>
// //             <p className="text-gray-600">Explore the ancient wisdom and philosophy behind yoga practice.</p>
// //           </div>
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Business Training</h3>
// //             <p className="text-gray-600">Learn how to market yourself and build a successful yoga business.</p>
// //           </div>
// //           <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
// //             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //               {/* <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //               </svg> */}
// //             </div>
// //             <h3 className="font-semibold text-lg mb-2">Global Community</h3>
// //             <p className="text-gray-600">Join our worldwide network of yoga teachers and continuing education.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>

// //     {/* Course Schedule Section */}
// //     <section className="py-16 bg-gray-50">
// //       <div className="container mx-auto px-6">
// //         <h2 className="text-2xl font-bold text-center mb-2">Daily Time-Table</h2>
// //         <p className="text-center text-gray-600 mb-12">Our structured daily routine for optimal learning</p>
        
// //         <div className="overflow-x-auto">
// //           <table className="w-full">
// //             <thead>
// //               <tr>
// //                 <th className="p-3 bg-purple-100 text-left">Time</th>
// //                 <th className="p-3 bg-purple-100 text-left">Monday</th>
// //                 <th className="p-3 bg-purple-100 text-left">Tuesday</th>
// //                 <th className="p-3 bg-purple-100 text-left">Wednesday</th>
// //                 <th className="p-3 bg-purple-100 text-left">Thursday</th>
// //                 <th className="p-3 bg-purple-100 text-left">Friday</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="bg-white">
// //                 <td className="p-3 border-b border-gray-200">6:00 - 7:30</td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Asana Practice</div>
// //                 </td>
// //               </tr>
// //               <tr className="bg-gray-50">
// //                 <td className="p-3 border-b border-gray-200">8:00 - 9:30</td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Pranayama</div>
// //                 </td>
// //               </tr>
// //               <tr className="bg-white">
// //                 <td className="p-3 border-b border-gray-200">10:00 - 11:30</td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Anatomy</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Anatomy</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Philosophy</div>
// //                 </td>
// //               </tr>
// //               <tr className="bg-gray-50">
// //                 <td className="p-3 border-b border-gray-200">12:00 - 13:30</td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Lunch Break</div>
// //                 </td>
// //               </tr>
// //               <tr className="bg-white">
// //                 <td className="p-3 border-b border-gray-200">14:00 - 15:30</td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //                 </td>
// //                 <td className="p-3 border-b border-gray-200">
// //                   <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">Teaching Method</div>
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </section>

// //     {/* Teacher's Certification */}
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="grid md:grid-cols-2 gap-12 items-center">
// //           <div>
// //             <h2 className="text-2xl font-bold mb-6">Teaching Certification</h2>
// //             <ul className="space-y-4">
// //               <li className="flex items-start">
// //                 {/* <span className="text-purple-600 mr-2">✓</span> */}
// //                 <span>Complete 200 hours of training</span>
// //               </li>
// //               <li className="flex items-start">
// //                 {/* <span className="text-purple-600 mr-2">✓</span> */}
// //                 <span>Pass practical teaching assessment</span>
// //               </li>
// //               <li className="flex items-start">
// //                 {/* <span className="text-purple-600 mr-2">✓</span> */}
// //                 <span>Demonstrate understanding of yoga philosophy</span>
// //               </li>
// //               <li className="flex items-start">
// //                 {/* <span className="text-purple-600 mr-2">✓</span> */}
// //                 <span>Complete all required reading and assignments</span>
// //               </li>
// //               <li className="flex items-start">
// //                 {/* <span className="text-purple-600 mr-2">✓</span> */}
// //                 <span>Maintain 90% attendance throughout the course</span>
// //               </li>
// //             </ul>
// //           </div>
// //           <div className="grid grid-cols-2 gap-4">
// //             {/* <div className="bg-gray-100 p-4 rounded-lg">
// //               <img src="/yoga-certificate-1.jpg" alt="Yoga certification" className="w-full rounded" />
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <img src="/yoga-certificate-2.jpg" alt="Yoga certification" className="w-full rounded" />
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <img src="/yoga-certificate-3.jpg" alt="Yoga certification" className="w-full rounded" />
// //             </div>
// //             <div className="bg-gray-100 p-4 rounded-lg">
// //               <img src="/yoga-certificate-4.jpg" alt="Yoga certification" className="w-full rounded" />
// //             </div> */}
// //           </div>
// //         </div>
// //       </div>
// //     </section>

// //     {/* Our Classes Section with Testimonial */}
// //     <section className="py-16 bg-gray-50">
// //       <div className="container mx-auto px-6">
// //         <div className="max-w-3xl mx-auto text-center mb-16">
// //           <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full mb-4">Our Commitment To You</div>
// //           <h2 className="text-3xl font-bold mb-4">Why Choose Our Yoga Teacher Training?</h2>
// //           <p className="text-gray-600">
// //             Our program provides comprehensive training with world-class instructors, giving you the skills and confidence to teach yoga effectively and authentically.
// //           </p>
// //         </div>
        
// //         <div className="bg-white p-8 rounded-lg shadow-md">
// //           <div className="flex items-center mb-6">
// //             <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
// //               <img src="/student-testimonial.jpg" alt="Student" className="w-full h-full object-cover" />
// //             </div>
// //             <div>
// //               <h4 className="font-bold">Sarah Johnson</h4>
// //               <p className="text-gray-600">Certified Yoga Instructor, 2023 Graduate</p>
// //             </div>
// //           </div>
// //           <p className="text-gray-700 italic">
// //             &ldquo;This program transformed not just my understanding of yoga but my entire approach to life. The instructors were incredibly knowledgeable and supportive throughout my journey.&rdquo;
// //           </p>
// //         </div>
// //       </div>
// //     </section>

// //     {/* Frequently Asked Questions */}
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-6">
// //         <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
// //         <div className="grid md:grid-cols-2 gap-8">
// //           <div className="border-b border-gray-200 pb-4">
// //             <h3 className="font-bold mb-2">What prerequisites are needed for the course?</h3>
// //             <p className="text-gray-600">A minimum of 2 years of regular yoga practice is recommended, but we welcome dedicated beginners.</p>
// //           </div>
// //           <div className="border-b border-gray-200 pb-4">
// //             <h3 className="font-bold mb-2">Is the certification internationally recognized?</h3>
// //             <p className="text-gray-600">Yes, our program is Yoga Alliance certified and recognized worldwide.</p>
// //           </div>
// //           <div className="border-b border-gray-200 pb-4">
// //             <h3 className="font-bold mb-2">Can I teach immediately after completing the course?</h3>
// //             <p className="text-gray-600">Yes, you&apos;ll receive your certification upon successful completion of all requirements.</p>
// //           </div>
// //           <div className="border-b border-gray-200 pb-4">
// //             <h3 className="font-bold mb-2">What styles of yoga are covered?</h3>
// //             <p className="text-gray-600">The program focuses on Hatha and Vinyasa, with introductions to Yin, Restorative, and other styles.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>

// //     {/* Footer */}
// //     <footer className="bg-gray-900 text-white py-12">
// //       <div className="container mx-auto px-6">
// //         <div className="grid md:grid-cols-4 gap-8">
// //           <div>
// //             <h3 className="font-bold text-lg mb-4">Yoga Teacher Training</h3>
// //             <p className="text-gray-400">Transform your passion into a fulfilling career with our comprehensive certification program.</p>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-4">Quick Links</h4>
// //             <ul className="space-y-2">
// //               <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
// //               <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
// //               <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
// //               <li><a href="#" className="text-gray-400 hover:text-white transition">Schedule</a></li>
// //               <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-4">Contact Us</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>123 Yoga Street, Zen City</li>
// //               <li>info@yogateachertraining.com</li>
// //               <li>+1 (555) 123-4567</li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-4">Follow Us</h4>
// //             <div className="flex space-x-4">
// //               <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
// //           <p>© 2025 Yoga Teacher Training. All rights reserved.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   </div>
// // );

// // }



// // <div className="yoga-app">
// //       {/* Hero Section */}
// //       <header className="hero-section">
// //         <nav className="navigation">
// //           <button className="menu-button">
// //             <span></span>
// //             <span></span>
// //             <span></span>
// //           </button>
// //           <div className="logo">
// //             <img src="/api/placeholder/40/40" alt="Lotus logo" />
// //           </div>
// //           <div className="nav-controls">
// //             <button className="search-button">
// //               <svg viewBox="0 0 24 24" width="24" height="24">
// //                 <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
// //               </svg>
// //             </button>
// //             <button className="profile-button">
// //               <svg viewBox="0 0 24 24" width="24" height="24">
// //                 <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 <path d="M20 21v-2a7 7 0 0 0-14 0v2" fill="none" stroke="currentColor" strokeWidth="2" />
// //               </svg>
// //             </button>
// //           </div>
// //         </nav>

// //         <div className="language-selector">
// //           English, Regional Languages
// //         </div>

// //         <div className="hero-content">
// //           <div className="hero-text">
// //             <h1>Become a Certified Yoga Teacher in <span className="highlighted">200 Hours</span></h1>
// //             <p>Join our immersive teacher training program. Learn, practice, and teach with confidence</p>
            
// //             <div className="community-info">
// //               <div className="profile-images">
// //                 <img src="/api/placeholder/40/40" alt="Community member" className="profile-img" />
// //                 <img src="/api/placeholder/40/40" alt="Community member" className="profile-img" />
// //                 <img src="/api/placeholder/40/40" alt="Community member" className="profile-img" />
// //                 <img src="/api/placeholder/40/40" alt="Community member" className="profile-img" />
// //               </div>
// //               <p>100k + Yoga Member Community</p>
// //             </div>
            
// //             <button className="cta-button">
// //               See Available Batches
// //               <svg viewBox="0 0 24 24" width="16" height="16">
// //                 <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
// //               </svg>
// //             </button>
// //           </div>
          
// //           <div className="duration-tag">
// //             21 Days Duration
// //           </div>
// //         </div>
// //       </header>

// //       {/* Tab Navigation */}
// //       <nav className="tab-navigation">
// //         <button 
// //           className={activeTab === 'benefits' ? 'active' : ''}
// //           onClick={() => setActiveTab('benefits')}
// //         >
// //           Student Benefits
// //         </button>
// //         <button 
// //           className={activeTab === 'batches' ? 'active' : ''}
// //           onClick={() => setActiveTab('batches')}
// //         >
// //           Available batches
// //         </button>
// //         <button 
// //           className={activeTab === 'teaching' ? 'active' : ''}
// //           onClick={() => setActiveTab('teaching')}
// //         >
// //           Teaching & Certification
// //         </button>
// //         <button 
// //           className={activeTab === 'offerings' ? 'active' : ''}
// //           onClick={() => setActiveTab('offerings')}
// //         >
// //           Our Unique Offerings
// //         </button>
// //         <button 
// //           className={activeTab === 'faq' ? 'active' : ''}
// //           onClick={() => setActiveTab('faq')}
// //         >
// //           FAQ
// //         </button>
// //       </nav>

// //       {/* Benefits Section */}
// //       {activeTab === 'benefits' && (
// //         <section className="benefits-section">
// //           <h2>What will you get from this Training?</h2>
// //           <p className="section-description">
// //           { `Our Yoga Teacher Training Program is designed to empower you with the knowledge, 
// //            skills, and confidence to teach yoga effectively. Here's what you'll get:`} 
// //           </p>
          
// //           <div className="benefits-grid">
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
// //                   <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Hands-on Asana Sessions</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
            
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Personalized Mentorship</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
            
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Certification</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
            
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <path d="M12 10V6M12 14h.01M11 22H8c-4 0-7-3-7-7V5c0-1.1.9-2 2-2h12a2 2 0 012 2v10c0 4-3 7-7 7h-3z" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Downloadable Material</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
            
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   <path d="M6 21V19a4 4 0 014-4h4a4 4 0 014 4v2" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Expert Faculty</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
            
// //             <div className="benefit-card">
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
// //                   <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
// //                   <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Hands-on Asana Sessions</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
// //           </div>
// //         </section>
// //       )}

// //       {/* Whom Can You Teach Section */}
// //       <section className="teaching-section">
// //         <h3 className="section-subtitle">Student Benefits</h3>
// //         <h2>Whom can you teach</h2>
// //         <p className="section-description">
// //          {`Our Yoga Teacher Training Program is designed to empower you with the knowledge, 
// //           skills, and confidence to teach yoga effectively. Here's what you'll get:`} 
// //         </p>
        
// //         <div className="benefits-grid">
// //           {Array(6).fill().map((_, index) => (
// //             <div className="benefit-card" key={index}>
// //               <div className="benefit-icon">
// //                 <svg viewBox="0 0 24 24" width="24" height="24">
// //                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 </svg>
// //               </div>
// //               <h3>Certification</h3>
// //               <p>Practice and learn under expert supervision.</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };


// <div className="font-sans">
// {/* Hero Section */}
// <div className="relative h-screen">
//   {/* Background Image with Overlay */}
//   <div className="absolute inset-0 bg-gray-200">
//     <div className="absolute inset-0 bg-black opacity-10"></div>
//   </div>
  
//   {/* Navigation */}
//   <header className="relative flex items-center justify-between p-6">
//     <button className="text-white">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//       </svg>
//     </button>
    
//     <div className="flex-1 flex justify-center">
//       <img src="/api/placeholder/40/40" alt="Lotus Flower Logo" className="h-10" />
//     </div>
    
//     <div className="flex items-center space-x-2">
//       <button className="text-white">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </button>
//       <button className="text-white">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       </button>
//     </div>
//   </header>
  
//   {/* Language Selector */}
//   <div className="absolute top-6 right-6 bg-white bg-opacity-80 px-4 py-2 rounded-md text-sm">
//     English, Regional Languages
//   </div>
  
//   {/* Hero Content */}
//   <div className="relative h-full flex items-center">
//     <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//       {/* Left Content with Text */}
//       <div className="w-full md:w-1/2 text-white space-y-4">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Become a Certified Yoga Teacher in <span className="text-5xl md:text-6xl block md:inline">200 Hours</span>
//         </h1>
//         <p className="text-lg">
//           Join our immersive teacher training program. Learn, practice, and teach with confidence
//         </p>
        
//         {/* Community Info */}
//         <div className="flex items-center mt-8 space-x-4">
//           <div className="flex -space-x-2">
//             <img src="/api/placeholder/32/32" alt="Member" className="h-8 w-8 rounded-full border-2 border-white" />
//             <img src="/api/placeholder/32/32" alt="Member" className="h-8 w-8 rounded-full border-2 border-white" />
//             <img src="/api/placeholder/32/32" alt="Member" className="h-8 w-8 rounded-full border-2 border-white" />
//             <img src="/api/placeholder/32/32" alt="Member" className="h-8 w-8 rounded-full border-2 border-white" />
//           </div>
//           <div>
//             <p className="font-medium">100k + Yoga</p>
//             <p className="text-sm">Member Community</p>
//           </div>
//         </div>
        
//         {/* Duration */}
//         <div className="inline-block bg-white bg-opacity-20 rounded-md px-4 py-2 mt-4">
//           <p className="text-white">21 Days Duration</p>
//         </div>
        
//         {/* Call to Action */}
//         <button className="mt-8 bg-white text-orange-600 px-6 py-3 rounded-full font-medium flex items-center space-x-2">
//           <span>See Available Batches</span>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
      
//       {/* Right Content with Person Image */}
//       <div className="hidden md:block w-full md:w-1/2">
//         {/* This space is for the yoga pose image that appears in the design */}
//       </div>
//     </div>
//   </div>
// </div>

// {/* Tabs Navigation */}
// <div className="border-b">
//   <div className="container mx-auto px-6">
//     <nav className="flex space-x-8">
//       <button 
//         className={`py-4 ${activeTab === 'benefits' ? 'text-orange-600 border-b-2 border-orange-600 font-medium' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('benefits')}
//       >
//         Student Benefits
//       </button>
//       <button 
//         className={`py-4 ${activeTab === 'batches' ? 'text-orange-600 border-b-2 border-orange-600 font-medium' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('batches')}
//       >
//         Available batches
//       </button>
//       <button 
//         className={`py-4 ${activeTab === 'teaching' ? 'text-orange-600 border-b-2 border-orange-600 font-medium' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('teaching')}
//       >
//         Teaching & Certification
//       </button>
//       <button 
//         className={`py-4 ${activeTab === 'offerings' ? 'text-orange-600 border-b-2 border-orange-600 font-medium' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('offerings')}
//       >
//         Our Unique Offerings
//       </button>
//       <button 
//         className={`py-4 ${activeTab === 'faq' ? 'text-orange-600 border-b-2 border-orange-600 font-medium' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('faq')}
//       >
//         FAQ
//       </button>
//     </nav>
//   </div>
// </div>

// {/* Benefits Section */}
// {activeTab === 'benefits' && (
//   <div className="py-12">
//     <div className="container mx-auto px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-orange-600 font-medium">Student Benefits</h2>
//         <h1 className="text-3xl font-bold mt-2">What will you get from this Training?</h1>
//         <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
//           {`Our Yoga Teacher Training Program is designed to empower you with the knowledge, 
//           skills, and confidence to teach yoga effectively. Here's what you'll get:`}
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[
//           {title: 'Hands-on Asana Sessions', desc: 'Practice and learn under expert supervision.'},
//           {title: 'Personalized Mentorship', desc: 'Practice and learn under expert supervision.'},
//           {title: 'Certification', desc: 'Practice and learn under expert supervision.'},
//           {title: 'Downloadable Material', desc: 'Practice and learn under expert supervision.'},
//           {title: 'Expert Faculty', desc: 'Practice and learn under expert supervision.'},
//           {title: 'Hands-on Asana Sessions', desc: 'Practice and learn under expert supervision.'}
//         ].map((benefit, index) => (
//           <div key={index} className="bg-gray-50 p-6 rounded-lg">
//             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-lg">{benefit.title}</h3>
//             <p className="text-gray-600 mt-2">{benefit.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}

// {/* Whom Can You Teach Section */}
// {activeTab === 'teaching' && (
//   <div className="py-12">
//     <div className="container mx-auto px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-orange-600 font-medium">Student Benefits</h2>
//         <h1 className="text-3xl font-bold mt-2">Whom can you teach</h1>
//         <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
//           {`Our Yoga Teacher Training Program is designed to empower you with the knowledge, 
//           skills, and confidence to teach yoga effectively. Here's what you'll get:`}
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Array(6).fill(0).map((_, index) => (
//           <div key={index} className="bg-gray-50 p-6 rounded-lg">
//             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-lg">Certification</h3>
//             <p className="text-gray-600 mt-2">Practice and learn under expert supervision.</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
// </div>
// );
// };


// export default TwohundredLandingPage;


// import React from 'react';


// const TwohundredLandingPage = () => {
//   return (
//     <div 
//       className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" 
//       style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
//     >
//       {/* Logo and Menu */}
//       <div className="absolute top-5 left-5 flex items-center space-x-4">
//         <img src="/images/logo.svg" alt="Logo" className="w-32" />
//         <img src="/images/dash.svg" alt="Menu" className="w-8 h-8" />
//       </div>

//       {/* Search and User Icons */}
//       <div className="absolute top-5 right-5 flex space-x-4">
//         <img src="/images/searchuser.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
//       </div>

//       {/* Main Content */}
//       <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white max-w-2xl text-center">
//         <h1 className="text-4xl font-bold">
//           Become a Certified Yoga Teacher in <span className="text-indigo-400">200 Hours</span>
//         </h1>
//         <p className="mt-4 text-lg">
//           Join our immersive teacher training program. Learn, practice, and teach with confidence.
//         </p>

//         {/* Community Members */}
//         <div className="mt-4 flex justify-center items-center space-x-2">
//           <img src="/images/user1.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
//           <img src="/images/user2.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
//           <span>100K+ Yoga Member Community</span>
//         </div>

//         {/* Course Info */}
//         <div className="mt-4 flex justify-center space-x-4">
//           <span className="px-4 py-2 bg-gray-800 rounded-lg">21 Days Duration</span>
//           <span className="px-4 py-2 bg-gray-800 rounded-lg">English, Regional Languages</span>
//         </div>

//         {/* Call-to-Action Button */}
//         <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg">
//           See Available Batches
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TwohundredLandingPage;

  //     <div 
  //       className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
  //       style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
  //     >
  //       <div className="absolute top-5 left-5 flex items-center">
  //         <img 
  //           src="/images/logo.svg" 
  //           alt="" 
  //           className="w-32"
  //         />
  //          <img 
  //           src="/images/dash.svg" 
  //           alt="" 
  //           className="w-32"
  //         />
  //       </div>
  //       <div className="absolute top-5 right-5 flex space-x-4 text-white">
  //         <img src="/searchuser.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
  //         {/* <img src="/user-icon.png" alt="User" className="w-6 h-6 cursor-pointer" /> */}
  //       </div>
  //       <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white max-w-lg text-center">
  //         <h1 className="text-3xl font-bold">
  //           Become a Certified Yoga Teacher in <span className="text-indigo-400">200 Hours</span>
  //         </h1>
  //         <p className="mt-4 text-lg">
  //           Join our immersive teacher training program. Learn, practice, and teach with confidence.
  //         </p>
  //         <div className="mt-4 flex justify-center items-center space-x-2">
  //           <img src="/user1.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
  //           <img src="/user2.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
  //           <span>100K+ Yoga Member Community</span>
  //         </div>
  //         <div className="mt-4 flex justify-center space-x-4">
  //           <span className="px-4 py-2 bg-gray-800 rounded-lg">21 Days Duration</span>
  //           <span className="px-4 py-2 bg-gray-800 rounded-lg">English, Regional Languages</span>
  //         </div>
  //         <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg">
  //           See Available Batches
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };
 
  



//   import React from "react";

// const TwoHundredLandingPage = () => {
//   return (
//     <div 
//       className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" 
//       style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
//     >
//       {/* Top Navigation */}
//       <div className="absolute top-5 left-5 flex items-center space-x-4">
//         <img src="/images/logo.svg" alt="Logo" className="w-16" />
//         <img src="/images/dash.svg" alt="Menu" className="w-8 h-8 cursor-pointer" />
//       </div>
//       <div className="absolute top-5 right-5 flex space-x-4">
//         <img src="/images/searchuser.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
//         {/* <img src="/images/user-icon.svg" alt="User" className="w-6 h-6 cursor-pointer" /> */}
//       </div>

//       {/* Main Content */}
//       <div className="text-white max-w-3xl text-left p-8">
//         <h1 className="text-5xl font-bold leading-snug">
//           Become a Certified Yoga Teacher in <span className="text-indigo-400">200 Hours</span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-200">
//           Join our immersive teacher training program. Learn, practice, and teach with confidence.
//         </p>

//         {/* Community Members */}
//         <div className="mt-6 flex items-center space-x-4">
//           <div className="flex -space-x-2">
//             <img src="/images/user1.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
//             <img src="/images/user2.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
//             <img src="/images/user3.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
//           </div>
//           <span className="text-lg">100K+ Yoga Member Community</span>
//         </div>

//         {/* Course Info */}
//         <div className="mt-6 flex space-x-4">
//           <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">21 Days Duration</span>
//           <span className="px-4 py-2 bg-gray-800 rounded-lg text-sm">English, Regional Languages</span>
//         </div>

//         {/* Call-to-Action Button */}
//         <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg shadow-lg">
//           See Available Batches
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TwoHundredLandingPage;



import React, { useState }  from "react";
// import InnerNavComponent from '../InnerNavComponent'
import InnerNavComponent from "../../../Components/InnerNavComponent";
import "./TwohundredLandingPage.scss";
import follower_m from './images/follower_m.svg'
import lotus_200_card from './images/lotus_200_card.png'
// import post1 from "/images/post1.svg"
import Footer from "../../../Components/Footer";

const TwoHundredLandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const Locate = {
    title: 'Contact us',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  const batches = [
    {
      id: 1,
      title: "7 Months Advanced TTC",
      duration: "07 Months",
      mode: "Online & On Campus",
      language: "English",
      startDate: "03 Mar 2025",
      timing: "Evening: 5pm - 8pm",
      days: "Monday - Saturday",
    },
    {
      id: 2,
      title: "1 Year Advanced TTC",
      duration: "12 Months",
      mode: "Online & On Campus",
      language: "Hindi",
      startDate: "13 Mar 2025",
      timing: "Afternoon: 1:30pm - 4pm",
      days: "Monday - Friday",
    },
    {
      id: 3,
      title: "2 Year Advanced TTC",
      duration: "24 Months",
      mode: "Online & On Campus",
      language: "English",
      startDate: "23 Mar 2025",
      timing: "Sat: 5pm - 8pm, Sun: 4pm - 8pm",
      days: "Saturday - Sunday",
    },
    {
      id: 4,
      title: "4 Months Advanced TTC",
      duration: "04 Months",
      mode: "Online",
      language: "English",
      startDate: "03 Apr 2025",
      timing: "Morn: 7am - 9am & Even: 4:30pm - 8pm",
      days: "Monday - Friday",
    },
    {
      id: 5,
      title: "3 Months Advanced TTC",
      duration: "03 Months",
      mode: "On Campus",
      language: "English",
      startDate: "03 May 2025",
      timing: "6:30am - 8:00pm",
      days: "Monday - Saturday",
    },
  ];

  const upcomingDates = [
    { date: "1st Sep to 30th Sep 2024", mode: "Online" },
    { date: "1st Sep to 30th Sep 2024", mode: "Online & On Campus" },
    { date: "1st Sep to 30th Sep 2024", mode: "Online & On Campus" },
    { date: "1st Sep to 30th Sep 2024", mode: "Online" },
  ];

const offerings = [
  {
    image: "offering1.jpg",
    title: "Special Interaction with Dr. Hansaji Yogendra",
    description:
      "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
  },
  {
    image: "offering2.jpg",
    title: "Live Interactive Classes",
    description: "Engage with experienced instructors in real-time sessions.",
  },
  {
    image: "offering3.jpg",
    title: "One-on-One Mentorship",
    description: "Personalized mentorship to guide your learning journey.",
  },
  {
    image: "offering4.jpg",
    title: "Exclusive Study Material",
    description: "Get access to premium yoga learning resources.",
  },
];


const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nullam amet parturient.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Laoreet venenatis sed et facilisis enim eu viverra mattis venenatis. Pretium wenerra hendrerit egestas dui tortor pharetra ut nulla odio. Varius.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed libero.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Nibh in mauris odio morbi netus.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Ultricies.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Id proin faucibus volutpat.",
    answer: "",
  },
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="landing-page">
      
      {/* Hero Section */}
     <section className="hero">
     
  <div className="hero-overlay">
  <InnerNavComponent abc={Locate} />
    <div className="hero-content">
      <h1>
        Become a Certified Yoga<br /> Teacher in <span className="hero_content-span">200 Hours</span>
      </h1>
      <p className="hero_content-para">
        Join our immersive teacher training program.<br /> Learn, practice, and teach with confidence.
      </p>

      <div className="hero-info">
        <div className="info-item_community ">
          <img src={follower_m} alt="Community" />
          <span className="follower_desc">100K + Yoga <br /> Member Community</span>
        </div>
        {/* <div className="info-item">21 Days Duration</div>
        <div className="info-item">English, Regional Languages</div> */}
      </div>

      <button className="cta-button">See Available Batches</button>
    </div>
  </div>
</section>


      {/* Benefits Section */}
      <section className="benefits">
        <h2 className="section-title">
          <span className="highlight">Student Benefits</span>
          <br />
          <span className="title2">What will you get from this Training?</span>
        </h2>
        <p className="section-description">
          Our Yoga Teacher Training Program is designed to empower you with the knowledge,<br />
          skills, and confidence to teach yoga effectively. Here’s what you’ll get:
        </p>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Hands-on Asana Sessions</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Personalized Mentorship</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Downloadable Material</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Expert Faculty</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.svg" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.svg" alt="Benefits Icon" className="icon1" />
            <h3>Hands-on Asana Sessions</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
        </div>
      </section>

      {/* Whom Can You Teach Section */}
      <section className="teach">
        <h2 className="section-title1">
          <span className="highlight">Student Benefits</span>
          <br />
          <span className="title2">Whom can you teach</span>
        </h2>
        <p className="section-description">
          Our Yoga Teacher Training Program is designed to empower you with the knowledge,<br />
          skills, and confidence to teach yoga effectively. Here’s what you’ll get:
        </p>
        <div className="teach-grid">
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card} alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.svg" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
        </div>
      </section>

  {/* Available Batches */}

  <div className="available-batches">
      <div className="batch-container">
        <div className="batch-header">
          <p className="available-text">Available Batches</p>
          <h2 className="choose-text">Choose Your Ideal Batch</h2>
          <p className="description-text">
            Our flexible course schedule allows you to find a batch that fits your availability.<br />
            Get started on your path to becoming a certified yoga instructor today.
          </p>
        </div>
        
        <div className="batch-grid">
          <div className="batch-row header-row">
            <div className="batch-cell logo-cell">
              <img src="/images/asatanga1.svg" alt="Yoga icon" className="yoga-icon" />
            </div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell header-cell">
                <div className="batch-num">Batch - {batch.id}</div>
                <div className="batch-name">{batch.title}</div>
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Duration</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.duration}
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Batch Mode</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.mode}
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Language</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.language}
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Starting Date</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.startDate}
                <span 
                  className="view-batch-link" 
                  onClick={() => {
                    setActiveTab(batch.id);
                    setShowModal(true);
                  }}
                >
                  View upcoming batch
                </span>
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Timings</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.timing}
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell">Days</div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell data-cell">
                {batch.days}
              </div>
            ))}
          </div>
          
          <div className="batch-row">
            <div className="batch-cell label-cell"></div>
            {batches.map((batch) => (
              <div key={batch.id} className="batch-cell button-cell">
                <button className="enroll-now-btn">Enroll Now →</button>
                <button className="view-details-btn">View Details</button>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <div className="modal-header">
                <h3>Upcoming Dates</h3>
                <button 
                  className="close-modal" 
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="date-grid">
                  {upcomingDates.map((date, index) => (
                    <div key={index} className="date-item">
                      <div className="date-line">
                        <span className="calendar-icon"><img src="/images/calender.svg" alt="Calender Icon" /></span>
                        <span className="date">{date.date}</span>
                      </div>
                      <div className="mode-line">
                        <span className="computer-icon"><img src="/images/computer.svg" alt="Computer Icon"/></span>
                        <span className="mode">{date.mode}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="enroll-course-btn">Enroll Course →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>




      {/* Teaching & Certification */}
      <section className="certification">
      <h2 className="section-title">
        <span className="highlight">Available Batches</span>
        <br />
        Teaching & Certification
      </h2>
      <p className="section-description">
        Our 200-hour yoga teacher training is globally recognized.
      </p>

      <div className="certification-grid">
        {/* Course Attendance Criteria */}
        <div className="criteria">
          <h3>Course Attendance Criteria</h3>
          <ul>
            <li>Students are required to have a minimum 90% attendance.</li>
            <li>
              After qualifying the attendance criteria, students can appear for
              the exam (100 marks).
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Course Details</th>
                <th>Marks</th>
                <th>Minimum Score Req.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Theory Component</td>
                <td>50 marks</td>
                <td>50%</td>
              </tr>
            </tbody>
          </table>
          <p>
            Upon passing the exam, students will receive a{" "}
            <strong>Basic Teacher Training Certificate (200 Hours)</strong> by
            The Yoga Institute.
          </p>
        </div>

        {/* Post Qualification Opportunities */}
        <div className="opportunities">
          <h3>Post Qualification Opportunities</h3>
          <div className="images">
            {/* <img src="post1.svg" alt="Post Qualification" />
            <img src="post2.svg" alt="Post Qualification" />
            <img src="post3.svg" alt="Post Qualification" />
            <img src="post4.svg" alt="Post Qualification" /> */}
          </div>
        </div>

        {/* Exam Details */}
        <div className="exam-details">
          <h3>Exam Details</h3>
          <ul>
            <li>Final exams can be taken only after completing coursework.</li>
            <li>Students must appear for exams within 90 days of course end.</li>
            <li>Students get a maximum of 3 attempts.</li>
            <li>Students can register for online or on-campus exams.</li>
            <li>Evaluations will be done on final submissions only.</li>
          </ul>
        </div>

        {/* Exam Schedule */}
        <div className="exam-schedule">
          <h3>Exam Schedule</h3>
          <ul>
            <li>
              <strong>On-campus:</strong> Last Wednesday of the month, between
              10 AM and 2 PM IST.
            </li>
            <li>
              <strong>Online:</strong> Conducted on the 1st and 3rd Saturday of
              the month.
            </li>
            <li>
              <strong>Theory:</strong> 10 AM IST
            </li>
            <li>
              <strong>Practical:</strong> 3:30 PM IST / 6:30 PM IST
            </li>
            <li>Mock tests are held 7-14 days before final exams.</li>
          </ul>
        </div>

        {/* Post Course Certification */}
        <div className="post-certification">
          <h3>What you will get on post course</h3>
          <div className="certificates">
            <div className="certificate-item">
              <p>RYT - 200 Certificate</p>
            </div>
            <div className="certificate-item">
              <p>YCB Level - 3 Certificate</p>
            </div>
          </div>
          {/* <img src={certificateImg} alt="Certificate" className="certificate-image" /> */}
        </div>
      </div>
    </section>

      {/* Unique Offerings */}
      <section className="offerings">
      <h2 className="section-title">
        <span className="highlight">Available Batches</span>
        <br />
        Our Unique Offerings
      </h2>

      <div className="carousel">
        <button className="carousel-button left">
          {/* <FaChevronLeft /> */}
        </button>
        <div className="carousel-track">
          {offerings.map((offering, index) => (
            <div className="carousel-item" key={index}>
              <img src={offering.image} alt={offering.title} />
            </div>
          ))}
        </div>
        <button className="carousel-button right">
          {/* <FaChevronRight /> */}
        </button>
      </div>

      <div className="offering-details">
        <h3>{offerings[0].title}</h3>
        <p>{offerings[0].description}</p>
      </div>

      <div className="carousel-dots">
        {offerings.map((_, index) => (
          <span key={index} className={`dot ${index === 0 ? "active" : ""}`} />
        ))}
      </div>
    </section>

      {/* FAQ Section */}
 <section className="faq">
      <h3 className="faq-heading">FAQ</h3>
      <h2 className="faq-title">Frequently Asked Question</h2>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
  {openIndex === index ? (
    <img src="/images/arrowup.svg" alt="" />
  ) : (
    <img src="/images/arrowdown.svg" alt="" />
  )}
</span>

            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>

      <div className="refund-policy">
        
      <img src="/images/yogalogorefund.svg" alt="The Yoga Institute" className="logorefund" />
        <h3>Refund Policy</h3>
        <p>
          The Yoga Institute has a strict no-refund policy for all its programs. The only exception is if a program is canceled by the institute, in which case the student will be offered a credit for any other program or a refund of the event fee.
        </p>
        {/* <img src="logo.png" alt="The Yoga Institute" className="refund-logo" /> */}
      </div>
    </section>

    {/* Enroll Container */}
    <div className="enroll-container">
      <span className="course-title">200-Hour Yoga Teacher Training Course</span>
      <button className="enroll-button">
        Enroll Now 
        {/* <FiArrowRight className="arrow-icon" /> */} 
      </button>
    </div>

      {/* Footer */}
      {/* <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/logo.svg" alt="The Yoga Institute" className="logo" />
          <p>
            The Yoga Institute, Santacruz East, Mumbai, India was founded in 1918 by Shri Yogendraji and is the oldest
            center of yoga in the world.
          </p>
          <div className="social-icons">
           
          </div>
        </div>

        <div className="footer-center">
          <div className="stats">
            <div>
              <span>105+</span>
              <p>Number of Years</p>
            </div>
            <div>
              <span>10Cr+</span>
              <p>Lives Touched</p>
            </div>
            <div>
              <span>1L+</span>
              <p>Teachers Certified</p>
            </div>
            <div>
              <span>500+</span>
              <p>Professors</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <ul>
            <li>Corporate Wellness</li>
            <li>Affiliations</li>
            <li>Careers</li>
            <li>CSR</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Locate Us</li>
          </ul>
          <address>
            Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai - 400055 India
            <br />
            <a href="tel:+917738155500">+91-7738155500</a>, <a href="tel:+912226105066">+91-22-26105066</a>,
            <a href="tel:+912226105181">+91-22-26105181</a>
            <br />
            <a href="mailto:info@theyogainstitute.org">info@theyogainstitute.org</a>
          </address>
          <p>© 2024 The Yoga Institute. All rights reserved.</p>
        </div>
      </div>
    </footer> */}
      <Footer />
    </div>
  );
};

export default TwoHundredLandingPage;


// const TwoHundredLandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Become a Certified Yoga Teacher in 200 Hours</h1>
//           <p>Join an immersive, flexible certification course with expert faculty.</p>
//           <button className="cta-button">See Full Batches</button>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="benefits">
//         <h2>What will you get from this Training?</h2>
//         <div className="benefits-grid">
//           <div className="benefit-item">Hands-on Yoga Practice</div>
//           <div className="benefit-item">Expert Faculty</div>
//           <div className="benefit-item">Certification & Recognition</div>
//           <div className="benefit-item">Flexible Batches</div>
//         </div>
//       </section>

//       {/* Batch Selection */}
//       <section className="batch-selection">
//         <h2>Choose Your Ideal Batch</h2>
//         <div className="batch-table">
//           <div className="batch-item">Weekday Batch</div>
//           <div className="batch-item">Weekend Batch</div>
//           <div className="batch-item">Fast Track Batch</div>
//         </div>
//       </section>

//       {/* Teaching & Certification */}
//       <section className="certification">
//         <h2>Teaching & Certification</h2>
//         <p>Our 200-hour yoga teacher training is globally recognized.</p>
//       </section>

//       {/* Unique Offerings */}
//       <section className="offerings">
//         <h2>Our Unique Offerings</h2>
//         <div className="offerings-list">
//           <div className="offering-item">Live Interactive Classes</div>
//           <div className="offering-item">One-on-One Mentorship</div>
//           <div className="offering-item">Exclusive Study Material</div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-item">What is the duration of the course?</div>
//         <div className="faq-item">Is the certification recognized globally?</div>
//         <div className="faq-item">Can beginners join this course?</div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2025 Yoga Teacher Training. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default TwoHundredLandingPage;


  {/* <section className="available-batches">
      <h2 className="section-title">
        <span className="highlight">Available Batches</span>
        <br />
        Choose Your Ideal Batch
      </h2>
      <p className="section-description">
        Our flexible course schedule allows you to find a batch that fits your availability.
        Get started on your path to becoming a certified yoga instructor today.
      </p>

      <div className="batches-table">
        {batches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <div className="batch-header">Batch - {index + 1}</div>
            <div className="batch-title">{batch.title}</div>
            <div className="batch-info">
              <p><strong>Duration:</strong> {batch.duration}</p>
              <p><strong>Batch Mode:</strong> {batch.mode}</p>
              <p><strong>Language:</strong> {batch.language}</p>
              <p><strong>Starting Date:</strong> <span className="view-dates" onClick={() => setShowModal(true)}>View upcoming batch</span></p>
              <p><strong>Timings:</strong> {batch.timing}</p>
              <p><strong>Days:</strong> {batch.days}</p>
            </div>
            <div className="batch-buttons">
              <button className="enroll-btn">Enroll Now →</button>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            <h3>Upcoming Dates</h3>
            <div className="upcoming-dates">
              {upcomingDates.map((item, idx) => (
                <div className="date-item" key={idx}>
                  📅 {item.date} <br />
                  🖥 {item.mode}
                </div>
              ))}
            </div>
            <button className="enroll-modal-btn">Enroll Course →</button>
          </div>
        </div>
      )}
    </section> */}
 {/* <section className="available-batches">
      <h2 className="section-title">
        <span className="highlight">Available Batches</span>
        <br />
        Choose Your Ideal Batch
      </h2>
      <p className="section-description">
        Our flexible course schedule allows you to find a batch that fits your availability.
        Get started on your path to becoming a certified yoga instructor today.
      </p>

      <div className="batches-table">
        {batches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <div className="batch-header">Batch - {index + 1}</div>
            <div className="batch-title">{batch.title}</div>
            <div className="batch-info">
              <p><strong>Duration:</strong> {batch.duration}</p>
              <p><strong>Batch Mode:</strong> {batch.mode}</p>
              <p><strong>Language:</strong> {batch.language}</p>
              <p><strong>Starting Date:</strong> {batch.startDate}</p>
              <p><strong>Timings:</strong> {batch.timing}</p>
              <p><strong>Days:</strong> {batch.days}</p>
            </div>
            <div className="batch-buttons">
              <button className="enroll-btn">Enroll Now →</button>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section> */}


    // import React, { useState } from "react";

    // const TwoHundredLandingPage = () => {
    //   const [showModal, setShowModal] = useState(false);
    //   const [activeTab, setActiveTab] = useState(null);
    //   const [openIndex, setOpenIndex] = useState(null);
    //   const [activeOfferingIndex, setActiveOfferingIndex] = useState(0);
    
    //   const batches = [
    //     {
    //       id: 1,
    //       title: "7 Months Advanced TTC",
    //       duration: "07 Months",
    //       mode: "Online & On Campus",
    //       language: "English",
    //       startDate: "03 Mar 2025",
    //       timing: "Evening: 5pm - 8pm",
    //       days: "Monday - Saturday",
    //     },
    //     {
    //       id: 2,
    //       title: "1 Year Advanced TTC",
    //       duration: "12 Months",
    //       mode: "Online & On Campus",
    //       language: "Hindi",
    //       startDate: "13 Mar 2025",
    //       timing: "Afternoon: 1:30pm - 4pm",
    //       days: "Monday - Friday",
    //     },
    //     {
    //       id: 3,
    //       title: "2 Year Advanced TTC",
    //       duration: "24 Months",
    //       mode: "Online & On Campus",
    //       language: "English",
    //       startDate: "23 Mar 2025",
    //       timing: "Sat: 5pm - 8pm, Sun: 4pm - 8pm",
    //       days: "Saturday - Sunday",
    //     },
    //     {
    //       id: 4,
    //       title: "4 Months Advanced TTC",
    //       duration: "04 Months",
    //       mode: "Online",
    //       language: "English",
    //       startDate: "03 Apr 2025",
    //       timing: "Morn: 7am - 9am & Even: 4:30pm - 8pm",
    //       days: "Monday - Friday",
    //     },
    //     {
    //       id: 5,
    //       title: "3 Months Advanced TTC",
    //       duration: "03 Months",
    //       mode: "On Campus",
    //       language: "English",
    //       startDate: "03 May 2025",
    //       timing: "6:30am - 8:00pm",
    //       days: "Monday - Saturday",
    //     }
    //   ];
    
    //   const upcomingDates = [
    //     { date: "1st Sep to 30th Sep 2024", mode: "Online" },
    //     { date: "1st Sep to 30th Sep 2024", mode: "Online & On Campus" },
    //     { date: "1st Sep to 30th Sep 2024", mode: "Online & On Campus" },
    //     { date: "1st Sep to 30th Sep 2024", mode: "Online" },
    //   ];
    
    //   const offerings = [
    //     {
    //       image: "/api/placeholder/400/320",
    //       title: "Special Interaction with Dr. Hansaji Yogendra",
    //       description:
    //         "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer."
    //     },
    //     {
    //       image: "/api/placeholder/400/320",
    //       title: "Live Interactive Classes",
    //       description: "Engage with experienced instructors in real-time sessions."
    //     },
    //     {
    //       image: "/api/placeholder/400/320",
    //       title: "One-on-One Mentorship",
    //       description: "Personalized mentorship to guide your learning journey."
    //     },
    //     {
    //       image: "/api/placeholder/400/320",
    //       title: "Exclusive Study Material",
    //       description: "Get access to premium yoga learning resources."
    //     }
    //   ];
    
    //   const faqData = [
    //     {
    //       question: "Lorem ipsum dolor sit amet consectetur. Nullam amet parturient.",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur. Laoreet venenatis sed et facilisis enim eu viverra mattis venenatis. Pretium wenerra hendrerit egestas dui tortor pharetra ut nulla odio. Varius."
    //     },
    //     {
    //       question: "Lorem ipsum dolor sit amet consectetur. Sed libero.",
    //       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatum. Consequatur, aliquam mollitia."
    //     },
    //     {
    //       question: "Lorem ipsum dolor sit amet consectetur. Nibh in mauris odio morbi netus.",
    //       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatum."
    //     },
    //     {
    //       question: "Lorem ipsum dolor sit amet consectetur. Ultricies.",
    //       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus."
    //     },
    //     {
    //       question: "Lorem ipsum dolor sit amet consectetur. Id proin faucibus volutpat.",
    //       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //     }
    //   ];
    
    //   const toggleFAQ = (index) => {
    //     setOpenIndex(openIndex === index ? null : index);
    //   };
    
    //   const nextOffering = () => {
    //     setActiveOfferingIndex((prev) => (prev === offerings.length - 1 ? 0 : prev + 1));
    //   };
    
    //   const prevOffering = () => {
    //     setActiveOfferingIndex((prev) => (prev === 0 ? offerings.length - 1 : prev - 1));
    //   };
    
    //   return (
    //     <div className="w-full font-sans bg-white">
    //       {/* Hero Section */}
    //       <section className="relative h-96 bg-slate-800 text-white">
    //         <div className="absolute inset-0 bg-black opacity-50"></div>
    //         <img src="/api/placeholder/1600/500" alt="Yoga pose" className="absolute inset-0 w-full h-full object-cover" />
    //         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
    //           <h1 className="text-4xl font-bold mb-4 max-w-xl">
    //             Become a Certified Yoga Teacher in <span className="text-yellow-400">200 Hours</span>
    //           </h1>
    //           <p className="text-lg mb-6 max-w-xl">
    //             Join our immersive teacher training program. Learn, practice, and teach with confidence.
    //           </p>
    
    //           <div className="flex flex-wrap gap-6 mb-6 text-sm">
    //             <div className="flex items-center">
    //               <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 mr-2"></span>
    //               <span>100K+ Yoga Member Community</span>
    //             </div>
    //             <div className="flex items-center">
    //               <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 mr-2"></span>
    //               <span>21 Days Duration</span>
    //             </div>
    //             <div className="flex items-center">
    //               <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 mr-2"></span>
    //               <span>English, Regional Languages</span>
    //             </div>
    //           </div>
    
    //           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md w-64">
    //             See Available Batches
    //           </button>
    //         </div>
    //       </section>
    
    //       {/* Benefits Section */}
    //       <section className="py-16 px-4 bg-gray-50">
    //         <div className="container mx-auto">
    //           <h2 className="text-center mb-8">
    //             <span className="text-yellow-500 font-semibold">Student Benefits</span>
    //             <div className="text-3xl font-bold mt-2">What will you get from this Training?</div>
    //           </h2>
    //           <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
    //           {`Our Yoga Teacher Training Program is designed to empower you with the knowledge,
    //             skills, and confidence to teach yoga effectively. Here's what you'll get:`}
    //           </p>
    
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //             {[1, 2, 3, 4, 5, 6].map((item) => (
    //               <div key={item} className="bg-white p-6 rounded-lg shadow-md">
    //                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
    //                   <span className="text-xl">🧘‍♀️</span>
    //                 </div>
    //                 <h3 className="font-bold text-lg mb-2">Hands-on Asana Sessions</h3>
    //                 <p className="text-gray-600">Practice and learn under expert supervision.</p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    
    //       {/* Whom Can You Teach Section */}
    //       <section className="py-16 px-4">
    //         <div className="container mx-auto">
    //           <h2 className="text-center mb-8">
    //             <span className="text-yellow-500 font-semibold">Student Benefits</span>
    //             <div className="text-3xl font-bold mt-2">Whom can you teach</div>
    //           </h2>
    //           <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
    //             {`Our Yoga Teacher Training Program is designed to empower you with the knowledge,
    //             skills, and confidence to teach yoga effectively. Here's what you'll get:`}
    //           </p>
    
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //             {[1, 2, 3, 4, 5, 6].map((item) => (
    //               <div key={item} className="bg-gray-50 p-6 rounded-lg text-center">
    //                 <h3 className="font-bold text-lg mb-2">Certification</h3>
    //                 <p className="text-gray-600">Practice and learn under expert supervision.</p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    
    //       {/* Available Batches */}
    //       <section className="py-16 px-4 bg-gray-50">
    //         <div className="container mx-auto">
    //           <div className="text-center mb-12">
    //             <h3 className="text-yellow-500 font-semibold">Available Batches</h3>
    //             <h2 className="text-3xl font-bold mt-2">Choose Your Ideal Batch</h2>
    //             <p className="text-gray-600 max-w-3xl mx-auto mt-4">
    //               Our flexible course schedule allows you to find a batch that fits your availability.
    //               Get started on your path to becoming a certified yoga instructor today.
    //             </p>
    //           </div>
    
    //           <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
    //             <table className="min-w-full">
    //               <thead>
    //                 <tr className="bg-white border-b">
    //                   <th className="p-4 text-left w-32"></th>
    //                   {batches.map((batch) => (
    //                     <th key={batch.id} className="p-4 text-left">
    //                       <div className="text-sm text-gray-500">Batch - {batch.id}</div>
    //                       <div className="font-medium text-pink-600">{batch.title}</div>
    //                     </th>
    //                   ))}
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr className="border-b">
    //                   <td className="p-4 font-medium">Duration</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">{batch.duration}</td>
    //                   ))}
    //                 </tr>
    //                 <tr className="border-b bg-gray-50">
    //                   <td className="p-4 font-medium">Batch Mode</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">{batch.mode}</td>
    //                   ))}
    //                 </tr>
    //                 <tr className="border-b">
    //                   <td className="p-4 font-medium">Language</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">{batch.language}</td>
    //                   ))}
    //                 </tr>
    //                 <tr className="border-b bg-gray-50">
    //                   <td className="p-4 font-medium">Starting Date</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">
    //                       <div>{batch.startDate}</div>
    //                       <button 
    //                         className="text-blue-500 text-sm underline"
    //                         onClick={() => {
    //                           setActiveTab(batch.id);
    //                           setShowModal(true);
    //                         }}
    //                       >
    //                         View upcoming batch
    //                       </button>
    //                     </td>
    //                   ))}
    //                 </tr>
    //                 <tr className="border-b">
    //                   <td className="p-4 font-medium">Timings</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">{batch.timing}</td>
    //                   ))}
    //                 </tr>
    //                 <tr className="border-b bg-gray-50">
    //                   <td className="p-4 font-medium">Days</td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">{batch.days}</td>
    //                   ))}
    //                 </tr>
    //                 <tr>
    //                   <td className="p-4"></td>
    //                   {batches.map((batch) => (
    //                     <td key={batch.id} className="p-4">
    //                       <button className="bg-pink-600 text-white px-4 py-2 rounded-md w-full mb-2">
    //                         Enroll Now →
    //                       </button>
    //                       <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-md w-full">
    //                         View Details
    //                       </button>
    //                     </td>
    //                   ))}
    //                 </tr>
    //               </tbody>
    //             </table>
    //           </div>
    
    //           {/* Modal for upcoming batches */}
    //           {showModal && (
    //             <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    //               <div className="bg-white rounded-lg max-w-2xl w-full p-6">
    //                 <div className="flex justify-between items-center mb-6">
    //                   <h3 className="text-xl font-bold">Upcoming Dates</h3>
    //                   <button 
    //                     className="text-2xl"
    //                     onClick={() => setShowModal(false)}
    //                   >
    //                     ×
    //                   </button>
    //                 </div>
    //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    //                   {upcomingDates.map((date, index) => (
    //                     <div key={index} className="border p-4 rounded-lg">
    //                       <div className="flex items-center mb-2">
    //                         <span className="mr-2">📅</span>
    //                         <span>{date.date}</span>
    //                       </div>
    //                       <div className="flex items-center">
    //                         <span className="mr-2">🖥</span>
    //                         <span>{date.mode}</span>
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </div>
    //                 <button className="bg-pink-600 text-white px-6 py-3 rounded-md w-full">
    //                   Enroll Course →
    //                 </button>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </section>
    
    //       {/* Teaching & Certification */}
    //       <section className="py-16 px-4">
    //         <div className="container mx-auto">
    //           <h2 className="text-center mb-8">
    //             <span className="text-yellow-500 font-semibold">Available Batches</span>
    //             <div className="text-3xl font-bold mt-2">Teaching & Certification</div>
    //           </h2>
    //           <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
    //             Our 200-hour yoga teacher training is globally recognized.
    //           </p>
    
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //             <div className="bg-white p-6 rounded-lg shadow-md">
    //               <h3 className="font-bold text-lg mb-4">Course Attendance Criteria</h3>
    //               <ul className="list-disc pl-5 mb-4 text-gray-600">
    //                 <li className="mb-2">Students are required to have a minimum 90% attendance.</li>
    //                 <li className="mb-2">
    //                   After qualifying the attendance criteria, students can appear for the exam (100 marks).
    //                 </li>
    //               </ul>
    //               <table className="w-full border-collapse mb-4">
    //                 <thead className="bg-gray-100">
    //                   <tr>
    //                     <th className="border p-2 text-left">Course Details</th>
    //                     <th className="border p-2 text-left">Marks</th>
    //                     <th className="border p-2 text-left">Minimum Score Req.</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td className="border p-2">Theory Component</td>
    //                     <td className="border p-2">50 marks</td>
    //                     <td className="border p-2">50%</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //               <p className="text-gray-600">
    //                 Upon passing the exam, students will receive a{" "}
    //                 <strong>Basic Teacher Training Certificate (200 Hours)</strong> by
    //                 The Yoga Institute.
    //               </p>
    //             </div>
    
    //             <div className="bg-white p-6 rounded-lg shadow-md">
    //               <h3 className="font-bold text-lg mb-4">Post Qualification Opportunities</h3>
    //               <div className="grid grid-cols-2 gap-4">
    //                 {/* <img src="/api/placeholder/150/100" alt="Opportunity" className="rounded-lg" />
    //                 <img src="/api/placeholder/150/100" alt="Opportunity" className="rounded-lg" />
    //                 <img src="/api/placeholder/150/100" alt="Opportunity" className="rounded-lg" />
    //                 <img src="/api/placeholder/150/100" alt="Opportunity" className="rounded-lg" /> */}
    //               </div>
    //             </div>
    
    //             <div className="bg-white p-6 rounded-lg shadow-md">
    //               <h3 className="font-bold text-lg mb-4">Exam Details</h3>
    //               <ul className="list-disc pl-5 text-gray-600">
    //                 <li className="mb-2">Final exams can be taken only after completing coursework.</li>
    //                 <li className="mb-2">Students must appear for exams within 90 days of course end.</li>
    //                 <li className="mb-2">Students get a maximum of 3 attempts.</li>
    //                 <li className="mb-2">Students can register for online or on-campus exams.</li>
    //                 <li className="mb-2">Evaluations will be done on final submissions only.</li>
    //               </ul>
    //             </div>
    
    //             <div className="bg-white p-6 rounded-lg shadow-md">
    //               <h3 className="font-bold text-lg mb-4">Exam Schedule</h3>
    //               <ul className="list-disc pl-5 text-gray-600">
    //                 <li className="mb-2">
    //                   <strong>On-campus:</strong> Last Wednesday of the month, between
    //                   10 AM and 2 PM IST.
    //                 </li>
    //                 <li className="mb-2">
    //                   <strong>Online:</strong> Conducted on the 1st and 3rd Saturday of
    //                   the month.
    //                 </li>
    //                 <li className="mb-2">
    //                   <strong>Theory:</strong> 10 AM IST
    //                 </li>
    //                 <li className="mb-2">
    //                   <strong>Practical:</strong> 3:30 PM IST / 6:30 PM IST
    //                 </li>
    //                 <li className="mb-2">Mock tests are held 7-14 days before final exams.</li>
    //               </ul>
    //             </div>
    
    //             <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
    //               <h3 className="font-bold text-lg mb-4">What you will get on post course</h3>
    //               <div className="flex gap-4 mb-4">
    //                 <div className="bg-pink-50 text-pink-600 p-4 rounded-lg flex-1 text-center">
    //                   <p>RYT - 200 Certificate</p>
    //                 </div>
    //                 <div className="bg-pink-50 text-pink-600 p-4 rounded-lg flex-1 text-center">
    //                   <p>YCB Level - 3 Certificate</p>
    //                 </div>
    //               </div>
    //               <img src="/api/placeholder/320/180" alt="Certificate" className="w-full rounded-lg" />
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    
    //       {/* Unique Offerings */}
    //       <section className="py-16 px-4 bg-gray-50">
    //         <div className="container mx-auto">
    //           <h2 className="text-center mb-8">
    //             <span className="text-yellow-500 font-semibold">Available Batches</span>
    //             <div className="text-3xl font-bold mt-2">Our Unique Offerings</div>
    //           </h2>
    
    //           <div className="relative max-w-2xl mx-auto mb-8">
    //             <button 
    //               className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
    //               onClick={prevOffering}
    //             >
    //               ←
    //             </button>
    //             <div className="overflow-hidden">
    //               <div className="flex">
    //                 <img 
    //                   src={offerings[activeOfferingIndex].image} 
    //                   alt={offerings[activeOfferingIndex].title}
    //                   className="w-full h-64 object-cover rounded-lg"
    //                 />
    //               </div>
    //             </div>
    //             <button 
    //               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
    //               onClick={nextOffering}
    //             >
    //               →
    //             </button>
    //           </div>
    
    //           <div className="text-center mb-6">
    //             <h3 className="font-bold text-xl mb-2">{offerings[activeOfferingIndex].title}</h3>
    //             <p className="text-gray-600 max-w-2xl mx-auto">
    //               {offerings[activeOfferingIndex].description}
    //             </p>
    //           </div>
    
    //           <div className="flex justify-center gap-2">
    //             {offerings.map((_, index) => (
    //               <button 
    //                 key={index} 
    //                 className={`w-3 h-3 rounded-full ${index === activeOfferingIndex ? 'bg-pink-600' : 'bg-gray-300'}`}
    //                 onClick={() => setActiveOfferingIndex(index)}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    
    //       {/* FAQ Section */}
    //       <section className="py-16 px-4">
    //         <div className="container mx-auto max-w-3xl">
    //           <h3 className="text-center text-yellow-500 font-semibold">FAQ</h3>
    //           <h2 className="text-center text-3xl font-bold mt-2 mb-12">Frequently Asked Question</h2>
    
    //           <div className="space-y-4 mb-12">
    //             {faqData.map((item, index) => (
    //               <div
    //                 key={index}
    //                 className={`border rounded-lg overflow-hidden ${openIndex === index ? 'border-pink-600' : 'border-gray-300'}`}
    //               >
    //                 <button
    //                   className="flex justify-between items-center w-full p-4 text-left font-medium"
    //                   onClick={() => toggleFAQ(index)}
    //                 >
    //                   {item.question}
    //                   <span>{openIndex === index ? '▲' : '▼'}</span>
    //                 </button>
    //                 {openIndex === index && (
    //                   <div className="p-4 pt-0 bg-gray-50">
    //                     <p className="text-gray-600">{item.answer}</p>
    //                   </div>
    //                 )}
    //               </div>
    //             ))}
    //           </div>
    
    //           <div className="bg-white p-6 rounded-lg shadow-md">
    //             <h3 className="font-bold text-lg mb-4">Refund Policy</h3>
    //             <p className="text-gray-600">
    //               The Yoga Institute has a strict no-refund policy for all its programs. The only exception is if a program is canceled by the institute, in which case the student will be offered a credit for any other program or a refund of the event fee.
    //             </p>
    //           </div>
    //         </div>
    //       </section>
    
    //       {/* Enroll Container */}
    //       <div className="bg-pink-600 py-4 px-4">
    //         <div className="container mx-auto flex justify-between items-center">
    //           <span className="text-white font-medium">200-Hour Yoga Teacher Training Course</span>
    //           <button className="bg-white text-pink-600 px-6 py-2 rounded-md font-medium">
    //             Enroll Now →
    //           </button>
    //         </div>
    //       </div>
    
    //       {/* Footer */}
    //       <footer className="bg-gray-800 text-white py-12 px-4">
    //         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    //           <div>
    //             <div className="mb-4">LOGO</div>
    //             <p className="text-gray-400 mb-4">
    //               The Yoga Institute, Santacruz East, Mumbai, India was founded in 1918 by Shri Yogendraji and is the oldest
    //               center of yoga in the world.
    //             </p>
    //             <div className="flex gap-4">
    //               <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">f</span>
    //               <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">t</span>
    //               <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">i</span>
    //               <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">in</span>
    //               <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">y</span>
    //             </div>
    //           </div>
    
    //           <div>
    //             <div className="grid grid-cols-2 gap-4">
    //               <div className="text-center">
    //                 <div className="text-2xl font-bold">105+</div>
    //                 <p className="text-gray-400">Number of Years</p>
    //               </div>
    //               <div className="text-center">
    //                 <div className="text-2xl font-bold">10Cr+</div>
    //                 <p className="text-gray-400">Lives Touched</p>
    //               </div>
    //               <div className="text-center">
    //                 <div className="text-2xl font-bold">1L+</div>
    //                 <p className="text-gray-400">Teachers Certified</p>
    //               </div>
    //               <div className="text-center">
    //                 <div className="text-2xl font-bold">500+</div>
    //                 <p className="text-gray-400">Professors</p>
    //               </div>
    //             </div>
    //           </div>
    
    //           <div>
    //             <ul className="grid grid-cols-2 gap-2 mb-4 text-gray-400">
    //               <li>Corporate Wellness</li>
    //               <li>Affiliations</li>
    //               <li>Careers</li>
    //               <li>CSR</li>
    //               <li>Terms & Conditions</li>
    //               <li>Privacy Policy</li>
    //               <li>Locate Us</li>
    //             </ul>
    //             <address className="text-gray-400 not-italic mb-4">
    //               Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai - 400055 India
    //               <br />
    //               <a href="tel:+917738155500" className="text-gray-400">+91-7738155500</a>, <a href="tel:+912226105066" className="text-gray-400">+91-22-26105066</a>,
    //               <a href="tel:+912226105181" className="text-gray-400">+91-22-26105181</a>
    //               <br />
    //               <a href="mailto:info@theyogainstitute.org" className="text-gray-400">info@theyogainstitute.org</a>
    //             </address>
    //             <p className="text-gray-500">© 2024 The Yoga Institute. All rights reserved.</p>
    //           </div>
    //         </div>
    //       </footer>
    //     </div>
    //   );
    // };
    
    // export default TwoHundredLandingPage;