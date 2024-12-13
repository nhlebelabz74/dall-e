import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ id, name, prompt, image }) => {
    return (
        <div className="group relative rounded-xl shadow-card hover:shadow-cardhover card"> 
            <img 
                src={image} 
                alt={prompt} 
                className="object-cover w-full h-auto rounded-xl"
            />
            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-dark-gray m-2 p-4 rounded-md">
                <p className="text-white text-sm overflow-y-auto">
                    {prompt}
                </p>
                <div className="flex justify-between items-center mt-5 gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue text-white text-sm font-bold flex justify-center items-center rounded-full">
                            {name[0]}
                        </div>
                        <p className="text-white text-sm">
                            {name}
                        </p>
                    </div>

                    <button
                        onClick={() => downloadImage({ id: id, image: image })}
                        className="flex gap-2 items-center rounded-full bg-blue"
                    >
                        <img
                            src={download} 
                            alt="download" 
                            className="w-8 h-8 object-contain invert"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;