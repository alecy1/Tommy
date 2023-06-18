import * as React from "react";

export const About = () => {
	return  <>
            <div className="container">
              <h1 style={{fontSize:'xx-large'}}>Déjanos tus datos</h1>
              <h5 style={{fontSize:'large'}}>Envíanos un mensaje y uno de nuestros asesores expertos te llamará de inmediato.</h5>
              <NameForm/>
            </div>
          </>
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: '',
      lastName:'',
      email:'',
      raza:'',
      message:'',
      phone:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    // alert(this.state.myName + " "+ this.state.lastName+" "+this.state.email+" "+this.state.raza);
    // event.preventDefault();
    // this.setState(" ");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="row">
        <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 a-1">
          <label className="form-label">Nombre*</label>
            <input className="form-input form-input-lg" name="myName" type="text" value={this.state.myName} onChange={this.handleInputChange} />
        </div>
        <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Apellidos* </label>
            <input className="form-input form-input-lg" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange} />
        </div>
        <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="email" className="form-label">Correo electronico*</label>
            <input className="form-input form-input-lg" type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
        </div>
        <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label className="form-label">Tipo de raza*</label>
            <select className="form-selec form-selec-lg" value={this.state.raza} onChange={this.handleInputChange} name="raza">
              <option value="Bengala">Bengala</option>
              <option value="Bombay">Bombay</option>
              <option value="British Short Cut">British Short Cut</option>
              <option value="Korat">Korat</option>
              <option value="Ragdoll">Ragdoll</option>
              <option value="Persian">Persian</option>
              <option value="Scottish fold">Scottish fold</option>
              <option value="Maine Coon">Maine Coon</option>
            </select>
        </div>
        <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="message" className="form-label">Mensaje*</label>
          <textarea className="form-input form-input-lg" name="message" id="message"  rows="3" value={this.state.message} onChange={this.handleInputChange}>
            Escribe tu mensaje
          </textarea>
        </div>
        <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="phone" className="form-label">Teléfono Movil *</label>
            <input className="form-input form-input-lg" type="number" name="phone" value={this.state.phone} onChange={this.handleInputChange}/>
        </div>
        <div className="col- col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-6 b-1">
          <input type="submit" value="Enviar" className="button button1"/>
        </div>
      </form>
    );
  }
}