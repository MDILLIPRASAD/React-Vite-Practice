import React, { useState } from 'react';

const Popup = ({ showPopUp, setShowPopUp }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setShowPopUp(false);
        setEmail('');
    }

    return (
        <div>
            <button
                className='border p-3 rounded-lg mb-4 text-white hover:bg-slate-100 hover:text-black hover:font-normal font-bold'
                onClick={() => setShowPopUp(true)}
            >
                Submit an Email
            </button>

            {showPopUp && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white text-black p-8 rounded-lg max-w-md'>
                        <h2 className='text-xl mb-4'>Form Title</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4 flex flex-col'>
                                <label className='text-gray-700 text-md font-bold mb-2 self-start'>Email:</label>
                                <input
                                    className='border rounded w-full px-3 py-2 text-gray-700'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    type='submit'
                                    className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                                >
                                    Submit
                                </button>
                                <button
                                    type='button'
                                    className='bg-gray-500 text-white px-4 py-2 rounded'
                                    onClick={() => setShowPopUp(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popup;
