import express from 'express';
import { listarOficios, obtenerOficio, crearOficio, actualizarOficio, eliminarOficio, restablecerOficio  } from "../controllers/oficio.controller.js";

const router = express.Router();

router.get('/', listarOficios);
router.get('/:id', obtenerOficio);
router.post('/', crearOficio);
router.post('/restore/:id', restablecerOficio)
router.put('/:id', actualizarOficio);
router.delete('/:id', eliminarOficio);

export default router;
