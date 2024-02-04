import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { allServices } = useAuth();


  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {allServices.map(({id,provider,price,service,description},index) => (
             <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" alt="our services images" width={500} />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
          
              </div>
               
            </div>
          ))}
        </div>
      </section>
      <Analytics />
    </>
  );
};
