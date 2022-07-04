import { Router } from "express";
import { isAuthenticated } from '../../utils/middleWares';
const router = Router();

router.get('/', isAuthenticated, (req, res, next) => {
    console.log('Sucess');
    res.send(200);
});

export default router;