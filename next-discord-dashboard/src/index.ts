import { config } from 'dotenv';
import { createApp } from './utils/createApp';
config();

const PORT = process.env.PORT || 3001;

async function main() {
    console.log(`Running in ${process.env.ENVIROMENT} mode.`);
    try{    
        const app = createApp();
        app.listen(PORT, () => console.log(`Running at port ${PORT}`));
    }catch(err){
        console.log(err)
    }
}

main();