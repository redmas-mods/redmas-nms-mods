const ModCard = ({ mod }) => {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <div className="mod-card">
        <img src={mod.image} alt={mod.title} />
        <div className="mod-content">
          <h5>{mod.title}</h5>
          <p>{mod.description}</p>
          <span className="badge bg-light text-dark mb-3">
            v{mod.version}
          </span>
          <a
            href={mod.download}
            className="btn btn-primary w-100"
          >
            Télécharger
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModCard;
