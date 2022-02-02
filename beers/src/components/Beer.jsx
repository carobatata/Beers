function Beer({id, name, img, description, tag}) {
    return (
      <div key={id}>
        <span>{name}</span>
        <span>{tag}</span>
        <img src={img} alt="BeerImage" />
        {/* <Link to={`/${id}`}>More details</Link> */}
        <span>{description}</span>
      </div>
    );
  }
  
  export default Beer;
