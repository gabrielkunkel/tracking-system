import { Router } from "express";
import db from "../../db";

const router = Router();

router.get('/:id', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);
  
    res.send(rows.pop());
  });

export default router;