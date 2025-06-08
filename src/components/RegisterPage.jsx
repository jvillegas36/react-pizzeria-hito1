import React, { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setpassConfirm] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim() || !passConfirm.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe Ingresar todos los campos, para continuar!",
      });
    } else if (pass.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña debe ser contener 6 caracter como minimo.",
      });
    } else if (pass.trim() != passConfirm.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseñas no son identicas, corregir.",
      });
    } else {
      Swal.fire({
        title: "Se registro correctamente!",
        icon: "success",
        draggable: true,
      });
      e.currentTarget.reset();
    }
  };

  return (
    <section class="my-5">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-1">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registro de clientes
                    </p>

                    <form onSubmit={validarDatos} class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label for="ControlInput1" class="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="ControlInput1"
                            placeholder="name@example.com"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label for="inputPassword" class="form-label">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword"
                            placeholder="Ingrese Contraseña"
                            onChange={(e) => {
                              setPass(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4 ">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label for="inputPassword1" class="form-label">
                            Confirmar contraseña
                          </label>
                          <input
                            type="password"
                            id="inputPassword1"
                            class="form-control"
                            placeholder="Repita contraseña"
                            onChange={(e) => {
                              setpassConfirm(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div id="passwordHelpBlock" class="form-text text-start">
                        La contraseña debe tener al menos 6 caracteres.
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-5">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="/src/assets/img/imgPizza.avif"
                      class="img-fluid"
                      alt="Imagen Pizza"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
