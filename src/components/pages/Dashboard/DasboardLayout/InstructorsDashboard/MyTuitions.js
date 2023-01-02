import React from 'react';

const MyTuitions = () => {
    return (
        <div className='p-5 border rounded-md bg-white'>
            <div>
                <h2 className='text-start text-xl font-bold text-primary  uppercase'>My Tuitions</h2>
                <p className='text-start pb-5'>Manage your courses and its update like live, draft and insight.
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center pb-5'>
                <div className='md:pb-0 pb-3'>
                    <form className='w-64 md:w-96'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ringprimary focus:borderprimary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringprimary dark:focus:borderprimary" placeholder="Search your tutions" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-secondary dark:hover:bg-primary dark:focus:ring-primary">Search</button>
                        </div>
                    </form>
                </div>
                <div className='w-64'>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option defaultValue="Han Solo">Han Solo</option>
                        <option defaultValue="Greedo">Greedo</option>
                    </select>
                </div>
            </div>
            <hr className='pb-5' />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Start Date</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Learn Highter Math</td>
                            <td>20</td>
                            <td>2500 BDT</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Learn Core Chemistry</td>
                            <td>10</td>
                            <td>3500 BDT</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Learn Core Physics</td>
                            <td>25</td>
                            <td>5000 BDT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTuitions;