import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(content);

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", {
        title,
        content
      }),
        toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log("Error creating note:", error);
      toast.error("Failed to create note");
      if(error.response.status === 429){
        toast.error("You are being rate limited. Please try again later.",{
          duration:4000,
          icon:'⚠️'
        });
      }else{
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto p-4'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Note Title'
                    className='input input-bordered'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Write your note here...'
                    className='textarea textarea-bordered h-32'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
