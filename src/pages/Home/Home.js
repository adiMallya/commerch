import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components";
import { useDataContext } from "../../contexts";
import { ACTION_TYPE } from "../../utils";

import Hero from "../../assets/hero-banner.jpg";
import "./Home.css";

export function Home() {
  const navigate = useNavigate();
  const { categories, dispatch } = useDataContext();

  const navigateToCategory = (name) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_CATEGORY,
      payload: { checked: true, value: name },
    });
    navigate("/products");
  };

  return (
    <main className="page">
      <section className="home__section hero">
        <article className="hero-content">
          <h1>coolness delivered here</h1>
          <p>
            Find your merch, Add it to your bag and we'll deliver to your
            doorstep.{" "}
          </p>
          <Link to="/products" className="btn btn--primary-solid hero-cta">
            shop now
          </Link>
        </article>
        <div className="img-container">
          <img src={Hero} alt="hero" className="banner-img img-res" />
        </div>
      </section>
      <section className="home__section featured">
        <h2 className="text-center">categories to bag</h2>
        <div className="featured-categories">
          {categories &&
            categories.map(({ _id, categoryName, description, img }) => (
              <article
                className="featured-card"
                key={_id}
                onClick={() => navigateToCategory(categoryName)}
              >
                <div className="img-container">
                  <img
                    src={img}
                    alt={categoryName}
                    className="img-res"
                    loading="lazy"
                  />
                  <p className="text-overlay">{description}</p>
                </div>
              </article>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
