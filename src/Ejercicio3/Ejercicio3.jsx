import React, { useState } from "react";

function Ejercicio3() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "El nombre es obligatorio";
        }

        if (formData.email.trim() === "") {
            newErrors.email = "El correo electrónico es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El correo electrónico no es válido";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "La contraseña es obligatoria";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "La contraseña debe tener al menos 6 caracteres";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
            console.log("Datos enviados:", formData);
        }
    };

    return (
        <div>
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Ejercicio3;
