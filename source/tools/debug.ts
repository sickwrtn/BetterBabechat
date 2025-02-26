
import * as env from "../.env/env";

/**
 * debug
 * @param content content 
 * @param code 0: function, 1: body value, 2: request, 3: event, 4: for, 5: add, 6: gc 
 */
export function debug(content: string,code: number | null = null): void{
    if (true){
        if (code == 0){
            console.log(`[Better Babe][DEBUG](function) ${content} loaded`);
        }
        else if(code == 1){
            console.log(`[Better Babe][DEBUG](body value) ${content} loaded`);
        }
        else if(code == 2){
            console.log(`[Better Babe][DEBUG](request) ${content} loaded`);
        }
        else if(code == 3){
            console.log(`[Better Babe][DEBUG](event) ${content} evented`);
        }
        else if(code == 4){
            console.log(`[Better Babe][DEBUG](for) ${content} completed`);
        }
        else if(code == 5){
            console.log(`[Better Babe][DEBUG](add) ${content} added`);
        }
        else if(code == 6){
            console.log(`[Better Babe][DEBUG](GC collect) ${content} removed`);
        }
        else{
            console.log(`[Better Babe][DEBUG] ${content}`);
        }
    }
}
