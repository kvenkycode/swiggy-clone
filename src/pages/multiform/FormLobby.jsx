import { Link } from "react-router-dom";
import { formConfig } from "../../utilits/formConfig";

const FormLobby = () => {
  return (
    <div className="d-flex flex-row justify-content-start gap-4 flex-wrap">
      {formConfig.map((item) => (
        <div className="card mb-3 col-sm-2" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.formName}</h5>
            <p className="card-text">{item.formDes}</p>
            <Link to={`/pages/multiform/formsgroup/${item.component}`} className="btn btn-primary">
              Open {item.component}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormLobby;
