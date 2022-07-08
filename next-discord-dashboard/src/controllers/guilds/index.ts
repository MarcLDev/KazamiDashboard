import { Request, Response } from 'express';
import { getBotGuildsService } from '../../services/guilds';

export async function getGuildsController(req: Request , res: Response) {
    try{
        const { data } = await getBotGuildsService();
        res.send(data);
    }catch(err){
        console.log(err);
        res.sendStatus(400).send('Error');
    }
}