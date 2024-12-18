import { useLoaderData } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const { meals } = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        {meals.slice(0, 24).map((meal) => (
          <div key={meal.idMeal} className="hover:p-2 duration-300 card bg-base-100 w-full shadow-xl border border-red-400">
            <figure>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {meal.strArea}
                <div className="badge badge-secondary">{meal.strCategory}</div>
              </h2>
              <p>{meal.strIngredient11}</p>
              <div className="card-actions justify-end">
                {/* Additional actions can be added here */}
              </div>
            </div>
            <Link
              to={meal.idMeal}
              className="btn btn-error hover:bg-rose-600"
            >
              Details
            </Link>
          </div>

        ))}
      </div>
      {/* <div>
        <div className="join">
          <button className="join-item btn btn-error" >1</button>
          <button className="join-item btn " onClick={loading()}>2</button>
          <button className="join-item btn ">3</button>
          <button className="join-item btn ">4</button>
        </div>
      </div> */}
    </div >
  )
}

export default App