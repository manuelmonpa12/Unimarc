import 'animate.css';

export default function  ProductCard({name, price,  img, description}) {

    
    return(
        <div className="col animate__animated animate__fadeIn mb-2">
        <div className="card content-card">
          <div className="row no-gutters">
            <div className="col-12 content-img">
              <img src={img} className="card-img product-img" alt={name} />
            </div>
            <div className="col-12">
              <div className="card-body pb-1">
                  <h5 className="text-title" >{name}</h5>
                  <p className="text-subtitle crop-text">{description ? description : '...'}</p>
                  <p className="card-text letter-price">${price}</p>
              </div>
              <div className="content-btn  mb-2">
                <button type="button" className="btn btn-add">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}