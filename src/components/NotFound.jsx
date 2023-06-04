import React from 'react';

const NotFound = () => {
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">Titre introuvable</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span></p>
            <p class="lead">
                Essayez avec un autre titre.
              </p>
            <a href="index.html" class="btn btn-primary">Acceuil</a>
        </div>
    </div>
    );
};

export default NotFound;