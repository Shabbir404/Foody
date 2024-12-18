import { useLoaderData, useNavigate } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

const Details = () => {
    const { meals } = useLoaderData();
    const {
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strIngredient1,
        strIngredient2,
        strMeasure1,
        strMeasure2,
    } = meals[0];
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/')
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white">
            <div>
                <h1 className="text-4xl font-bold mb-4">{strMeal}</h1>
            </div>
            <hr className="mb-2" />
            <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{strCategory}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{strArea}</span>
            </div>
            <hr />
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc pl-5">
                    <li>{strMeasure1} {strIngredient1}</li>
                    <li>{strMeasure2} {strIngredient2}</li>
                </ul>
            </div>

            <p className="text-gray-700 mb-4">{strInstructions}</p>

            {strTags && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Tags</h2>
                    <div className="flex gap-2">
                        {strTags.split(',').map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                            >
                                {tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {strYoutube && (
                <a
                    href={strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800"
                >
                    Watch Video
                </a>
            )}
            <div className="text-left text-red-600  ">
                <button className="text-4xl hover:text-red-800" onClick={goBack}> <IoCaretBackSharp /></button>
            </div>
        </div>
    );
};

export default Details;