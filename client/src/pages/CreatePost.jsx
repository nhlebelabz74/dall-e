import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";

import { api } from "../constants";

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        prompt: "",
        photo: ""
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const generateImage = async () => {
        if(form.prompt) {
            setGeneratingImg(true);
            
            try {
                // testing
                // const response = (await api.post('/api/v1/image_test', {
                //     prompt: form.prompt
                // }));
                // setForm({ ...form, photo: response.data.test_url });
                
                // production
                const response = await api.post('/api/v1/generate_image', {
                    prompt: form.prompt
                });
                setForm({ ...form, photo: response.data.image_url });
            }
            catch(err){
                alert(err.message);
            }
            finally {
                setGeneratingImg(false);
            }
        }
        else {
            alert("Please enter a prompt");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(form.photo && form.prompt) {
            setLoading(true);

            try {
                const api = axios.create({
                    baseURL: base_url,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const response = await api.post('/api/v1/post', form);

                navigate('/');
            } catch (error) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            alert("Please generate an image first");
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    }

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className='font-extrabold text-dark-gray text-[32px]'>
                    Create
                </h1>
                <p className='mt-2 text-[#666e75] text-md max-w-[512px]'>
                    Create imaginative and visually stunning images 
                    Through DALL-E AI and share them with the community.
                </p>
            </div>

            <form
                className="mt-16 max-w-3xl"
                onSubmit = {handleSubmit}
            >
                <div className="flex flex-col gap-5">
                    <FormField 
                        LabelName="Your name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />

                    <FormField 
                        LabelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="an armchair in the shape of an avocado"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div className="relative bg-gray-50 border border-gray-300 text-dark-gray text-sm rounded-lg focus:ring-blue focus:border-blue w-64 h-64 flex p-2 justify-center items-center">
                        {
                            form.photo ? (
                                <img 
                                    src={form.photo}
                                    alt={form.prompt}
                                    className="object-contain w-full h-full"
                                />
                            ) : (
                                <img 
                                    src={preview}
                                    alt="preview"
                                    className="object-contain w-9/12 h-9/12 opacity-40"
                                />
                            )
                        }

                        {
                            generatingImg && (
                                <div className="absolute inset-0 z-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center rounded-lg">
                                    <Loader />
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="mt-5 flex gap-5">
                        <button
                            type="button"
                            onClick={generateImage}
                            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            {generatingImg ? "Generating..." : "Generate"}
                        </button>
                </div>

                <div className="mt-10">
                    <p className="mt-2 text-gray text-sm">
                        Once you have created the image you want, you can share it with others 
                        in the community.
                    </p>
                    <button
                        type="submit"
                        className="mt-3 text-white bg-blue font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        {loading ? "Sharing... it may take a while" : "Share"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CreatePost;