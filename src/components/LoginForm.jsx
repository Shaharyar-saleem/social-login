import React from 'react';
import "../App.css";

export default function LoginForm() {
  return (
    <div className="container">
    <div className="row d-flex justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card py-3 px-2">
                <p className="text-center mb-3 mt-2">LOG IN</p>
                <div className="row mx-auto ">
                    <div className="col-4"> <i className="fab fa-github"></i> </div>
                    <div className="col-4"> <i className="fab fa-facebook"></i> </div>
                    <div className="col-4"> <i className="fab fa-google"></i> </div>
                </div>
                <div className="division">
                    <div className="row">
                        <div className="col-3">
                            <div className="line l"></div>
                        </div>
                        <div className="col-6"><span>EMAIL</span></div>
                        <div className="col-3">
                            <div className="line r"></div>
                        </div>
                    </div>
                </div>
                <form className="myform">
                    <div className="form-group"> <input type="email" className="form-control" placeholder="Email" /> </div>
                    <div className="form-group"> <input type="password" className="form-control" placeholder="Mot de passe" /> </div>
                    <div className="form-group mt-3"> <button type="button" className="btn btn-block btn-primary btn-lg"><small>Login</small></button> </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
